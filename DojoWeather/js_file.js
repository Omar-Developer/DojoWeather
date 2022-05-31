function cookies_disappear(){
  document.querySelector(".container-cookie").style.display = "none";
 }

function change_temperature(){
  var bool=true;
  var temp = document.getElementById("temperature").value;
   const nodeList = document.querySelectorAll(".days .temp span");      
       if(temp=="F" && bool==true){
        for (let i = 0; i < nodeList.length; i++) {
          var f=cToF( nodeList[i].innerText);
          nodeList[i].innerHTML = f;  
        }       
        bool=false;
      }
        else{

          for (let i = 0; i < nodeList.length; i++) {
            var c=fToC( nodeList[i].innerText);
            nodeList[i].innerHTML = c;  
          }       
          bool=true;   

        }
}


function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
     return parseInt(cToFahr);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return parseInt(fToCel);
} 