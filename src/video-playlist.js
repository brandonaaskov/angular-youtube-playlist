// Generated by CoffeeScript 1.7.1
angular.module('fs.video-playlist', []);

angular.module('fs.video-playlist').directive('videoPlaylist', function($modal) {
  return {
    restrict: 'E',
    template: '<ol class="fs-video-playlist">\n  <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">\n    <h3>{{video.title}}</h3>\n    <h5>{{video.youtube_id}}</h5>\n    <img video-thumbnail promote-video ng-src="video.thumbnail_url" alt=""/>\n  </li>\n</ol>',
    link: function(scope) {
      scope.videoPlaylist = [
        {
          id: 1,
          user_id: 2,
          youtube_id: "x0f0_DF6pow",
          thumbnail_url: "http://i1.ytimg.com/vi/x0f0_DF6pow/hqdefault.jpg",
          title: "DJO Hedgehog 1"
        }, {
          id: 2,
          user_id: 2,
          youtube_id: "LYPa1eUKnf4",
          thumbnail_url: "http://i1.ytimg.com/vi/LYPa1eUKnf4/hqdefault.jpg",
          title: "DJO Hedgehog 2"
        }
      ];
      return scope.openPlayer = function() {
        var options;
        return options = {
          templateUrl: 'featuredVideoModal.html',
          controller: 'featuredVideosModalController',
          resolve: {
            videos: function() {
              return scope.videoPlaylist;
            },
            selected: function() {
              return _.first(scope.videoPlaylist);
            }
          }
        };
      };
    }
  };
});
