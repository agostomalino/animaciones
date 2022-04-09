const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) =>{
  return degrees / 180 * Math.PI;
}

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);
  
    context.fillStyle = 'black';
    
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y; 

    const num = 30;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++){
      const slice = degToRad(360/ num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(randomRange(1,3),Math.random() * 3);
      
      context.beginPath();
      context.rect(w * 0.5 ,h * 0.5 ,w ,h );
      context.fill();
      context.restore();

    }
    

//haciendo un circulo ubicado en x 100 e y 400 
    // context.translate(100,400);

    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();

  };
};

canvasSketch(sketch, settings);
