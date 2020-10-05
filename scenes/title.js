Crafty.defineScene("Title", function() {
// To have a background, play button, set-up functionality, music/mute once implemented
    var gameStartBackground = Crafty.e("StartBackground");
    gameStartBackground.bind('Click', function() {
        if (Crafty.audio.isPlaying("bgAudio") == false) {
            console.log(audioController);
            audioController.loadTrack("bgAudio", -1, 0.25);
        }
    })
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({
            x: GAME_SCREEN_WIDTH/2-65,
            y: GAME_SCREEN_HEIGHT/2+15,
            w: 141,
            h: 51
        })
        .bind('Click', function(MouseEvent){
                // audioController.playTrack("jump2,", 1, 0.3)
                if (Crafty.audio.isPlaying("bgAudio") == false) {
                    audioController.loadTrack("bgAudio", -1, 0.25);
                }
                totalSeconds = 0;
                Crafty.scene('Game');
        });


    var title = Crafty.e("2D, DOM, title")
        .attr({x: 200, y: 0});

    var title = Crafty.e("CreditsText")
        .text("Game Art by Veera Villgren")
        .attr({x: 50, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by Steven Rutherford")
        .attr({x: 350, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by Joshua Pearson")
        .attr({x: 650, y: GAME_SCREEN_HEIGHT-37});
});

Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, title_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
