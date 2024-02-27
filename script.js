const trigger = document.getElementById("trigger");
const dropdown = document.getElementById("dropdown");
const ic = document.getElementsByClassName("fa-solid")[0];

trigger.addEventListener("click", () => {
  dropdown.classList.toggle("slide");

  let isClose = ic.classList.contains("fa-xmark");
  if (!isClose) ic.classList.replace("fa-bars", "fa-xmark");
  else ic.classList.replace("fa-xmark", "fa-bars");
});

counterAnimation("members", 1000, 0.1);
counterAnimation("materials", 100, 10);
counterAnimation("mentors", 80, 10);
function counterAnimation(id, maxnumber, duration) {
  let number = 0;
  let maxNumber = maxnumber;
  const numberEl = document.getElementById(id);

  let interval = setInterval(() => {
    if (number < maxNumber) {
      number++;
      if (number >= 1000) {
        const nfObject = new Intl.NumberFormat("ID");
        let result = nfObject.format(number);
        if (number >= 1000000) {
          let strResult = result.toString();
          strResult = strResult.split(".");
          numberEl.innerText = `${strResult[0]}M`;
        } else {
          numberEl.innerText = result;
        }
      } else {
        numberEl.innerText = number;
      }
    } else {
      clearInterval(interval);
    }
  }, duration);
}
