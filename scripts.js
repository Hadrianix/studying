// var dogNames = ["Tiger", "Spot", "Butterball", "Niblet"];
// var catNames = ["spider", "Patches", "Gisle", "Yumi"] 

// for(var i = 0; i < dogNames.length; i++);
// // if(dogNames[i] == )

// var dogAndCats = dogNames + "Taylor";
// dogAndCats += "Bob";
// console.log(dogAndCats);

// var firstName = "Adrian";
// var lastName =  "Taylor";


// console.log(firstName + " " + lastName);


// var numOfChildren = 3;
// var partnersName = "Beth";
// var geoLocation = "Calgary";
// var jobTitle = "Designer";

// console.log("You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnersName + " with " + numOfChildren + " kids.")

// function favouriteGame() {
//     console.log('My favourite game is Metal Gear solid');
// }

// console.log(favouriteGame);



// function callName(firstName, lastName) {
//     // var firstName = "Adrian";
//     // var lastName = "Taylor";

//     return firstName + lastName;

    
// }

// console.log(callName);

// var temperature = 11;

// if (temperature <= 10) {
//     console.log('Put on a coat')
// }
// if(temperature <= 0) {
//     console.log('Wear a coat and hat')
// }

// if(temperature <= -20) {
//     console.log('Stay inside!')
// } else if(temperature > 10) {
//     console.log('wear what you want')
// }


// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function previous(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

var sliderStuff = document.getElementById('slides');

var images = [
    'a',
    'b',
    'c',
    'd',
    
];

var i = images.length;

function nextImage() {
    if (i < images.length) {
        i = i+1;
    }else {
        i = 1;
    }
    sliderStuff.innerHTML = "<img src="+images[i-1]+".jpeg>";
}

function prevImage() {
    if (i<images.length+1 && i>i) {
        i = 1-1;
    }else {
        i=1;
    }
    sliderStuff.innerHTML = "<img src="+images[i-1]+".jpeg>";
}

var slideCounter = setInterval(nextImage, 30000);