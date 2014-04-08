angular.module('fs.video-playlist').directive 'videoThumbnail', ->
  restrict: 'E'
  replace: true
  scope:
    video: '='
  template: '''
    <div class="video-thumbnail-container">
      <div class="overlay">
        <i class="fa fa-play-circle-o"></i>
      </div>
      <img class="thumbnail" src="{{video.thumbnail_url}}">
    </div>
  '''
