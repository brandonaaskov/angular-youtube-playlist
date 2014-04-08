angular.module('fs.video-playlist').directive('videoThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      video: '='
    },
    template: '<div class="video-thumbnail-container" ng-click="playVideo(video.youtube_id)">\n  <div class="overlay">\n    <i class="fa fa-play-circle-o"></i>\n  </div>\n  <div class="thumbnail" ng-transclude></div>\n</div>',
    controller: function($scope) {
      return $scope.playVideo = function(youtubeId) {
        return console.log('play video', youtubeId);
      };
    }
  };
});
