
(function() {
  "use strict";
  
  howdy.app.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('home', {
        url: "/login",
        views: {
          default: {
            templateUrl: "../public/pages/_login_form.html",
            controller: "LoginPageController"
          }
        }
      })
    }
  ]);

}).call(this);
