let slideShow = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("image-slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideShow++;
  if (slideShow > x.length) {slideShow = 1}
  x[slideShow-1].style.display = "inline";
  setTimeout(carousel, 4000);
}