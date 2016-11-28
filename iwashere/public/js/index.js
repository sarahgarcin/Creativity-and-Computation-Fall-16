/* VARIABLES */
var socket = io.connect();

/* sockets */
socket.on('connect', onSocketConnect);
socket.on('error', onSocketError);
socket.on('pdfIsGenerated', startStream);
socket.on('mediaCreated', onMediaCreated);


jQuery(document).ready(function($) {
	init();
	console.log('hello');
});


function init(){

	// when click on the button 
	$('.button').on('click', function(){
		// 1- add here the code to connect to facebook

		// 2- Generate image to print
		// send the name to the function 
		generatePrint('Kris');

	});
}

function generatePrint(name){
	socket.emit('generatePrint', name);
}

// start stream video 
function startStream(){
	// start camera feed
  currentStream.startCameraFeed().then( function() {
  	setTimeout(function(){
  		imageMode.init();
  	}, 3000);
  }, function(err) {
    console.log( "Failed to start camera feed for photo : " + err);
  });


  currentStream.init()
    .then( function() {
    	console.log("stream init");
    }, function(err) {
      console.log("failed to init : " + err);
    });
}

// Show image 
function onMediaCreated( image){
  imageMode.showImagePreview( '/images/'+image.file+'.jpg');
  currentStream.stopAllFeeds();
}

/* sockets */
function onSocketConnect() {
	sessionId = socket.io.engine.id;
	console.log('Connected ' + sessionId);
};

function onSocketError(reason) {
	console.log('Unable to connect to server', reason);
};