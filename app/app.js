// Variables
const webSection = document.getElementsByClassName("websiteSection");
let porfolioData = []; // Array to hold Json data

// Get Data from Json
function getData() {
  $.get("data/worksData.json", function (data) {
    // Assign Fetch Data to global Variable
    porfolioData = data;
    console.log(data);
  }).fail(function (error) {
    console.log("Error: ", error);
  });
}

// Load Porfolio Works
function loadPorfolio() {
  $(".websiteSection").html("");
  $.each(porfolioData.Works, function (index, work) {
    $(".websiteSection").append(`<div class="websitePrevBox">
    <div class="websitePrevPic ${work.WebsiteImage}Pic"></div>
    <div class="projectText">
      <h2>${work.WebsiteTitle}</h2>
      <p>${work.WebsiteCodeLangs}</p>
      <p class="descText">${work.WebsiteDesc}</p>
      <button class="viewSite">
        <a
          href="${work.WebsiteURL}"
          target="_blank"
        >
          View Site
        </a>
      </button>
    </div>
  </div>`);
  });
}

function initListeners() {
  // Hamburger Nav Menu
  $(".hamburger-menu").on("click", function () {
    $(this).toggleClass("open");
  });
}

$(document).ready(function () {
  getData();
  initListeners();
  //   loadPorfolio();
});
// Load Porfolio data when after document is ready
$(window).on("load", function () {
  loadPorfolio();
});
