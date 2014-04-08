angular.module('fs.video-playlist').directive('videoPlaylist', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      videoPlaylist: '=playlist'
    },
    template: '<ol class="fs-video-playlist">\n  <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">\n    <h3>{{video.title}}</h3>\n    <h5>{{video.youtube_id}}</h5>\n    <video-thumbnail promote-video video="video"></video-thumbnail>\n  </li>\n</ol>',
    link: function(scope) {}
  };
});
