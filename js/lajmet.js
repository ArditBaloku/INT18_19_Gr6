var pageIndex = 1;

function plusPage(n)
{
  showPage(pageIndex += n);

}
function currentPage(n)
{
  showPage(pageIndex=n);
}

function showPage(n) {
    var i;
    var page = document.getElementsByClassName("ThisPage");
    var page_number = document.getElementsByClassName("page_number");
    if (n > page.length)
    {
        pageIndex = 1;
    }
    if (n < 1)
    {
        pageIndex = page.length;
    }
    for (i = 0; i < page.length; i++)
    {
        page[i].style.display = "none";
    }

    page[pageIndex-1].style.display = "block";
    for (i = 0; i < page_number.length; i++)
    {
      page_number[i].className = page_number[i].className.replace('active','');
    }
    page_number[pageIndex-1].className += " active";
  }
