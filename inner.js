let result=[];
let xycount=0;
let finalresult;
let count = 9;
function fungame(val){
    if(xycount%2 == 0 && !(result[val] )) {
        result[val]='x';
        xycount++;
    }
    else if(!xycount%2 == 0 && !(result[val]) ) {
     result[val]='y';
     xycount++;}
    console.log(result);
    calculate();
//     button();
}
function calculate(){
    // left to right
   if(result[1]=='x' && result[2]=='x' && result[3]=='x'
   ||result[1]=='y' && result[2]=='y' && result[3]=='y'){
        if(result[1]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
    else if(result[4]=='x' && result[5]=='x' && result[6]=='x'
   ||result[4]=='y' && result[5]=='y' && result[6]=='y'){
        if(result[4]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
   else if(result[7]=='x' && result[8]=='x' && result[9]=='x'
   ||result[7]=='y' && result[8]=='y' && result[9]=='y'){
        if(result[7]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
     

   //top to bottom
   else if(result[1]=='x' && result[4]=='x' && result[7]=='x'
   ||result[1]=='y' && result[4]=='y' && result[7]=='y'){
        if(result[1]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
    else if(result[2]=='x' && result[5]=='x' && result[8]=='x'
   ||result[2]=='y' && result[5]=='y' && result[8]=='y'){
        if(result[2]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
   else if(result[3]=='x' && result[6]=='x' && result[9]=='x'
   ||result[7]=='y' && result[8]=='y' && result[9]=='y'){
        if(result[3]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }

   // cross check
   else if(result[1]=='x' && result[5]=='x' && result[9]=='x'
   ||result[1]=='y' && result[5]=='y' && result[9]=='y'){
        if(result[1]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
   else if (result[7]=='x' && result[5]=='x' && result[3]=='x'
   ||result[7]=='y' && result[5]=='y' && result[3]=='y'){
        if(result[1]=='x')finalresult='x won the game';
        else finalresult='y won the game';
   }
   else if(xycount==9) finalresult='the match draw';
   document.querySelector('.js-result').innerHTML=finalresult;
}
function button1(){
     if(xycount%2==0) document.querySelector('.js-x').innerHTML='y';
     else  document.querySelector('.js-x').innerHTML='x';
}
function button2(){
     if(xycount%2==0) document.querySelector('.tjs-x').innerHTML='y';
     else  document.querySelector('.tjs-x').innerHTML='x';
}
function button3(){
     if(xycount%2==0) document.querySelector('.thjs-x').innerHTML='y';
     else  document.querySelector('.thjs-x').innerHTML='x';
}
function button4(){
     if(xycount%2==0) document.querySelector('.fjs-x').innerHTML='y';
     else  document.querySelector('.fjs-x').innerHTML='x';
}
function button5(){
     if(xycount%2==0) document.querySelector('.fijs-x').innerHTML='y';
     else  document.querySelector('.fijs-x').innerHTML='x';
}
function button6(){
     if(xycount%2==0) document.querySelector('.sjs-x').innerHTML='y';
     else  document.querySelector('.sjs-x').innerHTML='x';
}
function button7(){
     if(xycount%2==0) document.querySelector('.sejs-x').innerHTML='y';
     else  document.querySelector('.sejs-x').innerHTML='x';
}
function button8(){
     if(xycount%2==0) document.querySelector('.ejs-x').innerHTML='y';
     else  document.querySelector('.ejs-x').innerHTML='x';
}
function button9(){
     if(xycount%2==0) document.querySelector('.njs-x').innerHTML='y';
     else  document.querySelector('.njs-x').innerHTML='x';
}