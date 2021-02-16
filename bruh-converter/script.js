function convert() {
    var input = document.getElementById('input').value;
    var scaleelement = document.getElementById('scale')
    var scale = scaleelement.options[scaleelement.selectedIndex].text;

    var bruh;
    if (scale == "Celsius") {
        bruh = (Number(input) * 30 / 11).toFixed(2);
    } else {
        bruh = ((Number(input) - 32) * 50 / 33).toFixed(2);
    }

    document.getElementById('conversiontext').innerHTML = input + "°" + scale[0] + " → " + bruh + "°bruh";
}
