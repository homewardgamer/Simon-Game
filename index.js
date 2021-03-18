var x = 1;
var no;
var check;
check = 0;
var started = false;
var input;
var rand;
var queue = [];
var l = 0;
var arr = ["red", "yellow", "blue", "green"];
var wrong = new Audio("sounds/wrong.mp3");
$(document).keypress(function (event) {
    if (!started) {
        startgame();
        takeinput();
        //nextLevel();
    }
});


function takeinput() {
    l=0;
    $(".btn").click(function () {
        input = $(this).attr("id");
        var audio = new Audio("sounds/" + input + ".mp3");
        audio.play();
        $("#" + input).addClass("pressed");
        setTimeout(function () {
            $("#" + input).removeClass("pressed");
        }, 100);
        console.log(l);
        console.log(input);
        console.log(arr[queue[l]]);
        if (input != arr[queue[l]]) {
            $("h1").text("Game Over! Press any key to restart");
            $("body").addClass("game-over");
            wrong.play();
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 100);
            //if(l!=0)
            //{
            l = 0;
            x = 1;
            queue = [];
            started = false;

            //}


        }
        else {
            if ((l == (x - 1))) {
                x++;
                l = 0;
                nextLevel();
            }
            else {
                l++;
            }
        }



    });
}

function startgame() {
    started = true;
    $("h1").text("Level 1");
    rand = Math.floor(Math.random() * (4 - 1 + 1));
    queue = [];
    queue.push(rand);
    $("#" + arr[rand]).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + arr[rand] + ".mp3");
    audio.play();
    //takeinput();
}

function nextLevel() {

    rand = Math.floor(Math.random() * (4 - 1 + 1));
    queue.push(rand);
    setTimeout(function () {
        $("h1").text("Level " + x);
        $("#" + arr[rand]).fadeOut(100).fadeIn(100);
        var audio = new Audio("sounds/" + arr[rand] + ".mp3");
        audio.play()
    }, 1000)

}
