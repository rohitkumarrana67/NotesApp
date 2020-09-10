var ShowNote = Backbone.View.extend({
    template: _.template($('#show-note-template').html()),
    events: {
        'click #edit': 'editNote',
        'click #delete': 'deleteNote'
    },
    editNote: function () {
        var edit_note = new EditNote({
            model: this.model,
            el: '#play-area'
        })
    },
    deleteNote: function () {
        self = this
        this.model.destroy({
            url: "https://notes-app-rails.herokuapp.com/notes/" + self.model.get('id'),
            success: function () {
                location.reload();
            }
        });
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template({ model: this.model }));
        return this;
    }
})