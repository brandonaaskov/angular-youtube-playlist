angular.module 'fs.video-playlist', []

angular.module('fs.video-playlist').directive 'videoPlaylist', ($modal) ->
  restrict: 'E'
  template:
    '''
      <ol class="fs-video-playlist">
        <li class="fs-video" ng-repeat="video in videoPlaylist track by video.id">
          <h3>{{video.title}}</h3>
          <h5>{{video.youtube_id}}</h5>
          <img video-thumbnail promote-video ng-src="video.thumbnail_url" alt=""/>
        </li>
      </ol>
    '''
  link: (scope) ->
    scope.videoPlaylist = [
      {
        id: 1,
        user_id: 2,
        youtube_id: "x0f0_DF6pow",
        thumbnail_url: "http://i1.ytimg.com/vi/x0f0_DF6pow/hqdefault.jpg",
        title: "DJO Hedgehog 1"
      },
      {
        id: 2,
        user_id: 2,
        youtube_id: "LYPa1eUKnf4",
        thumbnail_url: "http://i1.ytimg.com/vi/LYPa1eUKnf4/hqdefault.jpg",
        title: "DJO Hedgehog 2"
      }
    ]

    scope.openPlayer = ->
      options =
        templateUrl: 'featuredVideoModal.html'
        controller: 'featuredVideosModalController'
        resolve:
          videos:  () -> scope.videoPlaylist
          selected: () -> _.first scope.videoPlaylist
