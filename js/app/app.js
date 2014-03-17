window.Beaches = {
  Views: {},
  Models: {},
  Collections: {},
  Routers: {},
  initialize: function ($rootEl) {
    new Beaches.Routers.Router($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function () {
  var $rootEl = $('#content');
  Beaches.initialize($rootEl);
});
