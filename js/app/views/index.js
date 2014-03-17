Beaches.Views.Index = Backbone.View.extend({
  initialize: function () {
    
    //compile handlebars template once
    //and store masonry options
    var source = $('#photo').html();
    this.template = Handlebars.compile(source);
    this.masonryOptions = {
      columnWidth: 400,
      itemSelector: '.photo'
    };

    //set up scroll handler listener
    _.bindAll(this, 'scrollHandler');
    $(window).scroll(this.scrollHandler);
    this.throttledFetch = _.throttle(
      this.fetchAssets, 
      1000, 
      { trailing: false }
    );

    //add newly loaded photos to masonry container
    this.listenTo(Beaches.album, 'add', this.addPhotoWithMasonry);
  },

  render: function () {
    Beaches.album.each( this.addPhoto.bind(this) );
    return this;
  },

  fetchAssets: function () {
    Beaches.album.getMorePhotos(Beaches.fetchParams);
  },

  scrollHandler: function (event) {
    var scrollPos = $(window).scrollTop();
    var scrollMax = $(document).height() - $(window).height();
    if (scrollMax - scrollPos < 50) {
      this.throttledFetch();
    } 
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
      source: photo.get('source').source_url,
      caption: photo.get('caption')
    });
  },

  initializeMasonry: function () {
    this.$el.masonry(this.masonryOptions);
  },
});
