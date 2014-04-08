angular.module('fs.video-playlist').directive 'promoteVideo', ($compile) ->
  restrict: 'A'
  link: (scope) ->
    console.log 'promote video linked'
