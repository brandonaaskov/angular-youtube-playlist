angular.module('fs.video-playlist').directive('promoteVideo', function($compile) {
  return {
    restrict: 'A',
    link: function(scope) {
      return console.log('promote video linked');
    }
  };
});
