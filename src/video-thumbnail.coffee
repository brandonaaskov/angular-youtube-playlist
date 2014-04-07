angular.module 'fs.video-playlist', []

angular.module('fs.video-playlist').directive 'videoThumbnail', ($compile) ->
  restrict: 'A'
  link: (scope, element) ->
    # todo: support play icon overlay (resizable... font awesome?)
    console.log 'video-thumbnail element', element

