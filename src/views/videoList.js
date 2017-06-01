var VideoListView = Backbone.View.extend({

  initialize: function() {
    // need to append <ul> element to VideoListView <div>
    // need to use map to create each of the <li> elements
    // containing the video list entries
    // this.render();
    this.listenTo(this.collection, 'sync', this.render); 
  },


  render: function() {
    // console.log('this', this);
    // console.log('this.$el', this.$el);

    this.$el.children().detach();
    this.$el.html(this.template());  // div
    // console.log('this.$el.html(this.template())', this.$el.html(this.template())); // div
    // IGNORE: videoList.html is a <ul> template of hard-coded <li>s
     // var referenceToNewDOM = map over exampleVideoData
        // return <div><h5><em>videoListEntry</em> view goes here</h5></div>
        // (3-collection for reference)
    this.$el.find('h5').append(this.collection.map(function(video) {
      var video = new Video(video);
      return new VideoListEntryView({model: video});
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

// append takes an array of elements or a single element

    // var ourVideoListView = new VideoListView();
    // for (let i = 0; i <= window.exampleVideoData.length; i++) {
    //   var listEntry = new VideoListEntryView();
    //   ourVideoListView.render().append(listEntry);
    // }
