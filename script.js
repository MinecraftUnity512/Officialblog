

function search() {

  var input = document.getElementById("pencarian").value.toLowerCase();

  var elemen = document.getElementsByClassName("hasil");

  for (var i = 0; i < elemen.length; i++) {
    var teks = elemen[i].textContent.toLowerCase();

    if (teks.indexOf(input) !== -1) {
      elemen[i].style.display = "block";
    } else {
      elemen[i].style.display = "none";
    }
  }
}

document.getElementById("pencarian").addEventListener("input", cariKata);