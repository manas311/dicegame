var name1 = prompt("Enter name of Player 1:-");
var name2 = prompt("Enter name of Player 2:-");

document.querySelectorAll("p")[0].textContent = name1;
document.querySelectorAll("p")[1].textContent = name2;





document.querySelector("button").addEventListener("click",calc);

function calc(){
var n1= Math.floor(Math.random()*6+1);
var n2= Math.floor(Math.random()*6+1);
var image1="images/dice"+n1+".png";
var image2="images/dice"+n2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(n1>n2){
  document.querySelector("h2").innerHTML = "Winner: "+name1+" 🥳🥳";
    document.querySelector("h2").style.color= "#845ec2";
}else if (n1===n2) {
  document.querySelector("h2").innerHTML = "DRAW😬😬";
  document.querySelector("h2").style.color= "#5b5b5b";
}else{
  document.querySelector("h2").innerHTML = "Winner: "+name2+" 🥳🥳";
  document.querySelector("h2").style.color= "#ff5e78";
}

}
