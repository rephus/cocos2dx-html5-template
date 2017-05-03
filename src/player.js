var Player = function(){
    var sprite; 

    var winSize = cc.winSize;

    sprite = new cc.Sprite(res.pixel);
    sprite.x = winSize.width/ 2; 
    sprite.y = winSize.height/ 2; 

    sprite.setAnchorPoint(0.5,0.5);
    Global.layer.addChild(sprite);

    this.update = function(x, y){
        sprite.x = x;
        sprite.y = y;
    }

    this.control = function(layer){
         if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                   var target = event.getCurrentTarget();
                   var move_inc = 10;
                   if(key == "37" ) sprite.x -= move_inc;
                   else if(key == "38") sprite.y += move_inc;
                   else if(key == "39") sprite.x += move_inc;
                   else if(key == "40") sprite.y -= move_inc;
                } 
            }, layer);
        } else {
            cc.log("KEYBOARD Not supported");
        }    
    }

    this.destroy = function(){
        sprite.removeFromParent(true);
    }

    this.properties = function(){
        return {
            x: sprite.x, 
            y: sprite.y
        }
    }
}