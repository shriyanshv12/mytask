function showDiv(divNumber) {
    const divs = document.querySelectorAll("div[id^='div']");
    divs.forEach((div) => {
        div.classList.add("hidden");
        div.parentElement.style.backgroundColor = '#fff';
        div.parentElement.style.border = "0.904px solid #C8C8C8"
    });
    const selectedDiv = document.getElementById(`div${divNumber}`);
    selectedDiv.classList.remove("hidden");
    selectedDiv.parentElement.style.backgroundColor = '#F4FBF9';
    selectedDiv.parentElement.style.border = '0.646px solid #007F61';
}

var radioButtons = document.getElementsByName("radiogroup");
for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
        var radiogroup = this.value;
        document.getElementById("radiogroup").innerHTML = radiogroup;
    });
}

function changeValue() {
    alert("Order placed Successfully");
    document.getElementById("radiogroup").value = "reset";
    const divs = document.querySelectorAll("div[id^='div']");
    divs.forEach((div) => {
        div.classList.add("hidden");
        div.parentElement.style.backgroundColor = '#fff';
        div.parentElement.style.border = "0.904px solid #C8C8C8"
        document.getElementById("radiogroup").innerHTML = "";
    });
}
