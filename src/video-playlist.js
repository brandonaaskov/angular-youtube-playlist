angular.module('fs.video-playlist', []);

angular.module('fs.video-playlist').directive('videoPlaylist', function() {
  return {
    restrict: 'E',
    template: '<ol class="fs-video-playlist">\n  <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">\n    <h3>{{video.name}}</h3>\n  </li>\n</ol>',
    link: function(scope) {
      var createDummyVideo;
      createDummyVideo = function(name) {
        return {
          id: Math.round(Math.random() * 1000000),
          name: name,
          channel: 'talksrealfast'
        };
      };
      return scope.videoPlaylist = [createDummyVideo('a dummy video'), createDummyVideo('another dummy video'), createDummyVideo("underiming brett\'s startup 101")];
    }
  };
});
