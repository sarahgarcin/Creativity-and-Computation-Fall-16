var currentStream = (function(context) {

  var videoElement = document.querySelector('#video');
  var videoStream;


  function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
  }

  function gotDevices(sourceInfos) {
    // socket.emit('test', sourceInfos[3].label);
    if(sourceInfos[3].label == 'camera 0, facing back'){
      return sourceInfos[3].deviceId;
    }
    else{
      return sourceInfos[0].deviceId;
    }
  }

  function getCameraFeed() {
    return new Promise(function(resolve, reject) {
      console.log( "Getting camera feed");
      navigator.mediaDevices.enumerateDevices()
      .then(function(deviceInfos) {
        return gotDevices(deviceInfos);
      }).then(function(videoSource){
        console.log(videoSource);
        navigator.getUserMedia(
          {
            video: {
              optional: [ videoSource ? {sourceId: videoSource} : undefined],
              mandatory: {
                minWidth: 1280,
                minHeight: 720
              }
            },
            audio: false
          },
          function (stream) {
            resolve( stream);
          },
          function(err) {
            alert('\n\n error: ' + JSON.stringify(err));
          }
        );
      });
    });
  }

  

  // declare function outside of the scope
  return {

    init : function() {
      return new Promise(function(resolve, reject) {
        navigator.mediaDevices.enumerateDevices()
          .then(function(deviceInfos) {
            gotDevices(deviceInfos);
            resolve();
          }, function(err) {
            reject("Failed to init stream : " + err);
          });
      });
    },

    getVideoFrame : function() {
      return videoElement;
    },

    stopAllFeeds : function() {
      videoElement.pause();
      videoElement.src = '';
      imageMode.stop();
    },

    startCameraFeed : function() {
      return new Promise(function(resolve, reject) {
        currentStream.stopAllFeeds();
        getCameraFeed()
          .then( function( stream) {
            videoStream = stream;
            if (navigator.mozGetUserMedia) {
              videoElement.mozSrcObject = stream;
            } else {
              var vendorURL = window.URL || window.webkitURL;
              videoElement.src = vendorURL.createObjectURL(stream);
            }
            videoElement.play();
            resolve();
          }, function(err) {
            console.log( " failed to start camera feed: " + err);
            reject();
          });
      });
    },

  }

})();