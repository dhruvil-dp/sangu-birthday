let currentPage = 1;
let lastPage = 5;
function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  }
  else if ((page == currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

document.getElementById("botao1").addEventListener("click", function () {
  var confirmation = confirm("Aajse sirf tuhi mera best friend hai aur rahega.. 😍");
  if (confirmation) {
  //   while (currentPage > 1) {
  //     let currentPageElement = document.querySelector(".text-page:nth-child(" + (currentPage / 2) + ")");
  //     toggleClass(currentPageElement, "left-side");
  //     toggleClass(currentPageElement.previousElementSibling, "left-side");
  //     currentPage -= 2; // Decrement currentPage for the next iteration
  // }
  window.location.reload(); // Reload the page
    
}
});

function resetPageOrder() {
  var pages = document.querySelectorAll(".page");
  var book = document.querySelector(".book");
  var coverPage = pages[0];
  book.appendChild(coverPage);
}