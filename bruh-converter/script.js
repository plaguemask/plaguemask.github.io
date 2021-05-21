function enterKeyPressed(event) {
   if (event.keyCode == 13) {
      convert()
      return true;
   }
}

function convert() {
    var input = document.getElementById('input').value;
    var scaleelement = document.getElementById('scale');
    var scale = scaleelement.options[scaleelement.selectedIndex].value;
    var degrees = "°"

    var bruh;
    if (scale == "C") {
        bruh = (Number(input) * 30 / 11).toFixed(2);
    } else if (scale == "F") {
        bruh = ((Number(input) - 32) * 50 / 33).toFixed(2);
    } else if (scale == "K") {
        bruh = ((Number(input) - 273.15) * 30 / 11).toFixed(2);
        degrees = "";
    } else if (scale == "Ra") {
        bruh = ((Number(input) - 491.67) * 50 / 33).toFixed(2);
    } else if (scale == "Rø") {
        bruh = ((Number(input) - 7.5) * 400 / 77).toFixed(2);
    } else if (scale == "N") {
        bruh = (Number(input) * 100 / 33).toFixed(2);
    } else if (scale == "D") {
        bruh = ((100 - Number(input) * 2 / 3) * 30 / 11).toFixed(2);
    } else if (scale == "Ré") {
        bruh = (Number(input) * 75 / 22).toFixed(2);
    }

    document.getElementById('conversiontext').innerHTML = input + degrees + scale + " → " + bruh + "°bruh";
}
