const services = document.querySelectorAll(".service");
const cart=[];
services.forEach((service) => {
  service.addEventListener("click", () => {
    const name = service.querySelector("h2").innerText; // gets title inside the box
    cart.push(name)
    alert(`You selected: ${name} \n cart : ${cart}`);
  });
});