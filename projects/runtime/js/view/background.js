var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        var tree;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY + 2,'lightblue');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
            //everytime the loop runs it creates a circle with a random x and y respective to the canvas and is added to the canvas 
            for (var i = 0; i <= 100; i++){ 
                var circle = draw.circle(5, 'yellow', 'yellow', 2); //creates a variable called circle that holds each circle
                circle.x = canvasWidth*Math.random(); //multiplies canvasWidth * a random decimal between .1 and .99 and assigns it to circle.x
                circle.y = groundY*Math.random(); //multiplies groundY * a random decimal between .1 and .99 and assigns it to circle.y
                background.addChild(circle); //adds the stars to the background
            }

            var moon = draw.bitmap('img/moon.png'); //created a variable called moon. draw.bitmap draws the image and stores it in the moon variable
            moon.x = canvasWidth - 300; //determines the x position of the moon
            moon.y = groundY - 450; //determines the y position of the moon
            moon.scaleX = 0.5; //determines the x scale of the moon
            moon.scaleY = 0.5; //determines the y scale of the moon
            background.addChild(moon); //adds the moon to the background
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for(var i = 0; i < 5; i++) {
                var buildingHeight = 300;
                var building = draw.rect(75, buildingHeight, 'LightGray', 'Black', 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight + 2;
                background.addChild(building);
                buildings.push(building);
            }

            // TODO 4: Part 1 - Add a tree
            
            tree = draw.bitmap('img/tree.png'); //reassigns the drawn image tree to the variable tree
            tree.x = 600; //assigns an x value to the tree
            tree.y = groundY - 250; //assigns a y value to the tree
            //tree.scaleX = 0.5; //determines the x scale of the tree
            //tree.scaleY = 0.5; //determines the y scale of the tree
            background.addChild(tree); //adds the tree to the background         
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 1; //taking the value of tree.x (x position) and decreasing it by one pixel every time the function runs

            if (tree.x < -200) { //makes the tree move towards the left until it hits -200
                tree.x = canvasWidth; //when the tree hits -200 it resets the tree to canvasWidth which is the right side of the screen
            }
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
