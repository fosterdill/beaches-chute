window.Beaches = {
  Views: {},
  Models: {},
  Collections: {},
  Routers: {},
  initialize: function ($rootEl, $footerEl) {
    Beaches.album = new Beaches.Collections.Album();
    Beaches.fetchParams = {
      per_page: 6 
    };
    new Beaches.Routers.Router($rootEl, $footerEl);
    Backbone.history.start();
  }
};

$(document).ready(function () {
  var $rootEl = $('#content');
  var $footerEl = $('#footer');
  Beaches.initialize($rootEl, $footerEl);
});
