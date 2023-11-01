AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      sun: {
        banner_url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fsol.jpg?v=1604296185621",
        title: "Sun",
        released_year: "450 BC",
        description: 
        "The source of all the heat and light that makes flowers bloom, songbirds croon, and sunbathers swoon."
      },
      mercury: {
        banner_url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259",
        title: "Mercury",
        released_year: "3000 BC",
        description:
          "It has a solid surface that is covered with craters. It has no atmosphere, and it doesn't have any moons."
      },
      venus: {
        banner_url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fvenus.jpg?v=1604312437571",
        title: "Venus",
        released_year: "1610",
        description:
         "A cloud-swaddled planet named for a love goddess, and often called Earth's twin."
      },
      earth: {
        banner_url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fearth.jpg?v=1604312404511",
        title: "Earth",
        released_year: "4.6 Billion Years Ago",
        description:
         " Earth is the only place in the known universe confirmed to host life."
      }
      };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.09, z: 0.05 });
    return entityEl;
  },
});
