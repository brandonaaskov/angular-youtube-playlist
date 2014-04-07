angular.module 'fs.video-playlist', []

angular.module('fs.video-playlist').directive 'promoteVideo', ($compile) ->
  restrict: 'A'
  link: (scope) ->
