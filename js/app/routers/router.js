Beaches.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  index: function () {
    var that = this;
    Beaches.album.fetch({
      data: Beaches.params,
      success: function () {
        var indexView = new Beaches.Views.Index();
        that._swapView(indexView, indexView.initializeMasonry);
      }
    });
  },

  //helper function that helps avoid view event listener leaks
  _swapView: function (view, callback) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
    
    //necessary to call method on view after masonry el rendered to
    //DOM, masonry#appended won't work unless already on DOM, need
    //to pass callback written in view
    if (callback) callback.call(view);
  }
});
