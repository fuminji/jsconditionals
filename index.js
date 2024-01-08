const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch(choice) {
    case "sunny":
        para.textContent =
            "Its Sunny";
        break;
    case "rainy":
        para.textContent =
            "Its Rainy";
        break;
    case "snowing":
        para.textContent =
            "Its Snowy";
        break;
    case "overcast":
        para.textContent = 
            "Its Overcast";
        break;
    default:
        para.textContent = "";
    }
}

