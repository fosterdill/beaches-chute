Beaches.Collections.Album = Backbone.Collection.extend({
  model: Beaches.Models.Asset,

  url: function () {
    return this.nextUrl || "https://api.getchute.com/v2/albums/asYLgnzd/assets";
  },

  parse: function (response) {
    this.nextUrl = response.pagination.next_page;
    return response.data;
  },

  getMorePhotos: function (params) {
    if (this.hasMorePhotos()) {
      this.fetch({ 
        data: params,
        remove: false
      });
    }
  },

  hasMorePhotos: function () {
    if (this.nextUrl != null) {
      return true;
    } else {
      return false;
    }
  }
});
