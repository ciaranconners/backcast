var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();

    // select '.video-list-entry-title'
    // this.find('.video-list-entry-title').on('select', function() {
    //   this.model.select();
    // });
    // this.model.on('click', function() {
    //   this.model.select();
    // });
  },

  events: {'click .video-list-entry-title': 'handleClick'},

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    // console.log(this.model.attributes);

    this.$el.html(this.template(this.model.attributes));

    // this.$el.html(this.template(this.model.attributes.snippet));
    // ^ Attempt to access snippet attribute
    // ^ referencing the id and snippet (snippet has all attributes) attributes for a Video model

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
