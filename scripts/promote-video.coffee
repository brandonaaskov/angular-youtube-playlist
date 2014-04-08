angular.module('fs.video-playlist').directive 'promoteVideo', ($compile) ->
  restrict: 'A'
  link: (scope, element) ->
    console.log 'promote video linked', element
    overlayContainer = element.find('i').parent()
    template = angular.element $compile('<span class="promote" ng-click="promote($event)">Promote</span>')(scope)
    overlayContainer.prepend template

    scope.promote = (event) ->
      console.log 'promote'
      event.stopPropagation()