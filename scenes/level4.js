Crafty.defineScene("Level4", function() {

    // Create level information basics //
    var level_details = {x:0,y:0,w:2500,h:750}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_door = Crafty.e("Door").place(2000,level_details.y+level_details.h-100, true); //Give the door a location (the y parameters are set cleanly for the floor here)
    var next_level_loading = false;
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("Level5");
            }, 500);
        }
    });
    Crafty.bind("ResetLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            numberOfResets += 1;
            Crafty.scene("Level4");
        }
    });

    // Object and obstacle placements //
    var platform = Crafty.e("Platform").place(400,300);
    var platform = Crafty.e("Platform").place(650,300);
    var ramp = Crafty.e("Platform_Ramp_Left").place(910,315);

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
	player.x = 400;
	player.y = 100;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //
    var ball = Crafty.e("Ball");
    var ball_controller = Crafty.e("Ball_Controller");
    ball.x = 550;
    ball.y = 240;
    var rock = Crafty.e("Rock").place(1500,600);

})
