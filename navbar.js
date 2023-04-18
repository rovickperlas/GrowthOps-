function toggleNavbar() {
  var navbarLinks = document.getElementById("navbar-links");
  if (navbarLinks.style.display === "block") {
    navbarLinks.style.display = "none";
    document.querySelector(".navbar").classList.remove("show");
  } else {
    navbarLinks.style.display = "block";
    document.querySelector(".navbar").classList.add("show");
  }
}

function convertDate() {
  const input = document.getElementById('date-input').value;
  const dateParts = input.split('/');
  const convertedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  alert(`Converted date: ${convertedDate}`);
}


function filterList() {
  const ageFilter = document.getElementById("age-filter").value;
  const list = document.getElementById("people-list");
  const items = list.getElementsByTagName("div");

  for (let i = 0; i < items.length; i++) {
    const age = parseInt(items[i].querySelector(".age").textContent);

    if (ageFilter === "20-and-below") {
      items[i].style.display = (age <= 20) ? "" : "none";
  
    } else if (ageFilter === "21-to-39") {
      items[i].style.display = (age >= 21 && age <= 39) ? "" : "none";
    } else if (ageFilter === "40-and-above") {
      items[i].style.display = (age >= 40) ? "" : "none";
    } else {
      items[i].style.display = "";
    }
  }


}

