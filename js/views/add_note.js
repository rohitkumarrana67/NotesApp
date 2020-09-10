var AddNote = Backbone.View.extend({
    template: _.template($('#add-note-template').html()),
    events: {
        'click #add-note': 'addNote'
    },
    addNote: function () {
        var title = $('#title').val();
        var content = $('#summernote').val();
        var note = new NoteModel({
            title,
            content
        })

        note.save(null, {
            url: "https://notes-app-rails.herokuapp.com/notes",
            success: function (response) {
                location.reload();
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
        this.$el.html(this.template());
        return this;
    }
});