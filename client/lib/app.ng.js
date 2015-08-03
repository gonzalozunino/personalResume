angular.module('personalResumeApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angular-parallax',
  'duScroll',
  'sticky'
]);

onReady = function() {
  angular.bootstrap(document, ['personalResumeApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}