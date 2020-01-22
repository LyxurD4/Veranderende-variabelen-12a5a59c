function berekening() {
    const pi = 3.14;
    var diameterString = document.getElementById("diameter").value;
    var diameter = parseFloat(diameterString);
    console.log(diameter);
    var output = diameter * pi;
    console.log(output);
    document.getElementById("target").innerHTML = output; 
}