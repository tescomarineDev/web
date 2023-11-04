const daytona = document.getElementById("daytona");
const evo25 = document.getElementById("evo25");
const giubileo = document.getElementById("giubileo");
const r32 = document.getElementById("r32");
const renegade = document.getElementById("renegade");
const s44 = document.getElementById("s44");
const shark19 = document.getElementById("shark19");
const soverato545 = document.getElementById("soverato545");

daytona.addEventListener("click", function () {
  openPage("daytona");
});

function openPage(boat) {
  console.log(boat);
  if (boat == "daytona") {
    window.open("../../pages/boats/daytona.html", "_self");
  }
}
