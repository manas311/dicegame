
document.querySelector("button").addEventListener("click",calc);

function calc(){
var n1= Math.floor(Math.random()*6)+1;
var n2= Math.floor(Math.random()*6)+1;
var image1="images/dice"+n1+".png";
var image2="images/dice"+n2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(n1>n2){
  document.querySelector("h2").innerHTML = "Player 1 wins!";
    document.querySelector("h2").style.color= "#845ec2";
}else if (n1===n2) {
  document.querySelector("h2").innerHTML = "DRAW";
  document.querySelector("h2").style.color= "#5b5b5b";
}else{
  document.querySelector("h2").innerHTML = "Player 2 wins!";
  document.querySelector("h2").style.color= "#ff5e78";
}

}
