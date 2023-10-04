class Form {
  constructor() {
    this.backgroundImg = createImg("./assets/loadingScreen.png", "background");
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.reset = createButton('');
  }

  setElementsPosition() {
    this.backgroundImg.position(1,1);
    this.titleImg.position(250, 70);
    this.input.position(width / 2 - 110, height / 2 - 100);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 380, height / 2 - 100);
    this.reset.position(1080, 465);
  }
  

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.backgroundImg.class("background");
    this.reset.class("resetButton");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.loadingScreen.hide();
    this.reset.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      this.reset.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  

  display() { 
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  };
  }

