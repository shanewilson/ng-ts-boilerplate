/// <reference path="../../../types/types.ts" />
/// <reference path="header.controller.ts"/>
/// <reference path="header.directive.ts"/>

declare module ngApp.components.header {}

angular
    .module("components.header", [
      "header.controller",
      "header.directives"
    ]);
