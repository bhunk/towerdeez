// import Phaser from "phaser";


// var Enemy = new Phaser.Class({
//     Extends: Phaser.GameObjects.Image,
//     initialize:
//     function Enemy (scene)
//     {
//         Phaser.GameObjects.Image.call(this, scene, 0, 0, 'sprites', 'enemy');
//         this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
//     },
//     startOnPath: function ()
//         {
//             // set the t parameter at the start of the path
//             this.follower.t = 0;
            
//             // get x and y of the given t point            
//             path.getPoint(this.follower.t, this.follower.vec);
            
//             // set the x and y of our enemy to the received from the previous step
//             this.setPosition(this.follower.vec.x, this.follower.vec.y);
            
//         },
//     update: function (time, delta)
//     {
//         // move the t point along the path, 0 is the start and 0 is the end
//         this.follower.t += ENEMY_SPEED * delta;
        
//         // get the new x and y coordinates in vec
//         path.getPoint(this.follower.t, this.follower.vec);
        
//         // update enemy x and y to the newly obtained x and y
//         this.setPosition(this.follower.vec.x, this.follower.vec.y);
//         // if we have reached the end of the path, remove the enemy
//         if (this.follower.t >= 1)
//         {
//             this.setActive(false);
//             this.setVisible(false);
//         }
//         var ENEMY_SPEED = 1/10000;
//     }
// });




// //export default class Game extends Phaser.Scene{
//    // preload(){
//    //     this.load.image('sprites', 'C://towerdeez//assets//spritesheet.png');    
//   //      this.load.image('bullet', 'C://towerdeez//assets/bullet.png');

//  //   }
   
// //create(){
//         var graphics = this.add.graphics();
 
        
//         // this graphics element is only for visualization, 
//     // its not related to our path
        
    
//     // the path for our enemies
//     // parameters are the start x and y of our path
//     var path = this.add.path(96, -32);
//     path.lineTo(96, 164);
//     path.lineTo(480, 164);
//     path.lineTo(480, 544);
    
//     graphics.lineStyle(3, 0xffffff, 1);
//     //enemies = this.add.group({ classType: Enemy, runChildUpdate: true });
//     //this.nextEnemy = 0;

//     // visualize the path
//     path.draw(graphics);
//     enemies = this.add.group({ classType: Enemy, runChildUpdate: true });
//     this.nextEnemy = 0;
//     //this.add.graphics();



//  //   const ball = this.add.circle(400,250,10,0xffffff,1);
//  //   this.physics.add.existing(ball)
// //}

//     update(time, delta) {  
//     // if its time for the next enemy
//     if (time > this.nextEnemy)
//     {        
//         var enemy = enemies.get();
//         if (enemy)
//         {
//             enemy.setActive(true);
//             enemy.setVisible(true);
            
//             // place the enemy at the start of the path
//             enemy.startOnPath();
            
//             this.nextEnemy = time + 2000;
//         }       
//     }
// }




//        // this.add.text(400,250,'Game').setOrigin(0.5,0.5);
//     //    const ball = this.add.circle(400,250,10,0xffffff,1);
//     //    this.physics.add.existing(ball);
    

    
//     //    ball.body.setCollideWorldBounds(true, 1, 1);
//     //    ball.body.setVelocity(200,200);

//        //const paddleLeft =  

