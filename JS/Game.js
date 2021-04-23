class Game
{
 constructor(){};
 getState()
 {
    var gs = database.ref("gameState");
    gs.on("value",function (data){
        gameState = data.val();
    })
 }

 update(states)
 {
     database.ref("/").update({
         'gameState':states
     })
 }
 async start()
 {
    if (gameState===0)
    {
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once('value');
        if (playerCountRef.exists())
        {
            playerCount=playerCountRef.val();
            player.getCount();
        }
        form=new Form();
        form.display();
    }
    car1 =createSprite(displayWidth/3,displayHeight);
    car2 =createSprite(displayWidth/3+200,displayHeight);
    car3 =createSprite(displayWidth/3+400,displayHeight);
    car4 =createSprite(displayWidth/3+600,displayHeight);
    cars=[car1,car2,car3,car4];
 }
 play()
 {
     form.hide();
     textSize(20);
     text("Game Start",350,250);
     Player.getPlayersInfo();
     if (allPlayers!==undefined)
     {
         var index = 0;
         var x = displayWidth/2;
         var y ;
         for (var i in allPlayers)
         {
           index++;
           x=x+200;
           y=(displayHeight*2+200)-allPlayers[i].distance;
           cars[index-1].x=x;
           cars[index-1].y=y;

           if (index==player.index)
           {
               cars[index-1].shapecolor="red";
               camera.position.x=displayWidth*1.5;
               camera.position.y=cars[index-1].y
           }
         y+=30;
         textSize(10);
         text(allPlayers[i].name+":"+allPlayers[i].distance,350,y);
        }
     }
     if (keyIsDown(UP_ARROW)&&player.index!==null)
     {
         player.distance+=50;
         player.update();
     }
 }
}