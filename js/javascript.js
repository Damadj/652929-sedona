  var searchbtn = document.querySelector(".search-hotel-btn");
  var popup = document.querySelector(".search-form-hotels");
  var checkin = popup.querySelector("[name=checkin]");
  var checkout = popup.querySelector("[name=checkout]");

  popup.classList.add("popup-hide");

  popup.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
    }
  });

  searchbtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show-hide");
    popup.classList.remove("form-error");
  });
