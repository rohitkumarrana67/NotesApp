var AppRouter = Backbone.Router.extend({
    routes: {
        "": "notes"
    },
    notes: function () {
        var notes_view = new Notes({
            el: "#notes-collection"
        })
    }
})