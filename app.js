//Create an instance for the Application of the pixi class
const Application = PIXI.Application;

const app = new Application({
    //Added styling to the size and added anti alias that can elimenate "Jaggies" or pixels in images
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});
//Calling on Constructor to change background color
app.renderer.backgroundColor = 0x00AAAA;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

//append pixi app to a DOM element
document.body.appendChild(app.view);

//appending to the DOM element renders a Black box.
//The Black box is the the parameter of the rendered content

//Call apon the Graphics class
const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.drawRect(200, 200, 100, 120)
.endFill();