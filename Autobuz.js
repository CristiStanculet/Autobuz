Crafty.init(300,300, document.getElementById("game"));

var autobuz= Crafty.e('2D, Canvas, Color, Twoway, AngularMotion, Motion')
  .attr({x: 0, y: 0, w: 50, h: 20})
  .color('#F00')
  .bind('KeyDown', function(e) {
    if (e.key == Crafty.keys.LEFT_ARROW) {
      this.x -= 1;
    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
      this.vx = 15*Math.cos(10);
      this.vy = 15*Math.sin(10);
      console.log(this.velocity());
    } else if (e.key == Crafty.keys.UP_ARROW) {
      this.y -= 1;
    } else if (e.key == Crafty.keys.DOWN_ARROW) {
      this.y += 1;
    }
  });
  autobuz.rotation=10;
  console.log(autobuz.rotation);