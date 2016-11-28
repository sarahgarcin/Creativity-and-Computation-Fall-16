var fs = require('fs-extra'),
	glob = require("glob"),
	moment = require('moment'),
	path = require("path"),
	phantom = require('phantom');

module.exports = function(app, io){

	console.log("main module initialized");

	io.on("connection", function(socket){

		socket.on('generatePrint', function(name){
			printImage(name);
		});

		socket.on("newMedia", onNewMedia);

	});


// ------------- F U N C T I O N S -------------------
	this.getImage = function(name){return getImage(name);};
	function getImage(name) {
		return name;
	}


	function printImage(name){
		var date = getCurrentDate();
		var url = 'http://localhost:8080/print/'+name;
		var pdfFolderPath = "printbox";

		phantom.create().then(function(ph) {
		  ph.createPage().then(function(page) {
		  	page.open(url)
		  	.then(function(){
		  		page.property('paperSize', { format: "A4", orientation: 'portrait', margin: '0cm' })
		  		.then(function() {
			      setTimeout(function(){
				      page.render(pdfFolderPath+'/'+date+'.pdf').then(function() {
				      	console.log('success');
				      	io.sockets.emit('pdfIsGenerated');
				      	page.close();
					    	ph.exit();
				      });
			     	}, 2000)
				  });
		    });
		  });
		});
	}

	function onNewMedia( mediaData) {
		var newFileName = getCurrentDate();
		var pathToFile = 'public/images/' + newFileName;
		var fileExtension = '.jpg';
    var imageBuffer = decodeBase64Image(mediaData.mediaData);

    fs.writeFile( pathToFile + fileExtension, imageBuffer.data, function(err) {
      if (err) reject( err);
      console.log("Image added at path " + pathToFile + fileExtension);
      io.sockets.emit('mediaCreated', {'path':newFileName, 'file':newFileName});
    });
	}

	function getCurrentDate() {
    return moment().format("YYYYMMDD_HHmmss");
  }

    // Decode image in base 64
	// http://stackoverflow.com/a/20272545
	function decodeBase64Image(dataString) {

  	console.log("Decoding base 64 image");

		var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
		response = {};

		if (matches.length !== 3) {
			return new Error('Invalid input string');
		}

		response.type = matches[1];
		response.data = new Buffer(matches[2], 'base64');

		return response;
	}

// - - - END FUNCTIONS - - - 
};
