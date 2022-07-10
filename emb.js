let embR=[];
let embX=[];
let embY=[];
let embZ=[];
let embScale;
let pointV;
let pointH;



let cam;
function embSetup(){
    embScale=40;
 pointV=15;
 pointH=12;
 h=emb.width*0.5;
for(let i=0; i<pointV;i++){
    embX[i]=[];
    embY[i]=[];
    embZ[i]=[];
 let interval=int(470/pointV)
    embR[i]=table[0][0].getNum(20+i*interval,1)*embScale;
    if(i==pointV-1){
        embR[i]=table[0][0].getNum(488,1)*embScale;
    }
}

for(let i=0; i<pointV;i++){
    let angle=map(i,0,pointV,-PI/2,-PI*3/2);
    for(let j=0; j<pointH;j++){
    embX[i][j]=embR[j]*sin(angle);
    embY[i][j]=map(j,0,pointH,0,h);
    embZ[i][j]=embR[j]*cos(angle);
    }
}

cam = emb.createCamera();

}

function embDraw(){
emb.background(0);
emb.strokeWeight(5);
let translHeight=emb.height*0.7;
let vLine=pointH;
let hLine=pointV;
    for(let j=0; j<vLine;j++){
        emb.push()

        emb.translate(0,translHeight);

        emb.stroke(255);
        emb.noFill();
        emb.beginShape()
    for(let i=0; i<hLine;i++){
        let x=embX[i][j];
        let y= embY[i][j];
        let z=embZ[i][j];
   
        emb.vertex(x,-y,z);
    }
    emb.endShape()
    emb.pop();
    }

    for(let i=0; i<hLine;i++){
   
        emb.push();

        emb.translate(0,translHeight);

        emb.beginShape();
        emb.stroke(255);
        emb.noFill();
    for(let j=0; j<vLine;j++){
        let x=embX[i][j];
        let y= embY[i][j];
        let z=embZ[i][j];
   
        emb.vertex(x,-y,z);
    }
    emb.endShape()
    emb.pop();
}
    }

 

