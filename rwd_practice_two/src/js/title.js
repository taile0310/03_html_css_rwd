function updateContentBasedOnScreenSize() {
  var screenWidth = window.innerWidth;
  var cards = document.querySelectorAll(".pricing__card-content");
  var prices = document.querySelectorAll(".price");

  if (screenWidth >= 768) {
    cards[0].querySelector(".pricing__card-title h3").innerText = "Free";
    cards[1].querySelector(".pricing__card-title h3").innerText = "STANDARD";
    cards[2].querySelector(".pricing__card-title h3").innerText = "BUSINESS";
    prices.querySelector(".price").innerText = "0";
  } else {
    cards.forEach(function (card) {
      var cardTitle = card.querySelector(".pricing__card-title h3");
      cardTitle.innerText = "Free";
    });
    prices.forEach(function (price) {
      var priceValue = price.querySelector(".price");
      priceValue.innerText = "10";
    });
  }
}

updateContentBasedOnScreenSize();

window.addEventListener("resize", updateContentBasedOnScreenSize);
