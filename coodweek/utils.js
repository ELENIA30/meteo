const createCard = (name,description,main,icon) => {
  const divCard = document.createElement("div");
  const nameCard = document.createElement("h3");
  const descriptionCard= document.createElement("p");
  const mainCard = document.createElement("p");
  const imgCard = document.createElement("img");

  divCard.classList.add("card");
  nameCard.classList.add("cityName");
  descriptionCard.classList.add("description");
  imgCard.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  imgCard.classList.add("cardImg");
  mainCard.classList.add("mainCard")

  nameCard.textContent = name;
  descriptionCard.textContent= description;
  mainCard.textContent= main;

  divCard.append(nameCard, descriptionCard, mainCard, imgCard);
  document.querySelector('.cardsWrapper').appendChild(divCard);
};

const updateCard = (name,description,main,icon) => {
  const nameCard = document.querySelector(".cityName");
  const descriptionCard= document.querySelector(".description");
  const imgCard= document.querySelector(".cardImg");
  const mainCard= document.querySelector(".mainCard");

  nameCard.textContent = name;
  descriptionCard.textContent = description;
  mainCard.textContent = main;
  imgCard.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
};
export { createCard,updateCard };