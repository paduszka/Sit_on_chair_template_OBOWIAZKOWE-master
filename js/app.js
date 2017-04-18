document.addEventListener('DOMContentLoaded',
function() {

//Po najechaniu boxy będą bez opisu
  var boxes = Array.from(document.querySelectorAll(".box"));
  var transparentBacks = Array.from(document.querySelectorAll(".transparentBack"));

  boxes[0].addEventListener("mouseenter", function(event){
    console.log("box1");
    transparentBacks[0].style.display = "none";
  });
  boxes[0].addEventListener("mouseleave", function(event){
    transparentBacks[0].style.display = "block";
  });
  boxes[1].addEventListener("mouseenter", function(event){
    transparentBacks[1].style.display = "none";
  });
  boxes[1].addEventListener("mouseleave", function(event){
    transparentBacks[1].style.display = "block";

})

//Menu rozwijane

var headerMenuLis = document.querySelectorAll('.headerMenu li')
var menuLis = Array.from(document.querySelectorAll(".headerMenu > li"));
  var menuRolled = Array.from(document.querySelectorAll(".rolled"));

  headerMenuLis[0].addEventListener("mouseover", function(event){
      menuRolled[0].style.display = "block";
    });
  headerMenuLis[0].addEventListener("mouseout", function(event){
      menuRolled[0].style.display = "none";
    });
  headerMenuLis[4].addEventListener("mouseover", function(event){
      menuRolled[1].style.display = "block";
    });
  headerMenuLis[4].addEventListener("mouseout", function(event){
      menuRolled[1].style.display = "none";
    });
  headerMenuLis[8].addEventListener("mouseover", function(event){
      menuRolled[2].style.display = "block";
    });
  headerMenuLis[8].addEventListener("mouseout", function(event){
      menuRolled[2].style.display = "none";
    });

//slider
  var nextProduct = document.getElementsByClassName('arrowRight')[0];
  var previousProduct = document.getElementsByClassName('arrowLeft')[0];

  var products = document.querySelectorAll('.productImages')[0]
  var productsArray = Array.from(products.getElementsByTagName('li'));

  var pictureIndex = 0;
  var visibleElement = productsArray[0];

  visibleElement.classList.add('visible');

  function sliderNextProduct() {
    productsArray[pictureIndex].classList.remove('visible');
    pictureIndex = (pictureIndex+1)%productsArray.length;
    productsArray[pictureIndex].classList.add('visible');
    console.log('next');
  }

  function sliderPreviousProduct() {
    productsArray[pictureIndex].classList.remove('visible');
    pictureIndex = (productsArray.length-((productsArray.length+1)-(pictureIndex+1))%productsArray.length)-1;
    productsArray[pictureIndex].classList.add('visible');
    console.log('prev');
  }

nextProduct.addEventListener('click', sliderNextProduct());
previousProduct.addEventListener('click', sliderPreviousProduct());

})
