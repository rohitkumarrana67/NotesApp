var Note = Backbone.View.extend({
    template: _.template($('#notes-tab-template').html()),
    events: {
        "click #click-note": 'showNote'
    },
    showNote: function () {
        var show_note = new ShowNote({
            model: this.model,
            el: '#play-area'
        })
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template({ model: this.model }));
        return this;
    }
})