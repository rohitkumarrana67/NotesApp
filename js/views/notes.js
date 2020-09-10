var Notes = Backbone.View.extend({
    collection: notes_collection,
    template: _.template($('#notes-template').html()),
    events: {
        'click #new-note': 'newNote'
    },
    newNote: function () {
        var add_note = new AddNote({
            el: '#play-area'
        })
    },
    initialize: function () {
        this.render();
        this.collection.on('change', this.render, this)
    },
    render: function () {
        self = this
        this.collection.fetch({
            success: function (response) {
                response.each(note => {
                    self.$el.find('#notes').append(new Note({ model: note }).render().$el);
                })
                let size = response.length;
                var show_note = new ShowNote({
                    model: new NoteModel(response.toJSON()[size - 1]),
                    el: '#play-area'
                })
            }
        })
        this.$el.html(this.template())
    }
})