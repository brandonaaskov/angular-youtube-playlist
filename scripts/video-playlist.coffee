angular.module('fs.video-playlist').directive 'videoPlaylist', ($compile) ->
  restrict: 'E'
  replace: true
  scope:
    videoPlaylist: '=playlist'
  template:
    '''
      <ol class="fs-video-playlist">
        <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">
          <h3>{{video.title}}</h3>
          <h5>{{video.youtube_id}}</h5>
          <video-thumbnail promote-video video="video">
            <img src="{{video.thumbnail_url}}">
          </video-thumbnail>
        </li>
      </ol>
    '''
  link: (scope) ->
    # modal stuff
#    scope.openPlayer = ->
#      options =
#        templateUrl: 'featuredVideoModal.html'
#        controller: 'featuredVideosModalController'
#        resolve:
#          videos:  () -> scope.videoPlaylist
#          selected: () -> _.first scope.videoPlaylist
