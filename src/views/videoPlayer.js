var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  events: {'select .embed-responsive-item': 'handleClick'},

  handleClick: function() {
    this.model.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
