var dice1=Math.random();
dice1=(dice1*6)+1;
dice1=Math.floor(dice1);
var dice2=Math.random();
dice2=(dice2*6)+1;
dice2=Math.floor(dice2);

if(dice1==1)
{
var image=document.getElementById('img1');
image.src='./imgs/dice1.png';

}
if(dice1==2)
{
var image=document.getElementById('img1');
image.src='./imgs/dice2.png';
}
if(dice1==3)
{
  var image=  document.getElementById('img1');
  image.src='./imgs/dice3.png';
}
if(dice1==4)
{
    var image=document.getElementById('img1');
    image.src="./imgs/dice4.png";
}
if(dice1==5)
{  
    var image=document.getElementById('img1');
    image.src="./imgs/dice5.png";

}
if(dice1==6)
{
    var image=document.getElementById('img1');
    image.src="./imgs/dice6.png";
}
if(dice2==1)
{
  var image=  document.getElementById('img2');
  image.src='./imgs/dice1.png';
}
if(dice2==2)
{
var image=document.getElementById('img2');
image.src='./imgs/dice2.png';
}
if(dice2==3)
{
  var image=  document.getElementById('img2');
  image.src='./imgs/dice3.png';
}
if(dice2==4)
{
    var image=document.getElementById('img2');
    image.src="./imgs/dice4.png";
}
if(dice2==5)
{  
    var image=document.getElementById('img2');
    image.src="./imgs/dice5.png";

}
 if(dice2==6)
{
    var image=document.getElementById('img2');
    image.src="./imgs/dice6.png";
}
if(dice1==dice2)
{
    document.getElementById('Top').innerHTML="Match Draws!";
}
if(dice1>dice2)
{
    document.getElementById('Top').innerHTML="Player 1 Wins!";
}
 if(dice2>dice1)
{
    document.getElementById('Top').innerHTML="Player 2 Wins";
}








