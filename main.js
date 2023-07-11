//create a variable for each image
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
const image5 = document.getElementById("img5"); 

//create an array of the images
const imgNum = [image1, image2, image3, image4, image5];

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

