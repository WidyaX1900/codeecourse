const trigger = document.getElementById("trigger");
const dropdown = document.getElementById("dropdown");
const ic = document.getElementsByClassName("fa-solid")[0];

trigger.addEventListener("click", () => {
  dropdown.classList.toggle("slide");

  let isClose = ic.classList.contains("fa-xmark");
  if (!isClose) ic.classList.replace("fa-bars", "fa-xmark");
  else ic.classList.replace("fa-xmark", "fa-bars");
});
