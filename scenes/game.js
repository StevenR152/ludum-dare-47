Crafty.defineScene("Game", function() {
	// This Scene should be used to set up global variables, scoring, timing, gravity etc
	Crafty.Matter.init({
		debug : true,
		gravity : {
		  x : 0,
		  y : 0.098
		}
	});

	Crafty.scene("Level2");

	// var hay = Crafty.e("HayPiece");
	// hay.x = player.x + 50;
	// hay.y = player.y;

    // Matter.Events.on(Crafty.Matter.engine, 'collisionStart', function (event) {
	// 	 event.pairs.forEach((collision) => {
	// 	    // console.log(collision);
	// 	  });
    // })
        // Matter.Body.setVelocity( player._body, {x : 5, y : 5 });
});
