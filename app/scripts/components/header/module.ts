/// <reference path="types/types.ts"/>

declare module ngApp.header {}

angular
    .module("components.header", [
      "header.controller",
      "header.directives"
    ]);
