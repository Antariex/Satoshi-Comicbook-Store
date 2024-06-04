const products = [
  {
    name: "Demon Slayer",
    type: "manga",
    imageUrl: "./public/images/demonslayer01.jpg",
  },
  {
    name: "Dragon Ball Super",
    type: "manga",
    imageUrl: "./public/images/dragonballsuper01.jpg",
  },
  {
    name: "Fire Punch",
    type: "manga",
    imageUrl: "./public/images/firepunch1.jpg",
  },
  {
    name: "Hunter x Hunter",
    type: "manga",
    imageUrl: "./public/images/hunterxhunter01.jpg",
  },
  {
    name: "Batman INC",
    type: "comics",
    imageUrl: "./public/images/batmaninc.webp",
  },
  {
    name: "Slam Dunk",
    type: "manga",
    imageUrl: "./public/images/slamdunk01.jpg",
  },
  {
    name: "Flashpoint Beyond",
    type: "comics",
    imageUrl: "./public/images/flashpointbeyond.webp",
  },
  {
    name: "Card Captor Sakura",
    type: "manga",
    imageUrl: "./public/images/cardcaptorsakura1.jpg",
  },
  {
    name: "Doomsday Clock",
    type: "comics",
    imageUrl: "./public/images/doomsdayclock.webp",
  },
  {
    name: "20th Century Boys",
    type: "manga",
    imageUrl: "./public/images/20thcenturyboys_01.jpg",
  },
  {
    name: "Dune 1",
    type: "novels",
    imageUrl: "./public/images/dune.webp",
  },
  {
    name: "Godzilla",
    type: "figures",
    imageUrl: "./public/images/godzilla.jpg",
  },
  {
    name: "Naruto The Last",
    type: "novels",
    imageUrl: "./public/images/narutothelast.jpg",
  },
  {
    name: "Star Wars L3-37",
    type: "figures",
    imageUrl: "./public/images/starwars.jpg",
  },
  {
    name: "Mister Miracle",
    type: "comics",
    imageUrl: "./public/images/mrmiracle.webp",
  },
  {
    name: "Iron Man Keychain",
    type: "merchandising",
    imageUrl: "./public/images/ironman.webp",
  },
  {
    name: "Tokyo Revengers",
    type: "manga",
    imageUrl: "./public/images/tokyorevengers25.jpg",
  },
  {
    name: "Spider Man Wallet",
    type: "merchandising",
    imageUrl: "./public/images/spiderman.webp",
  },
  {
    name: "Dune 2",
    type: "novels",
    imageUrl: "./public/images/dune2.jpg",
  },
  {
    name: "Saint Seiya Shun",
    type: "figures",
    imageUrl: "./public/images/andromeda.jpg",
  },
];

const copyYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
};
const formattedLastModified = lastModifiedDate.toLocaleDateString(
  "en-US",
  options
);

copyYearElement.textContent = `© ${currentYear} Ariel Antequiera - Buenos Aires, Argentina`;
lastModifiedElement.textContent = `Last Modified: ${formattedLastModified}`;

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const desktopMenu = document.querySelector(".desktop-menu");

  menuIcon.addEventListener("click", function () {
    const isMenuVisible = desktopMenu.style.display === "flex";

    desktopMenu.style.display = isMenuVisible ? "none" : "flex";
    hamburgerIcon.style.display = isMenuVisible ? "block" : "none";
    closeIcon.style.display = isMenuVisible ? "none" : "block";
  });

  const productsCardsContainer = document.getElementById("products-cards");
  const allButton = document.getElementById("all");
  const comicsButton = document.getElementById("comics");
  const mangaButton = document.getElementById("manga");
  const novelsButton = document.getElementById("novels");
  const figuresButton = document.getElementById("figures");
  const merchandisingButton = document.getElementById("merchandising");

  function displayProducts(filteredProducts) {
    productsCardsContainer.innerHTML = "";
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
      `;

      productsCardsContainer.appendChild(card);
    });
  }

  function filterProducts(criteria) {
    if (criteria === "all") {
      return products;
    } else {
      return products.filter((product) => product.type === criteria);
    }
  }

  allButton.addEventListener("click", () =>
    displayProducts(filterProducts("all"))
  );
  comicsButton.addEventListener("click", () =>
    displayProducts(filterProducts("comics"))
  );
  mangaButton.addEventListener("click", () =>
    displayProducts(filterProducts("manga"))
  );
  novelsButton.addEventListener("click", () =>
    displayProducts(filterProducts("novels"))
  );
  figuresButton.addEventListener("click", () =>
    displayProducts(filterProducts("figures"))
  );
  merchandisingButton.addEventListener("click", () =>
    displayProducts(filterProducts("merchandising"))
  );

  displayProducts(products);
});
