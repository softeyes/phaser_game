    console.log('loaded');

    $(document).ready(setup);

    //initial setup
    function setup() {
        var stage = setCanvas();
        var stageWidth = document.getElementById("gameCanvas").width;
        var stageHeight = document.getElementById("gameCanvas").height;
        drawShape(stage, stageWidth, stageHeight);

    }
    //builds canvas, returns context
    function setCanvas() {
    	console.log('inside setCanvas');
        var canvas = document.getElementById("gameCanvas");
        var ctx = canvas.getContext("2d");
        return ctx

    }



    //draws and sets position of object
    function drawShape(stage, stageWidth, stageHeight) {
    	console.log('inside drawShape');
   		var shapeX = stageWidth / 2;
   		var shapeY = stageHeight / 2;
        stage.beginPath();
        stage.arc(shapeX, shapeY, 10, 0, Math.PI * 2);
        stage.fillStyle = "#0095DD";
        stage.fill();
        stage.closePath();

        //we want to add a small value to x and y after every frame has been 
        //drawn to make it appear that the ball is moving. Let's define these 
        //small values as dx and dy and set their values to 2 and -2 respectively. 
        var dx = 2;
        var dy = -2;
        //update x and y with our dx and dy variable on every frame, so the ball 
        //will be painted in the new position on every update.
        shapeX += dx;
        shapeY += dy;
    }

    // setInterval() is a JS timing function that has an infinite nature. 
    // The draw() function will be called every 10 milliseconds forever, 
    // or until we stop it.
    // setInterval(drawShape, 10);