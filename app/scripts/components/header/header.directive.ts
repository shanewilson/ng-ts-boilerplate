module ngApp.header.directives {

  import IHeaderController = ngApp.header.controllers.IHeaderController;

  function header(): ng.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/header/templates/header.html",
      controller: "HeaderController as HeaderController"
    };
  }

  angular
      .module("header.directives", [])
      .directive("ngaHeader", header);
}
