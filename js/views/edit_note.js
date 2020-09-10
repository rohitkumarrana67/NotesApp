var EditNote = Backbone.View.extend({
    template: _.template($('#edit-note-template').html()),
    events: {
        'click #update': 'updateNote'
    },
    updateNote: function () {
        self = this
        var title = $('#title').val();
        var content = $('#summernote').val();
        var note = new NoteModel({
            title,
            content
        })

        note.save(null, {
            url: "https://notes-app-rails.herokuapp.com/notes/" + self.model.get('id'),
            method: 'PATCH',
            success: function (response) {
                var show_note = new ShowNote({
                    model: response,
                    el: '#play-area'
                })
            },
            error: function (error, response) {
                console.log(response);
            }
        })
    },
    initialize: function () {
        this.render();
        $('#summernote').summernote({
            height: 200,
            codemirror: {
                theme: 'monokai'
            }
        });
    },
    render: function () {
        this.$el.html(this.template({ model: this.model }));
        return this;
    }
});