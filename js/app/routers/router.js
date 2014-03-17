Beaches.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  index: function () {
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
