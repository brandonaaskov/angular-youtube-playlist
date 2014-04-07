angular.module('fs.video-playlist', []);

angular.module('fs.video-playlist').directive('videoPlaylist', function($http) {
  return {
    restrict: 'E',
    template: '<ol class="fs-video-playlist">\n  <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">\n    <h3>{{video.title}}</h3>\n    <h5>{{video.youtube_id}}</h5>\n    <img ng-src="video.thumbnail_url" alt=""/>\n  </li>\n</ol>',
    link: function(scope) {
      var createDummyVideo;
      createDummyVideo = function(name) {
        return {
          id: Math.round(Math.random() * 1000000),
          name: name,
          channel: 'erb'
        };
      };
      return scope.videoPlaylist = [
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
    }
  };
});
