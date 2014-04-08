// Generated by CoffeeScript 1.7.1
angular.module('fs.video-playlist').directive('promoteVideo', function($compile) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var overlayContainer, template;
      console.log('promote video linked', element);
      overlayContainer = element.find('i').parent();
      template = angular.element($compile('<span class="promote" ng-click="promote($event)">Promote</span>')(scope));
      overlayContainer.prepend(template);
      return scope.promote = function(event) {
        console.log('promote');
        return event.stopPropagation();
      };
    }
  };
});
