class Block {
    constructor(x, y, width, height) {
       var block = createSprite(x,y,width,height);
       block.addImage(wall1);
       block.scale = 0.3;

    }

  };
  