//create a variable for each image
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
const image5 = document.getElementById("img5"); 

//create an array of the images
const imgNum = [image1, image2, image3, image4, image5];


//get a random number between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//create a variable for a random integer
const randInt = getRandomInt(5);

console.log(randInt)

//hide a photo in the array based on the random integer
 imgNum[randInt].style.display = 'none';
