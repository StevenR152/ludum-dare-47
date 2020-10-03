Crafty.defineScene("Game", function() {

  Crafty.Matter.init({
    // debug : true,
    gravity : {
      x : 0,
      y : 0.098
    }
  });

	var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
	var hamster = Crafty.e("Hamster");
    player.attach(wheel);
	player.attach(hamster)
	hamster.x = player.w/2;
	hamster.y = player.h/2;

	var simp_pf1 = Crafty.e("Simple_Platform").place(400,300);
	var simp_pf1 = Crafty.e("Simple_Platform").place(600,300);
	var simp_pf1 = Crafty.e("Simple_Platform").place(800,300);
	var simp_pf1 = Crafty.e("Ramp_Platform").place(1000,300).angle(-25);
	var simp_pf1 = Crafty.e("Simple_Platform").place(2000,150);
	var simp_pf1 = Crafty.e("Simple_Platform").place(2200,150);
	// var simp_pf2 = Crafty.e("Simple_Platform");
	// var simp_pf3 = Crafty.e("Simple_Platform");
	// simp_pf2.rotation = 5;
	// simp_pf3.rotation = -5;
	// simp_pf3.x += 30;


	player.x = 400;
	player.y = 0;
    makeCameraTrackEntity(player, 75);
        // Matter.Body.setVelocity( player._body, {x : 5, y : 5 });
});
