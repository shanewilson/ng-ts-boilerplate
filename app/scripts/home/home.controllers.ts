module ngApp.home.controllers {
  export interface IHomeController {}

  class HomeController implements IHomeController {
    /* @ngInject */
    constructor() {}
  }

  angular
      .module("home.controller", [])
      .controller("HomeController", HomeController);
}
