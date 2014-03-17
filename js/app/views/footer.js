Beaches.Views.Footer = Backbone.View.extend({
  events: {
    'click .load-more': 'fetchPhotos'
  },

  render: function () {
    var $link = $('<a href="#">Load more</a>').addClass('load-more');
    this.$el.html($link);
    return this;
  },

  fetchPhotos: function (event) {
    event.preventDefault();
    if (!Beaches.album.hasMorePhotos()) {
      this.$el.fadeOut(300, this.showNoMorePhotos.bind(this));
    } else {
      Beaches.album.getMorePhotos();
    }
  },

  showNoMorePhotos: function () {
    this.$el.html('No more photos');
    this.$el.fadeIn();
  }
});
