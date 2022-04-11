const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

//ESTA FUNCION CONVERTIA GRADOS EN RADIANTES
// const degToRad = (degrees) =>{
//   return degrees / 180 * Math.PI;
// }
// ESTA FUNCION RETORNABA UN NUMERO ALEATORIO
// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#f5bac5';
    context.fillRect(0, 0, width, height);
  
    context.fillStyle = 'black';
    
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.03;

    let x, y; 

    const num = 100;
    const radius = width * 0.2;

    for (let i = 0; i < num; i++){
      const slice = math.degToRad(360/ num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);
/////////////////////////////////////
      context.save();
      context.translate(cx , cy);
      context.translate(x * 1.5, y * 1.8);
      context.rotate(-angle * 1.5);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
      
      context.beginPath();
      context.rect(w * 0.5 ,random.range(1, -h * 3),w  ,h * 3);
      context.fill();
      context.restore();
/////////////////////////////////////
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      
      context.lineWidth = random.range(5,10);


      context.beginPath();
      context.arc(0, 0, radius * random.range(0.8, 1.3), slice * random.range(1, -8), slice * random.range(1, 6));
      context.stroke();
      context.restore();
/////////////////////////////////////
      // context.save();
      // context.restore();

      
    }
    

//haciendo un circulo ubicado en x 100 e y 400 
    // context.translate(100,400);

    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();

  };
};

canvasSketch(sketch, settings);
