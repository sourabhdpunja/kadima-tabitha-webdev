(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http, $routeParams) {
        var api = {
            "createWidget" : createWidget,
            "findAllWidgetsForPage": findAllWidgetsForPage,
            "findWidgetById" : findWidgetById,
            "updateWidget" : updateWidget,
            "deleteWidget" : deleteWidget,
            "updateWidgetPostion": updateWidgetPosition
        };
        return api;

        function createWidget(pageId) {
            return $http.post("/api/page/" +pageId +"/widget");
        }

        function findAllWidgetsForPage (pageId) {
            return $http.get("/api/page/" + pageId +"/widget");
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/"+widgetId);
        }

        function updateWidget(widgetId, newWidget) {
            return $http.put("/api/widget/" + widgetId, newWidget);
        }


        function deleteWidget(widgetId,  newWidget) {
            return $http.delete("/api/widget"+widgetId, newWidget);
        }


        function updateWidgetPosition(startIndex, finalIndex, pageId) {
            return $http.put("/page/" + pageId + "/widget?initial=" + startIndex + "&final=" + finalIndex);
        }

        function sortWidgets(startIndex, endIndex) {
            $http.put("/page/"+ $routeParams.pid +"/widget?start=" + startIndex + "&end=" + endIndex)
        }

    }


})();