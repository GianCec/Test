
let emb;


function imgSetup(){
    emb=createGraphics(width*0.6,height*0.6,WEBGL);
embSetup();
}



function imgDraw(){
    embDraw();
    image(emb,0,height*0.4);
}


