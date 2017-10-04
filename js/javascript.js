    console.log('loaded');

    $(document).ready(setup);

    //initial setup
    function setup() {
        var stage = setCanvas();
        drawShape(stage);
    }
    //builds canvas, returns context
    function setCanvas() {
        var canvas = document.getElementById("gameCanvas");
        var ctx = canvas.getContext("2d");
        return ctx
    }
    //draws shape
    function drawShape(stage) {
    	stage.beginPath();
        stage.rect(20, 40, 50, 50);
        stage.fillStyle = "#FF0000";
        stage.fill();
        stage.closePath();
    }