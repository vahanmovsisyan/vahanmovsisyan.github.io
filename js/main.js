let input = document.getElementById("inputmess");
let button = document.getElementById("btn");
let dd = document.getElementById("dd");
let vv = document.getElementById("vv");
dd.style.display = "none";
let jam = JSON.parse(localStorage.getItem("timer")) || [];
button.addEventListener("click", function () {
  if (input.value == "") {
    alert("namak gri");
    return;
  }

  let obj = {
    text: input.value,
    time: Date.now(),
  };

  jam.push(obj);

  localStorage.setItem("timer", JSON.stringify(jam));
  tpel();
});

function tpel() {
  dd.innerHTML = "";
  jam.forEach((element) => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div2.classList.add("div2");
    div1.classList.add("div1");
    div1.innerHTML = element.text;
    dd.style.display = "block";

    dd.append(div1);
    dd.append(div2);

    let jamanak = Math.round((Date.now() - element.time) / 1000);
    let hour = Math.trunc(jamanak / 3600);
    let minute = Math.trunc((jamanak % 3600) / 60);
    let seconds = Math.trunc((jamanak % 3600) % 60);

    div2.innerHTML = ` ${hour ? hour + "hours" : ""}  ${
      minute ? minute + "minutes." : ""
    } ${seconds ? seconds + "seconds." : "Just Now"}`;
  });
}
tpel();
