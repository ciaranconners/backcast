var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      collection: this.videos,
      el: this.$('.list'),
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player'),
      model: this.videos.at(0)
    }).render();


    return this;
  },

  template: templateURL('src/templates/app.html')

});
