var t;
var frame;
var t0;
var scaleT;
var scaleR;
var textGraphic;
var col;
var N;

var exp=[]; ///Graphic
var formulas=[];
var timeImg;
var imp;
var txtButton;

let table=[];// Data
let popUpText=[];


function preload(){
  for(let i=0; i<5;i++){
    table[i]=[];
    for(let coo=0;coo<2;coo++){
      table[i][coo]=new p5.Table();
 if(coo==00){
     table[i][coo] = loadTable('assets/Data ('+i+').csv', 'csv');
 }else{
  table[i][coo] = loadTable('assets/DataC ('+i+').csv', 'csv');
 }


}
}


}


function setup() {
  createCanvas(windowWidth, windowHeight-1);
 // initializeFields();
  imgSetup();



  }


function draw() {
  background(0);
  fill(200);
  imgDraw();
 // orbitControl();


}



 /* function initializeFields() {
    t = 0;
    t0=267;
    frame = 488;
    scaleT = wimg[0]/25;
    scaleR = scaleT;
    textGraphic = [ "Scale Factor", "Hubble Radius", "Particle Horizon", "Event Horizon", "Light Cone Today (t=13.7 gyr)" ];
    col = [ // grigietto
    color(0xE0, 0xE0, 0xE0,100), // Winter sky fucsia
    color(0xFF, 0x20, 0x6E), // Giallo
    color(0xFB, 0xFF, 0x12), // turchese
    color(0x41, 0xEA, 0xD4), // verde foresta
    color(0x2A, 0x91, 0x34) ];
    N = textGraphic.length;
    Px= ximg[1]+wimg[1]*2/3;
    Py=yimg[1]+himg[1]/2;
    cipher=1;
}*/
