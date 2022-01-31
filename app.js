//Agarramos todos los campos que tengan la clase panel y le hacemos un for each a cada div le damos una escucha
//al hacerle click le pasamos una funcion,
const img = document.querySelectorAll(".panel").forEach(
  bg => bg.addEventListener("click",(e) => expandingCards(e)));

  const expandingCards = (e) => {
    const btn = e.target;
    btn.classList.toggle("active");
    // img.classList.add("active");
    // img.classList.remove("active");
  }