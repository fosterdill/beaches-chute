Beaches.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function ($rootEl, $footerEl) {
    this.$rootEl = $rootEl;
    this.$footerEl = $footerEl;
  },

  index: function () {
    var that = this;
    Beaches.album.fetch({
      data: Beaches.fetchParams,
      success: function () {
        var indexView = new Beaches.Views.Index();
        var footerView = new Beaches.Views.Footer();
        that._swapView(indexView, indexView.initializeMasonry);
        that.$footerEl.html(footerView.render().$el);
      }
    });
  },

  //helper function that helps avoid view event listener leaks
  _swapView: function (view, callback) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
    
    //necessary to call method on view after masonry container rendered 
    //to DOM, masonry#appended won't work unless already on DOM, need
    //to pass callback written in view
    if (callback) callback.call(view);
  }
});
