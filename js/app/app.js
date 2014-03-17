window.Beaches = {
  Views: {},
  Models: {},
  Collections: {},
  Routers: {},
  initialize: function ($rootEl) {
    Beaches.album = new Beaches.Collections.Album();
    Beaches.params = {
      per_page: 4
    };
    new Beaches.Routers.Router($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function () {
  var $rootEl = $('#content');
  Beaches.initialize($rootEl);
});
