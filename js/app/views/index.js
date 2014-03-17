Beaches.Views.Index = Backbone.View.extend({
  initialize: function () {
    var source = $('#photo').html();
    this.template = Handlebars.compile(source);
    this.masonryOptions = {
      columnWidth: 200,
      itemSelector: '.photo'
    };
    this.listenTo(Beaches.album, 'add', this.addPhotoWithMasonry);
  },

  render: function () {
    Beaches.album.each( this.addPhoto.bind(this) );
    return this;
  },

  //appends to DOM and calls masonry's appended method
  addPhotoWithMasonry: function (photo) {
    var newContent = this.renderTemplate(photo);
    var photoElement = $(newContent).get(0);
    this.$el.append(photoElement).masonry('appended', photoElement);
  },

  addPhoto: function (photo) {
    
    //add photo to masonry container using handlebar template
    //does not use appended method. Only used for initial pull
    var newContent = this.renderTemplate(photo);
    this.$el.append(newContent);
  },

  renderTemplate: function (photo) {
    return this.template({ 
      thumbnail: photo.get('thumbnail') 
    });
  },

  initializeMasonry: function () {
    this.$el.masonry(this.masonryOptions);
  },
});
