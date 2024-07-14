float num = .03;
float circulox;
float circuloy;
void setup()
{
  size(640,269);
  background (231,229,230);
  smooth();
}

void draw()
{
  num += .03;
 for(int z = 101; z < 201; z++)
  {
    
    circulox = noise ( num, (z/100.))*700;
    circuloy = noise( (z/100.),num)*320;
    
   stroke(0,random(150,250));
    fill(255);
    ellipse( circulox,circuloy,12,16);
  
   
    
  }
  
    filter(BLUR,.07);
//      saveFrame("images/export-"+"-#####.jpeg");
// if ( framenum >= 6000 ) {
//       exit();
//   } 
  
}


