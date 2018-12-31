
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var circles = document.getElementsByClassName("circles");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++)
    {
        circles[i].className = circles[i].className.replace('circles_active','');
    }
    slides[slideIndex-1].style.display = "block";
    circles[slideIndex-1].className += " circles_active";
  }
  function plusSlides(n)
  {
    showSlides(slideIndex += n);
  }

  function currentSlide(n)
  {
    showSlides(slideIndex=n);
  }
