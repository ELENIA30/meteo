
const createCard = (id, description, main, icon) => {
  console.log(id, description, main, icon);
  const divEl = document.createElement("div");
  const idEl = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const mainEl = document.createElement("p");
  const imgEl = document.createElement("img");



  divEl.classList.add("card");
  idEl.classList.add("coord");
  parDescEl.classList.add("description");
  imgEl.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);



  idEl.textContent = id;
  parDescEl.textContent = description;
  mainEl.textContent = main;



  divEl.append(idEl, parDescEl, mainEl, imgEl);
  document.querySelector('.cardsWrapper').appendChild(divEl);
};







export { createCard };