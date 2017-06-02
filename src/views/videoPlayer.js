var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {'select .embed-responsive-item': 'handleClick'},

  handleClick: function() {
    this.model.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
