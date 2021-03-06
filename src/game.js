/**
 * Raging Ninja Rabbit - 2D RPG demo
 * https://github.com/petarov/RagingNinjaRabbit
 */

define(["src/config.js", "src/room.js", "src/player.js"], function(config, Room, Player) {
    Crafty.scene("game", function() {

        // show FPS
        Crafty.e("2D, " + config.screen.render + ", FPS, Persist").attr({maxValues:10})
        .bind("MessureFPS", function(fps) {
            $('#fps').text('FPS: ' + fps.value);
        });

        var room = Room.create(_Globals.player.currentRoom.name);

        // load room
        room.load(function(warpAt) {

            // done, now show player at warp position
            var player = Player.create(warpAt.x, warpAt.y, warpAt.map);
            player.init();


        });

        // Show in-game message
        Crafty.bind("ShowMsg", function(msg) {
            $('#msgs').stop(true);
            $('#msgs').css('opacity', '1.0');
            $('#msgs').css('fontSize', '26px');
            $('#msgs').text('');

            if (msg) {
                //$('#msgs').css('color','#aa0000');
                $('#msgs').text(msg);
            } else {
                $('#msgs').text('');
                return;
            }

            $('#msgs').fadeTo(800, 0);
        });
    });
});