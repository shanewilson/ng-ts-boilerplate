module ngApp.header.controllers {
  export interface IHeaderController {
    isCollapsed: boolean;
    toggleCollapsed(): void;
    collapse(): void;
  }

  class HeaderController implements IHeaderController {
    isCollapsed: boolean = true;

    /* @ngInject */
    constructor() {
    }

    collapse() : void {
      this.isCollapsed = true;
    }

    toggleCollapsed() : void {
      this.isCollapsed = !this.isCollapsed;
    }

  }

  angular
      .module("header.controller", [])
      .controller("HeaderController", HeaderController);
}
