import Phaser from "phaser";

var config = {
  type: Phaser.CANVAS,
  parent: 'content',
  width: 800,
  height: 600,   
  scene: {
      key: 'main',
      preload: preload,
      create: create,
      update: update
  }
};
var game = new Phaser.Game(config);
var graphics;
var path;
function preload() {
 var asset = "https://raw.githubusercontent.com/bhunk/towerdeez/master/src/assets/";
  // load the game assets – enemy and turret atlas
  //this.load.atlas('sprites', 'assets/spritesheet.png', 'assets/spritesheet.json'); 
  this.load.image('enemy', 'https://raw.githubusercontent.com/bhunk/towerdeez/master/src/assets/sprite.png');   
  this.load.image('bullet', asset+'bullet.png');


  
  
}

var Enemy = new Phaser.Class({
  Extends: Phaser.GameObjects.Image,
  initialize:
  
  function Enemy (scene)
  {
      this.add.image('enemy','https://raw.githubusercontent.com/bhunk/towerdeez/master/src/assets/sprite.png')
      Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet','enemy');
      
      this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
      //this.graphics.fillCircle(this.follower.vec.x, this.follower.vec.y, 12);
  },
  startOnPath: function ()
        {
            // set the t parameter at the start of the path
            this.follower.t = 0;
            
            // get x and y of the given t point            
            path.getPoint(this.follower.t, this.follower.vec);
            
            // set the x and y of our enemy to the received from the previous step
            this.setPosition(this.follower.vec.x, this.follower.vec.y);
            
        },
  update: function (time, delta)
  {
    var ENEMY_SPEED = 1/10000;
    // move the t point along the path, 0 is the start and 0 is the end
    this.follower.t += ENEMY_SPEED * delta;
    
    // get the new x and y coordinates in vec
    path.getPoint(this.follower.t, this.follower.vec);
    
    // update enemy x and y to the newly obtained x and y
    this.setPosition(this.follower.vec.x, this.follower.vec.y);
    // if we have reached the end of the path, remove the enemy
    if (this.follower.t >= 1)
    {
        this.setActive(false);
        this.setVisible(false);
    }
    
}
});

function create() {
  // this graphics element is only for visualization, 
  // its not related to our path
  //game.add.sprite(0, 0, 'einstein');
  var graphics = this.add.graphics();    
  
  // the path for our enemies
  // parameters are the start x and y of our path
  path = this.add.path(96, -32);
  path.lineTo(96, 164);
  path.lineTo(480, 164);
  path.lineTo(480, 544);
  
  graphics.lineStyle(3, 0xffffff, 1);
  // visualize the path
  path.draw(graphics);
  enemy = this.add.group({ classType: Enemy, runChildUpdate: true });
  this.nextEnemy = 0; 
}

function update(time, delta) {  
  // if its time for the next enemy
  if (time > this.nextEnemy)
  {        
      var enemy = enemies.get();
      if (enemy)
      {
          enemy.setActive(true);
          enemy.setVisible(true);
          
          // place the enemy at the start of the path
          enemy.startOnPath();
          
          this.nextEnemy = time + 2000;
      }       
  }
}