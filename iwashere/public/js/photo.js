
var imageMode = (function() {

  var $preview = $(".preview_image");
  var isRunning = true;

  function takePictures() {

    var videoFrame = currentStream.getVideoFrame();

    var invisibleCanvas = document.createElement('canvas');
    invisibleCanvas.width = videoFrame.videoWidth;
    invisibleCanvas.height = videoFrame.videoHeight;
    var invisibleCtx = invisibleCanvas.getContext('2d');
    invisibleCtx.drawImage( videoFrame, 0, 0, invisibleCanvas.width, invisibleCanvas.height);

    var imageData = invisibleCanvas.toDataURL('image/png');
    console.log(imageData);


    var mediaData =
    {
      "mediaType" : "photo",
      "mediaData" : imageData
    }
    // send instruction to record photo
    socket.emit( 'newMedia', mediaData);
    console.log('You take a picture ! ');
    $preview.find('.output').attr('src', '');
  }


  return {
    init : function() {
      takePictures();
      $preview.find('.output').attr('src', '');
      isRunning = true;
    },

    stop: function() {
      isRunning = false;
    },
    showImagePreview : function( pathToMediaFile) {
      $preview.find('.output').attr("src", pathToMediaFile);
    },

    isRunning: function() {
      return isRunning;
    },
  }
})();


