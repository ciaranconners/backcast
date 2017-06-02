var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  // selectVideo: function() {
  //   this.model = this;
  //   this.render();
  // },

  render: function() {

    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  events: {'select .embed-responsive-item': 'handleClick'},

  handleClick: function() {
    this.model.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
