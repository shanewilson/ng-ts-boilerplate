module ngApp.widgets.controllers {
  import IWidgetsService = ngApp.widgets.services.IWidgetsService;
  import IWidget = ngApp.widgets.models.IWidget;
  import IWidgets = ngApp.widgets.models.IWidgets;

  export interface IWidgetsController {
    widgets: IWidgets;
  }

  class WidgetsController implements IWidgetsController {
    widgets:IWidgets;

    /* @ngInject */
    constructor(WidgetsService:IWidgetsService) {
      WidgetsService.getWidgets().then((widgets:IWidgets) => {
        this.widgets = widgets;
      });
    }
  }

  export interface IWidgetController {
    widget: IWidget;
  }

  class WidgetController implements IWidgetController {
    widget:IWidget;

    /* @ngInject */
    constructor(widget:IWidget) {
      this.widget = widget;
    }
  }

  angular
      .module("widgets.controller", [
        "widgets.services"
      ])
      .controller("WidgetsController", WidgetsController)
      .controller("WidgetController", WidgetController)
}
