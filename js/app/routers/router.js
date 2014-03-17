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
        that._swapView(indexView);
      }
    });
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
