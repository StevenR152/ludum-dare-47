Crafty.c("Simple_Platform", {
	init: function() {
        this.addComponent("2D, DOM, ground");
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox = Crafty.e("Platform_Hitbox");
		this.attach(this.hitbox);
		this.hitbox.x = this.x;
		this.hitbox.y = this.y+30;
	}
})
