module.exports = function (app) {
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    var widgets =
        [
            {_id: "123", name: "Gizmodo", widgetType: "HEADER", pageId: "321", size: 2, text: "GIZMODO"},
            {_id: "234", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
            {
                _id: "345", name: "lorepixel", widgetType: "IMAGE", pageId: "321", width: "100%",
                url: "http://lorempixel.com/400/200/"
            },
            {_id: "456", name: "Lorem", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
            {_id: "567", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
            {
                _id: "678", name: "Youtube", widgetType: "YOUTUBE", pageId: "321", width: "100%",
                url: "https://www.youtube.com/embed/AM2Ivdi9c4E"
            },
            {_id: "789", name: "html lorem", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
        ];

    function createWidget(req, res) {
        var newWidget = req.body;
        newWidget._id = widgets.size + 1;
        widgets.push(newWidget);
        res.json(newWidget);
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params['pageId'];
        for (var w in widgets) {
            var widget = widgets[w];
            if (widget.pageId = pageId) {
                res.send(widget);
            }
        }
        res.sendStatus(404).send({});
    }

    function findWidgetById(req, res) {
        var widgetId = req.params['widgetId'];
        for (var w in widgets) {
            var widget = widgets[w];
            if (widget._id === widgetId) {
                res.send(widget);
                return;
            }
        }
        res.sendStatus(404).send({});
    }

    function updateWidget(req, res) {
        var widgetId = req.params['widgetId'];
        var newWidget = req.body;
        for (var w in widgets) {
            var widget = widgets[w];
            if (widget._id === widgetId) {
                <!-- FIXME why not just page.name = newWidget.name?  -->
                widgets[w].text = newWidget.name;
                return;
            }
        }
    }

    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        for (var w in widgets) {
            if (widgets[w]._id == widgetId) {
                widgets.splice(w, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404).send({});
    }
};