// make all h2 tag lightblue
let allh2 = document.getElementsByTagName("h2");

for (const h2 of allh2) {
  h2.style.color = "darkblue";
}

// make backpack id section bg tomato

let backPack = document.getElementById("backpack");
backPack.style.backgroundColor = "tomato";

// card class all card make border radius 30 px

let allCard = document.querySelectorAll(".card");

for (const card of allCard) {
  card.style.borderRadius = "30px";
}

// Write any function. Inside that will be the console log. And add that function to a button as a click handler

function clickToConsole() {
  console.log("click hoyeche");
}

/* Add an event listener like this to the buy now button. So that if you click on any buy now button, the attempt will be removed from the website. Try to think a little. */

let allBtn = document.getElementsByClassName("clickToRemove");

for (const buyNow of allBtn) {
  buyNow.addEventListener("click", function (e) {
    // method 1

    e.target.parentNode.removeChild(e.target);

    // method 2
    // e.target.style.display = "none";
  });
}

/* At the very bottom there is a thing called LET'S STAY IN TOUCH. There you will disable the submit "button". Then if someone writes exactly the word email in the above input field. Then the button will be active. And if you write something else then the button will not be active. */

document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (e) {
    let submitBtn = document.getElementById("submit-btn");
    if (e.target.value.includes("@gmail.com")) {
      submitBtn.removeAttribute("disabled");
    }
  });

// What a fun challenge. If you mouseenter on an image, that image will change.

let categoryOne = document.getElementById("catagory-one");
let categoryTwo = document.getElementById("catagory-two");
let categoryThree = document.getElementById("catagory-three");

// change one by one single

/* categoryOne.addEventListener("mouseenter", function () {
  categoryOne.src = "/images/categories/watch2.png";
}); */

// change dynamically

let categories = document.getElementsByClassName("category");
for (const category of categories) {
  category.addEventListener("mouseenter", function (e) {
    if (e.target.innerText.toLowerCase() == "watch".toLocaleLowerCase()) {
      categoryOne.src = "./images/categories/watch2.png";
    } else if (e.target.innerText.toLowerCase() == "bags".toLocaleLowerCase()) {
      categoryTwo.src = "./images/categories/bag2.png";
    } else if (
      e.target.innerText.toLowerCase() == "shoes".toLocaleLowerCase()
    ) {
      categoryThree.src = "./images/categories/shoe2.png";
    }
  });
}

let inTouchSec = document.getElementById("subscribe");
inTouchSec.addEventListener("dblclick", function () {
  inTouchSec.classList.add("bg-info");
});
