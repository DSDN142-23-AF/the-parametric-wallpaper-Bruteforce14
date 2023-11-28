//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

  
}

function wallpaper_background() {
  let pink= color(255,62,181);
  let yellow = color(255,233,0);
  let white = color(255);
  let black = color(0);
  background(pink)
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    let pink= color(255,62,181);
    let fpink= color(255,62,181,150);
    let yellow = color(255,233,0);
    let fyellow = color(255,233,0,50);
    let inner = color(255,255,255);
    let black = color(0,0,0);
    let fblack = color(0,0,0,100);
    let white = color(255,255,255);
    let fwhite = color(255,255,255,50);
    let line1 = color(black);
    let line2 = color(yellow);
    let line3 = color(black);
    let base1 = color(yellow);
    let base2 = color(pink);
    let base3 = color(yellow);
    let hat1 = color(black)
    let hat2 = color(yellow)
    let back = color(yellow);
    let back2 = color(fblack);
    let back3 = color(yellow);
    let back4 = color(black);
    let teeth = color(white);
    
    let centerX =100;
    let centerY =100;
    let craniumSize = 120;
    let eyeSize = 15;
    let backCX = 100;
    let backCY = 100;
    let backCS = 250;
    let x = 100;
    let y = 100;
    let s = 110;

    let hat = 5;
    let sword =1;
    let leye = 1;
    let reye = 1;
    let background =4;
    
    
    /*Mork Borg Colours 
    yellow 255,233,0
    pink 255,62,181
   */
    if (craniumSize>100){
      let lineW = 5
    }
    else{
      let lineW = 1
    }

    if(background == 1)
    { stroke(line3);
      strokeWeight(3);
      fill(back)
      rect(0,0,200,200)}

    if (background == 2) //Lines
    {stroke(line3);
      strokeWeight(3);
      line(5,5,5,100);
      line(5,105,5,200);
      line(10,15,10,115);
      line(10,125,10,200);
      line(15,0,15,20);
      line(15,35,15,135);
      line(15,160,15,200);
      line(20,0,20,40);
      line(20,50,20,155);
      line(20,160,20,200);
      line(25,0,25,100);
      line(25,105,25,200);
      line(30,15,30,130);
      line(30,140,30,200);
      line(35,0,35,50);
      line(35,55,35,160);
      line(35,175,35,200);
      line(40,0,40,125);
      line(40,140,40,195);
      line(45,15,45,200);
      line(50,0,50,195);
      line(55,10,55,200);
      line(60,0,60,200);
      line(65,0,65,50);
      line(65,55,65,175);
      line(65,190,65,200);
      line(70,15,70,185);
      line(75,0,75,195);
      line(80,0,80,200);
      line(85,0,85,200);
      line(90,0,90,40);
      line(90,50,90,200);
      line(95,5,95,50);
      line(95,65,95,200);
      line(100,5,100,180);
      line(100,190,100,200);
      line(105,0,105,70);
      line(105,75,105,195);
      line(110,0,110,200);
      line(115,0,115,195);
      line(120,0,120,200);
      line(125,5,125,195);
      line(130,0,130,60);
      line(130,75,130,200);
      line(135,15,135,200);
      line(140,0,140,200);
      line(145,5,145,15);
      line(145,20,145,120);
      line(145,140,145,200);
      line(150,0,150,90);
      line(150,95,150,195);
      line(155,5,155,105);
      line(155,115,155,200);
      line(160,15,160,95);
      line(160,100,160,200);
      line(165,0,165,120);
      line(165,135,165,200);
      line(170,5,170,130);
      line(170,145,170,200);
      line(175,10,175,70);
      line(175,80,175,185);
      line(180,0,180,160);
      line(180,175,180,200);
      line(185,20,185,90);
      line(185,100,185,110);
      line(185,115,185,200);
      line(190,0,190,5);
      line(190,10,190,110);
      line(190,120,190,195);
      line(195,0,195,100);
      line(195,110,195,200);
      line(200,10,200,110);
      line(200,135,200,200);}
     
    
    if(background == 1)
    {noFill();
      strokeWeight(5)
      ellipse(100,100,200,200);
      ellipse(100,100,175,175);
      ellipse(100,100,150,150);
      ellipse(100,100,125,125);
      ellipse(100,100,100,100);
  
      strokeWeight(2);
      line(0,0,200,200);
      line(0,20,180,200);
      line(20,0,200,180);
  
      strokeWeight(2);
      line(0,200,200,0);
      line(0,180,180,0);
      line(200,20,20,200);}

    if (background == 3)
    {strokeWeight(5)
      stroke(fwhite)
      fill(back2)
      ellipse(backCX,backCY,backCS);
      ellipse(backCX,backCY,backCS/8*7);
      ellipse(backCX,backCY,backCS/8*6);
      ellipse(backCX,backCY,backCS/8*5);
      ellipse(backCX,backCY,backCS/8*4);
      ellipse(backCX,backCY,backCS/8*3);
      ellipse(backCX,backCY,backCS/8*2);
      ellipse(backCX,backCY,backCS/8*1);
    }

    if(background == 4)
    {/*
      DrawSword(90,0,20,line3,base2);
      DrawSword(90,25,-40,line2,back3);
      DrawSword(90,50,60,line3,base2);
      DrawSword(90,75,-80,line2,back3);
      DrawSword(100,100,100,line3,base2);
      DrawSword(125,110,-80,line2,back3);
      DrawSword(150,110,60,line3,base2);
      DrawSword(175,110,-40,line2,back3);
      DrawSword(200,110,20,line3,base2);*/

      DrawSword(x,y,s*1.8,back4,back4);
      DrawSword(x-s/100*25,y-s/100*25,s*1.20,back3,back3);
      DrawSword(x+s/100*25,y+s/100*25,s*1.20,back3,back3);
      DrawSword(x+s/100*50,y+s/100*50,s*0.8,back4,back4);
      DrawSword(x-s/100*50,y-s/100*50,s*0.80,back4,back4);
      DrawSword(x-s/100*75,y-s/100*75,s*0.40,back3,back3);
      DrawSword(x+s/100*75,y+s/100*75,s*0.40,back3,back3);
  
    }
   

    if (sword > 0) //Gutterborn scum
    {//Gutterborn
      stroke(line2)
      fill(hat1)
      strokeWeight(2)
      beginShape()
      vertex(centerX+craniumSize/100*5,centerY-craniumSize/100*101);
      vertex(centerX+craniumSize/100*5,centerY-craniumSize/100*61);
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*57);
      vertex(centerX+craniumSize/100*10,centerY+craniumSize/100*79);
      vertex(centerX,centerY+craniumSize/100*89);
      vertex(centerX-craniumSize/100*10,centerY+craniumSize/100*79);
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*57);
      vertex(centerX-craniumSize/100*5,centerY-craniumSize/100*61);
      vertex(centerX-craniumSize/100*5,centerY-craniumSize/100*101);
      endShape(CLOSE);
  
      beginShape()
      vertex(centerX+craniumSize/100*30,centerY-craniumSize/100*52);
      vertex(centerX+craniumSize/100*30,centerY-craniumSize/100*58);
      vertex(centerX+craniumSize/100*16,centerY-craniumSize/100*60);
      vertex(centerX-craniumSize/100*30,centerY-craniumSize/100*60);
      vertex(centerX-craniumSize/100*30,centerY-craniumSize/100*58);
      vertex(centerX-craniumSize/100*30,centerY-craniumSize/100*52);
      vertex(centerX-craniumSize/100*17,centerY-craniumSize/100*54);
      vertex(centerX+craniumSize/100*16,centerY-craniumSize/100*54);
      endShape(CLOSE);
  
    
  
      strokeWeight(1);
      stroke(line2)
      line(centerX,centerY+craniumSize/100*89,centerX,centerY-craniumSize/100*54);
  
      strokeWeight(2)
      fill(base2)
      ellipse(centerX,centerY-craniumSize/100*100,craniumSize/100*15,craniumSize/100*15)
      ellipse(centerX+craniumSize/100*30,centerY-craniumSize/100*55,craniumSize/100*9,craniumSize/100*9)
      ellipse(centerX-craniumSize/100*30,centerY-craniumSize/100*55,craniumSize/100*9,craniumSize/100*9) }
   
    
  
    //Skull
    stroke(line1);
    strokeWeight(3)
    fill(base1);
  
    ellipse(centerX,centerY,craniumSize) //range between x 85 - 120 y 70 - 120   
  
    beginShape(); //Mandibles
    curveVertex(centerX-craniumSize/100*24,centerY+craniumSize/100*28); //handle
    curveVertex(centerX-craniumSize/100*40,centerY+craniumSize/100*15);//start point
    curveVertex(centerX-craniumSize/100*28,centerY+craniumSize/100*37);//second point
    curveVertex(centerX-craniumSize/100*36,centerY+craniumSize/100*40);
    curveVertex(centerX-craniumSize/100*39,centerY+craniumSize/100*52);
    curveVertex(centerX-craniumSize/100*33,centerY+craniumSize/100*58);
    curveVertex(centerX-craniumSize/100*23,centerY+craniumSize/100*52);
    curveVertex(centerX+craniumSize/100*23,centerY+craniumSize/100*52);
    curveVertex(centerX+craniumSize/100*33,centerY+craniumSize/100*58);
    curveVertex(centerX+craniumSize/100*39,centerY+craniumSize/100*52);
    curveVertex(centerX+craniumSize/100*36,centerY+craniumSize/100*40);
    curveVertex(centerX+craniumSize/100*28,centerY+craniumSize/100*37);
    curveVertex(centerX+craniumSize/100*40,centerY+craniumSize/100*15);
    curveVertex(centerX+craniumSize/100*24,centerY+craniumSize/100*28);//Handle 2
    endShape();
  
    fill(teeth);
  
    ellipse(centerX-craniumSize/100*6 ,centerY+craniumSize/100*59 ,craniumSize/100*10,craniumSize/100*20); //Teef //Range between y 10 - 30
    ellipse(centerX+craniumSize/100*6  ,centerY+craniumSize/100*59 ,craniumSize/100*10,craniumSize/100*20); //Teef
    ellipse(centerX+craniumSize/100*16  ,centerY+craniumSize/100*57  ,craniumSize/100*10,craniumSize/100*20); //Teef // Range between y 10 - 26
    ellipse(centerX-craniumSize/100*16 ,centerY+craniumSize/100*57  ,craniumSize/100*10,craniumSize/100*20); //Teef
  
    fill(base1);
  
    beginShape(); //Gums
    curveVertex(centerX-craniumSize/100*24,centerY+craniumSize/100*34);
    curveVertex(centerX-craniumSize/100*23,centerY+craniumSize/100*40);
    curveVertex(centerX-craniumSize/100*22,centerY+craniumSize/100*57);
    curveVertex(centerX-craniumSize/100*16,centerY+craniumSize/100*55);
    curveVertex(centerX-craniumSize/100*10,centerY+craniumSize/100*62);
    curveVertex(centerX-craniumSize/100*5,centerY+craniumSize/100*55 );
    curveVertex(centerX,centerY+craniumSize/100*63);
    curveVertex(centerX+craniumSize/100*5,centerY+craniumSize/100*55);
    curveVertex(centerX+craniumSize/100*10,centerY+craniumSize/100*62);
    curveVertex(centerX+craniumSize/100*16,centerY+craniumSize/100*55);
    curveVertex(centerX+craniumSize/100*22,centerY+craniumSize/100*57);
    curveVertex(centerX+craniumSize/100*23,centerY+craniumSize/100*40);
    curveVertex(centerX+craniumSize/100*24,centerY+craniumSize/100*34);
    endShape();
  
    fill(base2);
  
    stroke(line1);

    if (leye == 3)
    {ellipse(centerX-craniumSize/100*16,centerY+craniumSize/100*29,craniumSize/100*eyeSize);}
    if (reye == 3)
    {ellipse(centerX+craniumSize/100*16,centerY+craniumSize/100*29,craniumSize/100*eyeSize);}
    
  
    
    if (leye == 2) 
    {strokeWeight(3);
    line(centerX-craniumSize/100*27,centerY+craniumSize/100*21,centerX-craniumSize/100*9,centerY+craniumSize/100*34); //Cross Eye Left
    line(centerX-craniumSize/100*6,centerY+craniumSize/100*21,centerX-craniumSize/100*22,centerY+craniumSize/100*31);}
    
    if (reye == 2)
    {strokeWeight(3); 
    line(centerX+craniumSize/100*26,centerY+craniumSize/100*21,centerX+craniumSize/100*9,centerY+craniumSize/100*34); //CrossEye Right
    line(centerX+craniumSize/100*6,centerY+craniumSize/100*21,centerX+craniumSize/100*22,centerY+craniumSize/100*31);}
  

    if (leye==1)
    {stroke(line1);
      strokeWeight(3);
      beginShape();  //Eye Left
      curveVertex(centerX-craniumSize/100*26,centerY+craniumSize/100*21);
      curveVertex(centerX-craniumSize/100*6,centerY+craniumSize/100*24);
      curveVertex(centerX-craniumSize/100*9,centerY+craniumSize/100*34);
      curveVertex(centerX-craniumSize/100*22,centerY+craniumSize/100*32);
      endShape(CLOSE);}
    
    if (reye == 1)
    { beginShape(); //Eye Right
    curveVertex(centerX+craniumSize/100*26,centerY+craniumSize/100*21);
    curveVertex(centerX+craniumSize/100*6,centerY+craniumSize/100*24);
    curveVertex(centerX+craniumSize/100*9,centerY+craniumSize/100*34);
    curveVertex(centerX+craniumSize/100*22,centerY+craniumSize/100*32);
    endShape(CLOSE);}
    
  
    beginShape(); //Nose Hole
    curveVertex(centerX,centerY+craniumSize/100*27);
    curveVertex(centerX+craniumSize/100*4,centerY+craniumSize/100*42);
    curveVertex(centerX,centerY+craniumSize/100*39);
    curveVertex(centerX-craniumSize/100*4,centerY+craniumSize/100*42);
    endShape(CLOSE);
    
      
    if (hat == 4) //Wretched royalty
    {//CROWN
      stroke(line2);
  
      fill(hat1);
  
      beginShape();
      vertex(centerX-craniumSize/100*50,centerY-craniumSize/100*11);
      vertex(centerX-craniumSize/100*50,centerY-craniumSize/100*36);
      vertex(centerX-craniumSize/100*40,centerY-craniumSize/100*61);
      vertex(centerX-craniumSize/100*30,centerY-craniumSize/100*36);
      vertex(centerX-craniumSize/100*20,centerY-craniumSize/100*71);
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*36);
      vertex(centerX,centerY-craniumSize/100*81);
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*36);
      vertex(centerX+craniumSize/100*20,centerY-craniumSize/100*71);
      vertex(centerX+craniumSize/100*30,centerY-craniumSize/100*36);
      vertex(centerX+craniumSize/100*40,centerY-craniumSize/100*61);
      vertex(centerX+craniumSize/100*50,centerY-craniumSize/100*36);
      vertex(centerX+craniumSize/100*50,centerY-craniumSize/100*11);
      endShape();
  
      fill(hat2)
      strokeWeight(2)
  
      ellipse(centerX,centerY-craniumSize/100*36,craniumSize/100*15,craniumSize/100*25);
      ellipse(centerX-craniumSize/100*20,centerY-craniumSize/100*31,craniumSize/100*10,craniumSize/100*20);
      ellipse(centerX+craniumSize/100*20,centerY-craniumSize/100*31,craniumSize/100*10,craniumSize/100*20)}
    
    if (hat == 1) //Fanged deserter
    {//Deserter
      stroke(line2)
      strokeWeight(2)
      fill(hat1)
      beginShape()
      vertex(centerX-craniumSize/100*30,centerY+craniumSize/100*19);
      vertex(centerX-craniumSize/100*25,centerY+craniumSize/100*39);
      vertex(centerX-craniumSize/100*10,centerY+craniumSize/100*39);
      vertex(centerX-craniumSize/100*10,centerY+craniumSize/100*59);
      vertex(centerX-craniumSize/100*30,centerY+craniumSize/100*44);
      vertex(centerX-craniumSize/100*50,centerY+craniumSize/100*29);
      vertex(centerX-craniumSize/100*50,centerY+craniumSize/100*24);
      vertex(centerX-craniumSize/100*60,centerY+craniumSize/100*24);
      vertex(centerX-craniumSize/100*50,centerY-craniumSize/100*1);
      vertex(centerX-craniumSize/100*45,centerY-craniumSize/100*31);
      vertex(centerX-craniumSize/100*30,centerY-craniumSize/100*51);
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*66);
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*68)
      vertex(centerX,centerY-craniumSize/100*71);
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*68)
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*66);
      vertex(centerX+craniumSize/100*30,centerY-craniumSize/100*51);
      vertex(centerX+craniumSize/100*45,centerY-craniumSize/100*31);
      vertex(centerX+craniumSize/100*50,centerY-craniumSize/100*1);
      vertex(centerX+craniumSize/100*60,centerY+craniumSize/100*24);
      vertex(centerX+craniumSize/100*50,centerY+craniumSize/100*24);
      vertex(centerX+craniumSize/100*50,centerY+craniumSize/100*29);
      vertex(centerX+craniumSize/100*30,centerY+craniumSize/100*44);
      vertex(centerX+craniumSize/100*10,centerY+craniumSize/100*59);
      vertex(centerX+craniumSize/100*10,centerY+craniumSize/100*39);
      vertex(centerX+craniumSize/100*25,centerY+craniumSize/100*39);
      vertex(centerX+craniumSize/100*30,centerY+craniumSize/100*19);
      endShape(CLOSE)
  
      noFill(); //crest
      beginShape();
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*66);
      vertex(centerX-craniumSize/100*10,centerY-craniumSize/100*11);
      vertex(centerX,centerY-craniumSize/100*6);
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*11);
      vertex(centerX+craniumSize/100*10,centerY-craniumSize/100*66);
      endShape() }
     
    if (hat == 6) //Occult herbmaster 
    { //Herbmaster
      stroke(line2)
      fill(hat1)
      strokeWeight(3)
  
      beginShape();
      curveVertex(56.1064 , 60.2417);
      curveVertex(60.8682  ,96.6862);
      curveVertex(62.646  ,102.0195);
      curveVertex(71.0904  , 101.7973);
      curveVertex(68.8682 ,92.4639 );
      curveVertex(68.2015 ,60.2417);
      endShape(CLOSE);
  
      beginShape();
      curveVertex(36.6946 ,77.8609);
      curveVertex(43.0721 ,105.9241);
      curveVertex(54.5351 ,117.0887);
      curveVertex(62.8675 ,110.9664);
      curveVertex(49.5886 ,90.1838);
      curveVertex(49.88 ,78.0217);
      endShape(CLOSE);
  
      beginShape();
      curveVertex(138.3157 ,98.2743 );
      curveVertex(128.5591 ,108.4297 );
      curveVertex(117.471 ,125.7833 );
      curveVertex(124.4287 ,130.8956 );
      curveVertex(134.0004 ,121.573 );
      curveVertex(142.6455 ,98.1401 );
      endShape(CLOSE);
  
      beginShape();
      curveVertex(112.1111 ,106.5556 );
      curveVertex(115 ,121 );
      curveVertex(108.1111 ,135 );
      curveVertex(108.5556 ,141.8889 );
      curveVertex(115 ,144.5556 );
      curveVertex(124.1111 ,136.7778);
      curveVertex(123.8889 ,119.2222 );
      curveVertex(116.3333 ,104.3333 );
      endShape(CLOSE);
  
      fill(hat2);
      stroke(line2);
      strokeWeight(2)
      
      beginShape();
      curveVertex(65.3618 ,63.1306 );
      curveVertex(82.6952 ,65.575 );
      curveVertex(84.0285 ,54.9084 );
      curveVertex(68.0285 ,36.9084 );
      curveVertex(49.6374 ,54.9084 );
      curveVertex(51.3618 ,63.3528 );
      endShape(CLOSE);
  
      beginShape();
      curveVertex(45.7593 ,86.474 );
      curveVertex(72.9362 ,85.6591 );
      curveVertex(50.6864 ,59.9405 );
      curveVertex(18.6362 ,85.8828 );
      endShape(CLOSE);
  
      beginShape();
      curveVertex(129.5128 ,105.3304 );
      curveVertex(159.6524 ,101.7277 );
      curveVertex(137.6424 ,73.1764 );
      curveVertex(107.4137 ,104.6516 );
      endShape(CLOSE);
  
      beginShape();
      curveVertex(116.1111 ,109 );
      curveVertex(135.6667 ,102.3333 );
      curveVertex(107.2222 ,95.4444 );
      curveVertex(93.8889 ,111.4444 );
      endShape(CLOSE); }

    if (hat == 5) //Hereticl priest 
    {//Heretical Priest
      stroke(line2);
      strokeWeight(2);
  
      line(centerX-craniumSize/100*15,centerY+craniumSize/100*10,centerX+craniumSize/100*10,centerY+craniumSize/100*10);
      line(centerX-craniumSize/100*10,centerY+craniumSize/100*7,centerX+craniumSize/100*15,centerY+craniumSize/100*7);
      line(centerX-craniumSize/100*1.5,centerY-craniumSize/100*25,centerX-craniumSize/100*1.5,centerY+craniumSize/100*16);
      line(centerX+craniumSize/100*1.5,centerY-craniumSize/100*20,centerX+craniumSize/100*1.5,centerY+craniumSize/100*21)
      line(centerX-craniumSize/100*8,centerY+craniumSize/100*5,centerX-craniumSize/100*8,centerY+craniumSize/100*9);
      line(centerX+craniumSize/100*13,centerY+craniumSize/100*5,centerX+craniumSize/100*13,centerY+craniumSize/100*9);
      line(centerX+craniumSize/100*8,centerY+craniumSize/100*12,centerX+craniumSize/100*8,centerY+craniumSize/100*8);
      line(centerX-craniumSize/100*13,centerY+craniumSize/100*12,centerX-craniumSize/100*13,centerY+craniumSize/100*8);
      line(centerX-craniumSize/100*3.5,centerY+craniumSize/100*14,centerX+craniumSize/100*0.5,centerY+craniumSize/100*14);
      line(centerX-craniumSize/100*3.5,centerY-craniumSize/100*23,centerX+craniumSize/100*0.5,centerY-craniumSize/100*23);
      line(centerX-craniumSize/100*0.5,centerY-craniumSize/100*18,centerX+craniumSize/100*3.5,centerY-craniumSize/100*18);
      line(centerX-craniumSize/100*0.5,centerY+craniumSize/100*18,centerX+craniumSize/100*3.5,centerY+craniumSize/100*18);}
    

    if (hat == 3) //Esoteric hermit
    {//Hermit
    stroke(line2);
    strokeWeight(3);

    line(centerX-craniumSize/100*45,centerY-craniumSize/100*7,centerX-craniumSize/100*39,centerY+craniumSize/100*10);
    line(centerX-craniumSize/100*46,centerY-craniumSize/100*2,centerX-craniumSize/100*39,centerY);

    noFill()
    beginShape()
    vertex(centerX-craniumSize/100*31,centerY+craniumSize/100*6);
    vertex(centerX-craniumSize/100*22,centerY-craniumSize/100*11);
    vertex(centerX-craniumSize/100*35,centerY-craniumSize/100*13);
    vertex(centerX-craniumSize/100*29,centerY-craniumSize/100*26);
    vertex(centerX-craniumSize/100*39,centerY-craniumSize/100*24.5);
    endShape(CLOSE)

    noFill()
    beginShape()
    vertex(centerX,centerY-craniumSize/100*3);
    vertex(centerX-craniumSize/100*23,centerY-craniumSize/100*29);
    vertex(centerX-craniumSize/100*19,centerY-craniumSize/100*41);
    vertex(centerX-craniumSize/100*9,centerY-craniumSize/100*36);
    vertex(centerX-craniumSize/100*14,centerY);
    endShape()

    noFill()
    beginShape()
    vertex(centerX+craniumSize/100*5,centerY-craniumSize/100*4);
    vertex(centerX+craniumSize/100*7,centerY-craniumSize/100*41);
    vertex(centerX+craniumSize/100*18,centerY-craniumSize/100*29);
    vertex(centerX+craniumSize/100*9,centerY-craniumSize/100*26);
    vertex(centerX+craniumSize/100*13,centerY-craniumSize/100);
    endShape()

    noFill()
    beginShape()
    vertex(centerX+craniumSize/100*45,centerY-craniumSize/100*15);
    vertex(centerX+craniumSize/100*42,centerY-craniumSize/100*9);
    vertex(centerX+craniumSize/100*45,centerY);
    vertex(centerX+craniumSize/100*37,centerY+craniumSize/100*2);
    vertex(centerX+craniumSize/100*34,centerY+craniumSize/100*7);
    endShape(CLOSE)

    line(centerX+craniumSize/100*32,centerY-craniumSize/100*30,centerX+craniumSize/100*20,centerY);
    line(centerX+craniumSize/100*28,centerY-craniumSize/100*21,centerX+craniumSize/100*39,centerY-craniumSize/100*24);
    line(centerX+craniumSize/100*27,centerY+craniumSize/100*1,centerX+craniumSize/100*26,centerY-craniumSize/100*16); }
  }
  
  function DrawSword(x,y,s,mstroke,mfill){
    stroke(mstroke)
    fill(mfill)
    strokeWeight(2)
    beginShape ();
    vertex(x-s/50*25,y+s/50*25);
    vertex(x-s/50*17,y+s/50*19);
    vertex(x+s/50*14,y-s/50*11);
    vertex(x+s/50*18,y-s/50*8);
    vertex(x+s/50*19,y-s/50*9);
    vertex(x+s/50*15,y-s/50*12);
    vertex(x+s/50*15,y-s/50*13);
    vertex(x+s/50*22,y-s/50*20);
    vertex(x+s/50*23,y-s/50*20);
    vertex(x+s/50*25,y-s/50*25);
    vertex(x+s/50*20,y-s/50*23);
    vertex(x+s/50*20,y-s/50*22);
    vertex(x+s/50*13,y-s/50*15);
    vertex(x+s/50*12,y-s/50*15);
    vertex(x+s/50*9,y-s/50*19);
    vertex(x+s/50*8,y-s/50*18);
    vertex(x+s/50*11,y-s/50*14);
    vertex(x-s/50*19,y+s/50*17);
    endShape(CLOSE);
  }

 

  
