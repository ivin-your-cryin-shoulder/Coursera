/*Name this external file gallery.js*/

// var num = [1,2,3];
// num[num.length] = 4;
// console.log(num.length);

function upDate(previewPic) {


	document.getElementById('image').innerHTML = previewPic.alt;
	document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
	// document.getElementsByTagName('a')[2].innerHTML="What does the fox say";
	/* In this function you should 
	   1) change the url for the background image of the div with the id = "image" 
	   to the source file of the preview image
	   
	   2) Change the text  of the div with the id = "image" 
	   to the alt text of the preview image 
	*/

}

function unDo() {

	document.getElementById('image').innerHTML = "Hover over an image below to display here."
	document.getElementById('image').style.backgroundImage = "url('')";

	/* In this function you should 
	   1) Update the url for the background image of the div with the id = "image" 
	   back to the orginal-image.  You can use the css code to see what that original URL was
	   
	   2) Change the text  of the div with the id = "image" 
	   back to the original text.  You can use the html code to see what that original text was
	*/
}

// Different Way and Different Concatination
/*
function upDate(previewPic) {
	var myImage = document.getElementById('image');
	myImage.style.backgroundImage = `url(${previewPic.src})`
	myImage.innerHTML = previewPic.alt
}

function unDo() {
	var myImage = document.getElementById('image');
	myImage.style.backgroundImage = `url('')`
	myImage.innerHTML = 'Hover over an image below to display here.'
*/
