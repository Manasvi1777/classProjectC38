class Form
{
  constructor()
  {
    this.input = createInput("enter_name");
    this.title = createElement('h2');
    this.button = createButton("Start");
    this.greeting = createElement('h3');
  };
  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display()
  {
      this.title.html("CAR RACING GAME");
      this.title.position(displayWidth/2,1);
           
      this.input.position(displayWidth,displayHeight);

      this.button.position(displayWidth,displayHeight+100);

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount+=1;
          player.index=playerCount;
          player.update();;
          player.updateCount(playerCount);
          this.greeting.html("hello "+player.name);
          this.greeting.position(displayWidth/2+120,displayHeight/2)
      })  
  }
}