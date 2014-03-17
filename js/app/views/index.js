Beaches.Views.Index = Backbone.View.extend({
  initialize: function () {
    var source = $('#photo').html();
    this.template = Handlebars.compile(source);
    this.masonryOptions = {
      columnWidth: 200,
      itemSelector: '.photo'
    };
  },

  render: function () {
    Beaches.album.each( this.addPhoto.bind(this) );
    return this;
  },

  addPhoto: function (photo) {
    
    //add photo to masonry container using handlebar template
    var newContent = this.template({ 
      thumbnail: photo.get('thumbnail')
    });
    this.$el.append(newContent);
  },

  initializeMasonry: function () {
    this.$el.masonry(this.masonryOptions);
  },
});
