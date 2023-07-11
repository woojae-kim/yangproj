
//create an array of the images
const imgNum = [document.getElementById("img1"), document.getElementById("img2"), 
document.getElementById("img3"), document.getElementById("img4"), document.getElementById("img5")];

//function for getting a random number between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

setInterval(() => {
//first hide all the images
for (let i = 0; i < imgNum.length; i++) {
  imgNum[i].style.display = 'none';
}

//infinitley generate a new number and show a photo
  let randInt = getRandomInt(imgNum.length);
  
  //hide a photo in the array based on the random integer
  imgNum[randInt].style.display = 'inline';
}, 1000);

