/* My main js code*/

/* Wait for the page to be fully loaded before the image switching operation commences*/
window.onload = () =>{
 CommenceEvent();
};
/* Declare the main variables to be used in this program */
let myImagesArray = ["TC.png","TT.png","SL7000.jpg","RS232.jpg","CB.png","surge.png","withTT.png","withoutTT.png"];
let myImageIndex = 0;
let timeInterval = 2000;
/* CommenceEvent main function*/
function CommenceEvent(){
document.myImages.src=myImagesArray[myImageIndex];

if(myImageIndex < myImagesArray.length - 1){   /// Verify if the myImageIndex is equal to the last array index
myImageIndex ++;
}
else{
ResetImages();
}
 setTimeout("CommenceEvent()", timeInterval);//// Set the time delay to 2s
 }

/* My main reset function*/
function ResetImages(){
myImageIndex = 0;
  }

/* Open a new window to display the following document links when clicked on the on the respective tab in the Navigation bar*/

let mydoc = document.getElementById("myDoc");
mydoc.onclick = () =>{
window.location.replace("https://desmond-zeh.github.io/document.github.io/","_blank");
};
 let myhom = document.getElementById("home");
myhom.onclick = () =>{
window.location.replace("https://desmond-zeh.github.io/Zeh-home.github.io/", "_blank");
};

let mydown = document.getElementById("down");
mydown.onclick = () =>{
window.location.replace("");
};
 let myabout = document.getElementById("about");
myabout.onclick = () =>{
window.location.replace("");
};

  
