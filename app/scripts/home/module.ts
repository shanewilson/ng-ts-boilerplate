/// <reference path="../../types/types.ts" />
/// <reference path="home.controllers.ts"/>

module ngApp.home {
  "use strict";

  /* @ngInject */
  function homeConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider.state("home", {
      url: "/",
      controller: "HomeController as hc",
      templateUrl: "home/templates/index.html"
    });
  }

  angular
      .module("ngApp.home", [
        "home.controller",
        "ui.router.state"
      ])
      .config(homeConfig);
}
