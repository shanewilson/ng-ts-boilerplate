module ngApp.header.directives {

  import IHeaderController = ngApp.header.controllers.IHeaderController;

  function header():ng.IDirective {
    var link = function (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes, controller:IHeaderController) {

    };

    return {
      restrict: "E",
      link: link,
      templateUrl: 'components/header/templates/header.html',
      controller: 'HeaderController as HeaderController'
    };
  }

  angular
      .module("header.directives", [])
      .directive("ngaHeader", header);
}
