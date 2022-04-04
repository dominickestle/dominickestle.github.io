var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "fireball", "x": 700, "y": 360 },
                { "type": "fireball", "x": 1100, "y": 450 },
                { "type": "fireball", "x": 1500, "y": 360 },
                { "type": "fireball", "x": 2100, "y": 360 },
                { "type": "fireball", "x": 2650, "y": 450 },
                { "type": "fireball", "x": 6000, "y": 360 },
                { "type": "fireball", "x": 6150, "y": 450 },
                { "type": "fireball", "x": 6300, "y": 360 },

                { "type": "enemy", "x": 450, "y": groundY - 50 },
                { "type": "enemy", "x": 1050, "y": groundY - 50 },
                { "type": "enemy", "x": 1400, "y": groundY - 50 },
                { "type": "enemy", "x": 2000, "y": groundY - 50 },
                { "type": "enemy", "x": 2650, "y": groundY - 50 },
                { "type": "enemy", "x": 3050, "y": groundY - 50 },
                { "type": "enemy", "x": 3350, "y": groundY - 50 },
                { "type": "enemy", "x": 3400, "y": groundY - 50 },
                { "type": "enemy", "x": 3450, "y": groundY - 50 },
   
                { "type": "boss", "x": 3600, "y": groundY - 50 },

                { "type": "reward", "x": 1100, "y": groundY - 75 },
                { "type": "reward", "x": 1550, "y": groundY - 75 },
                { "type": "reward", "x": 2100, "y": groundY - 75 },
                { "type": "reward", "x": 2750, "y": groundY - 75 },
                { "type": "reward", "x": 3150, "y": groundY - 75 },
                { "type": "reward", "x": 3750, "y": groundY - 75 },
                { "type": "reward", "x": 3850, "y": groundY - 75 },
                { "type": "reward", "x": 3950, "y": groundY - 75 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        /*function createSawBlade(x, y){
            var hitZoneSize = 25; //creates the size of the hitzone
            var damageFromObstacle = 10; //sets the damage of the obstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hitzone and stores it in this variable
            sawBladeHitZone.x = x; //the x position of the hitzone
            sawBladeHitZone.y = y; //the y position of the hitzone
            game.addGameItem(sawBladeHitZone); //add the hitzone to the game
            
            var obstacleImage = draw.bitmap('img/sawblade.png'); //drawing the image and storing it in the variable
            sawBladeHitZone.addChild(obstacleImage); //add the image to the hitzone so we can see it
            obstacleImage.x = -25; //tweaks the image 25p ixels to the left
            obstacleImage.y = -25; //tweaks the image 25 pixels up
            sawBladeHitZone.rotationalVelocity = 10;
        } */

        function createFireball(x, y){
            var hitZoneSize = 25; //creates the size of the hitzone
            var damageFromObstacle = 10; //sets the damage of the obstacle
            var fireballHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hitzone and stores it in this variable
            fireballHitZone.x = x; //the x position of the hitzone
            fireballHitZone.y = y; //the y position of the hitzone
            game.addGameItem(fireballHitZone); //add the hitzone to the game
            
            var obstacleImage = draw.bitmap('img/fireball.png'); //drawing the image and storing it in the variable
            fireballHitZone.addChild(obstacleImage); //add the image to the hitzone so we can see it
            obstacleImage.x = -35; //tweaks the image 35 pixels to the left
            obstacleImage.y = -35; //tweaks the image 35 pixels up
            obstacleImage.scaleX = 0.1; //makes the x scale of the image smaller
            obstacleImage.scaleY = 0.1; //makes the y scale of the image smaller
            fireballHitZone.rotationalVelocity = -10;
        }

        /*function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25); //creating the game item and storing it in the variable enemy
            var redSquare = draw.rect(50,50,'red'); //creates a rectangle and stores as redSquare
            redSquare.x = -25; 
            redSquare.y = -25;
            enemy.addChild(redSquare); //adds the red square to the enemy game item

            enemy.x = x;
            enemy.y = y;

            game.addGameItem(enemy); //adds enemy to the game

            enemy.velocityX = -1; //this causes the enemy to move one pixel to the left on the x position

            enemy.rotationalVelocity = 25; //this make the enemy rotate

            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-25);
            };

            enemy.onProjectileCollision = function() {
                console.log('The projectile has hit Halle');
                game.changeIntegrity(5);
                game.increaseScore(10);
                enemy.shrink();
            };
        } */

        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25); //creating the game item and storing it in the variable enemy
            var goomba = draw.bitmap('img/GOOMBA.png'); //creates goomba and stores as goomba
            goomba.x = -25; //x position of the enemy
            goomba.y = -25; //x position of the enemy
            goomba.scaleX = 1; //x scale factor of the enemy
            goomba.scaleY = 1; //y scale factor of the enemy
            enemy.addChild(goomba); //adds goomba to the enemy game item

            enemy.x = x;
            enemy.y = y;

            game.addGameItem(enemy); //adds enemy to the game

            enemy.velocityX = -1; //this causes the enemy to move one pixel to the left on the x position

            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-25); //changes player health when the player hits the enemy
            };

            enemy.onProjectileCollision = function() {
                console.log('The projectile has hit Halle');
                game.changeIntegrity(5); //changes health when the projectile hits the enemy
                game.increaseScore(10); //Increases score when the projectile hits the enemy
                enemy.shrink(); //causes the enemy to shrink when the projectile hits it
            };
        }

        function createBoss(x, y){
            var boss = game.createGameItem('boss', 100); //creating the game item and storing it in the variable enemy
            var bowser = draw.bitmap('img/bowser.png'); //creates boss and stores as bowser
            bowser.x = -200; //x position of the boss
            bowser.y = -300; //x position of the boss
            bowser.scaleX = 0.6; //x scale factor of the boss
            bowser.scaleY = 0.6; //y scale factor of the boss 
            boss.addChild(bowser); //adds bowser to the boss game item

            boss.x = x; //x position of the boss
            boss.y = y; //the y position of the boss

            game.addGameItem(boss); //adds boss to the game

            boss.velocityX = -1; //this causes the boss to move one pixel to the left on the x position

            boss.onPlayerCollision = function() {
                console.log('The boss has hit Halle');
                game.changeIntegrity(-100); //changes player health when the player hits the enemy
            };

            boss.onProjectileCollision = function() {
                console.log('The projectile has hit the boss');
                game.changeIntegrity(100); //changes health when the projectile hits the enemy
                game.increaseScore(500); //Increases score when the projectile hits the enemy
                boss.shrink(); //causes the enemy to shrink when the projectile hits it
            };
        }

        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            
            if (gameItem.type === "fireball"){
                createFireball(gameItem.x, gameItem.y);
            } 

            if (gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "boss"){
                createBoss(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }
        }
        
        /*function createReward(x, y){
            var reward = game.createGameItem('reward',25); //creating the game item and storing it in the variable reward
            var blueSquare = draw.rect(50,50,'blue'); //creates a rectangle and stores as blueSquare
            blueSquare.x = -25; 
            blueSquare.y = -25;
            reward.addChild(blueSquare); //adds the blue square to the enemy game item

            reward.x = x;
            reward.y = y;

            game.addGameItem(reward); //adds reward to the game

            reward.velocityX = -1; //this causes the reward to move one pixel to the left on the x position

            reward.rotationalVelocity = 25; //this make the reward rotate

            reward.onPlayerCollision = function() {
                console.log('The reward has hit Halle');
                game.changeIntegrity(25);
                game.increaseScore(10);
                reward.shrink();
            };
        }*/

        function createReward(x, y){
            var reward = game.createGameItem('reward',25); //creating the game item and storing it in the variable reward
            var coin = draw.bitmap('img/Coin.png'); //creates a rectangle and stores as blueSquare
            coin.x = -25; 
            coin.y = -25;
            coin.scaleX = 0.25;
            coin.scaleY = 0.22;
            reward.addChild(coin); //adds the coin to the enemy game item

            reward.x = x;
            reward.y = y;

            game.addGameItem(reward); //adds reward to the game

            reward.velocityX = -1; //this causes the reward to move one pixel to the left on the x position

            reward.onPlayerCollision = function() {
                console.log('The reward has hit Halle');
                game.changeIntegrity(25); //increases health when the player hits hit
                game.increaseScore(10); //increases score when the player hits hit
                reward.shrink(); //shrinks the reward when the player hits it
            };
        }
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
