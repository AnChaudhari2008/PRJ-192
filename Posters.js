AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "sun",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fsol.jpg?v=1604296185621",
        posX: -0.05,
        poxY: 0,
        poxZ: -5,
  




      },
      {
        id: "mercury",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259",
        posX: 4,
        posY: 3,
        posZ: 6
      },

      {
        id: "venus",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fvenus.jpg?v=1604312437571",
        posX: 2,
        posY: 5,
        posZ: 2
      },
      {
        id: "earth",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fearth.jpg?v=1604312404511",
        posX: 4,
        posY: 2,
        posZ: 3
      },
      {
        id: "moon",
        url: ""
      },
      {
        id: "mars",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259"
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
  entityEl.setAttribute('animation',{
   property: "rotation", to: "0 360 0",easing:"linear",loop: true, dur: 20000  })

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "sphere",
      radius: "6"
    });

    entityEl.setAttribute("position", {x:item.posX,y:item.posY,z:item.posZ });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
