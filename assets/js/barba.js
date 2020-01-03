window.addEventListener("load", () => {
  Barba.Pjax.start();

  var slide_left = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      // don't want anything to happen because the current page will be replaced - "slid over"
      var slideType = "slide-out-left";
      this.oldContainer.classList.add(slideType);

      var that = this;

      this.oldContainer.addEventListener("animationend", function() {
        that.oldContainer.classList.remove(slideType);
        that.done();
      });
    },

    fadeIn: function() {
      var slideType = "slide-left";
      this.newContainer.classList.add(slideType);

      var that = this;

      this.newContainer.addEventListener("animationend", function() {
        that.newContainer.classList.remove(slideType);
        that.done();
      });
    }
  });
  var slide_right = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      // don't want anything to happen because the current page will be replaced - "slid over"
      var slideType = "slide-out-right";
      this.oldContainer.classList.add(slideType);

      var that = this;

      this.oldContainer.addEventListener("animationend", function() {
        that.oldContainer.classList.remove(slideType);
        that.done();
      });
    },

    fadeIn: function() {
      var slideType = "slide-right";
      this.newContainer.classList.add(slideType);

      var that = this;

      this.newContainer.addEventListener("animationend", function() {
        that.newContainer.classList.remove(slideType);
        that.done();
      });
      var next = Barba.HistoryManager.currentStatus()
        .url.split("/")
        .pop();
      if (next == "gallery.html") galleryStart();
    }
  });
  var slide_up = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      // don't want anything to happen because the current page will be replaced - "slid over"
      var slideType = "slide-out-up";
      this.oldContainer.classList.add(slideType);

      var that = this;

      this.oldContainer.addEventListener("animationend", function() {
        that.oldContainer.classList.remove(slideType);
        that.done();
      });
    },

    fadeIn: function() {
      var slideType = "slide-up";
      this.newContainer.classList.add(slideType);

      var that = this;

      this.newContainer.addEventListener("animationend", function() {
        that.newContainer.classList.remove(slideType);
        that.done();
      });
    }
  });
  var slide_down = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      // don't want anything to happen because the current page will be replaced - "slid over"
      var slideType = "slide-out-down";
      this.oldContainer.classList.add(slideType);

      var that = this;

      this.oldContainer.addEventListener("animationend", function() {
        that.oldContainer.classList.remove(slideType);
        that.done();
      });
    },

    fadeIn: function() {
      var slideType = "slide-down";
      this.newContainer.classList.add(slideType);

      var that = this;

      this.newContainer.addEventListener("animationend", function() {
        that.newContainer.classList.remove(slideType);
        that.done();
      });
    }
  });
  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function() {
    // will have to hardcode which transition to use based on the current html page and the new html page
    var prev = Barba.HistoryManager.prevStatus()
      .url.split("/")
      .pop();
    var next = Barba.HistoryManager.currentStatus()
      .url.split("/")
      .pop();

    if (prev == "" || prev == "index.html") {
      if (next == "menu.html") return slide_left;
      else if (next == "gallery.html") return slide_right;
      else if (next == "contact.html") return slide_up;
      else if (next == "about.html") return slide_down;
    } else if (prev == "about.html") {
      if (next == "index.html") return slide_up;
      else if (next == "menu.html") return slide_left;
      else if (next == "gallery.html") return slide_right;
    } else if (prev == "contact.html") {
      if (next == "index.html") return slide_down;
      else if (next == "menu.html") return slide_left;
      else if (next == "gallery.html") return slide_right;
    } else if (prev == "gallery.html") {
      if (next == "index.html") return slide_left;
      else if (next == "contact.html") return slide_up;
      else if (next == "about.html") return slide_down;
    } else if (prev == "menu.html") {
      fixModalStuff();
      scroll_to_top();
      if (next == "index.html" || next == "") return slide_right;
      else if (next == "contact.html") return slide_up;
      else if (next == "about.html") return slide_down;
    }
  };
});
