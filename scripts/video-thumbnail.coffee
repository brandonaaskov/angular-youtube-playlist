angular.module('fs.video-playlist').directive 'videoThumbnail', ->
  restrict: 'E'
  replace: true
  transclude: true
  scope:
    video: '='
  template: '''
    <div class="video-thumbnail-container" ng-click="playVideo(video.youtube_id)">
      <div class="overlay">
        <i class="fa fa-play-circle-o"></i>
      </div>
      <div class="thumbnail" ng-transclude></div>
    </div>
  '''
  controller: ($scope) ->
    $scope.playVideo = (youtubeId) -> console.log 'play video', youtubeId
