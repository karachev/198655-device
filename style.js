var link = document.querySelector(".navigation_a-top");
var popup = document.querySelector(".header-bottom");

link.addEventListener("mouseover", function(event) {
	event.preventDefault();
	popup.classList.remove(".header-bottom-close");
});


// link.addEventListener("mouseover", function(event) {
// 	event.preventDefault();
// 	popup.classList.add(".header-bottom-close");
// }};

// var link = document.querySelector(".btn__feedback");
// var popup = document.querySelector(".modal-content");
// var close = document.querySelector(".modal-content-close");

// link.addEventListener("click", function(event){
// 	event.preventDefault();
// 	popup.classList.add("modal-content-show");
// });

// close.addEventListener("click", function(event){
// 	event.preventDefault();
// 	popup.classList.remove("modal-content-show");
// });
