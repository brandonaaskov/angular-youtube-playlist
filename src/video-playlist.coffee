angular.module 'fs.video-playlist', []

angular.module('fs.video-playlist').directive 'videoPlaylist', ->
  restrict: 'E'
  template:
    '''
      <ol class="fs-video-playlist">
        <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">
          <h3>{{video.name}}</h3>
        </li>
      </ol>
    '''
  link: (scope) ->
    createDummyVideo = (name) ->
      id: Math.round Math.random() * 1000000
      name: name
      channel: 'talksrealfast'

    scope.videoPlaylist = [
      createDummyVideo 'a dummy video'
      createDummyVideo 'another dummy video'
      createDummyVideo "where the fuck is brett?"
    ]