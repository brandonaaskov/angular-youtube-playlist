angular.module('fs.video-playlist', []);
// Generated by CoffeeScript 1.7.1
angular.module('fs.video-playlist').directive('promoteVideo', function($compile) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var overlayContainer, template;
      console.log('promote video linked', element);
      overlayContainer = element.find('i').parent();
      template = angular.element($compile('<span class="promote" ng-click="promote()">Promote</span>')(scope));
      overlayContainer.prepend(template);
      return scope.promote = function(event) {
        console.log('promote');
        return event.stopPropagation();
      };
    }
  };
});

angular.module('fs.video-playlist').directive('videoPlaylist', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      videoPlaylist: '=playlist'
    },
    template: '<ol class="fs-video-playlist">\n  <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">\n    <h3>{{video.title}}</h3>\n    <h5>{{video.youtube_id}}</h5>\n    <video-thumbnail promote-video video="video">\n      <img src="{{video.thumbnail_url}}">\n    </video-thumbnail>\n  </li>\n</ol>',
    link: function(scope) {}
  };
});

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
