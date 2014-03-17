Beaches.Collections.Album = Backbone.Collection.extend({
  model: Beaches.Models.Asset,

  url: function () {
    return this.nextUrl || "https://api.getchute.com/v2/albums/asYLgnzd/assets";
  },

  parse: function (response) {
    this.nextUrl = response.pagination.next_page;
    return response.data;
  }
});
