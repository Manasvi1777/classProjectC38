class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    };
    getCount()
    {
       var playerref = database.ref('playerCount');
       playerref.on('value',(data)=>{
           playerCount=data.val();
       })
    }
    updateCount(count)
    {
      database.ref('/').update({
          'playerCount':count
      });
    }
    update()
    {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).update({
            'name':this.name,
            'distance':this.distance
        })
    }
    static getPlayersInfo()
    {
       var Players = database.ref('players');
       Players.on('value',(data)=>{
           allPlayers=data.val();
           console.log(allPlayers)
       })
    }
}