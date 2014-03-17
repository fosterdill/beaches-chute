Beaches.Views.Index = Backbone.View.extend({
  initialize: function () {
    var source = $('#photo').html();
    this.template = Handlebars.compile(source);
  },

  render: function () {
  }
});
