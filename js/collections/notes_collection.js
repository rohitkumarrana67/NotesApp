var NotesCollection = Backbone.Collection.extend({
    url: "https://notes-app-rails.herokuapp.com/notes"
})

var notes_collection = new NotesCollection();