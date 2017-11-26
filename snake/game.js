$(document).ready(function() {
    var canvas = $("#snakegameboard")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#snakegameboard").width();
    var h = $("snakegameboard").height();


    var x = 200;
    var y = 200;

    function drawsnake() {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,w, h);

        x = x + 10;
        ctx.fillStyle = "green";
        ctx.fillRect(x, y, 10, 10);

    }
    setInterval(drawsnake, 100);

})
