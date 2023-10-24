// Formulation 

function calculate() {
    var shape = document.getElementById("shape").value;
    var result = document.getElementById("result");

    if (shape === "circle") {
        var diameter = parseInt(document.getElementById("diameter").value);
        var radius = diameter / 2;
        var circumferenceDiameter = Math.PI * diameter;
        var circumferenceRadius = 2 * Math.PI * radius;

        result.innerHTML = "Circumference (Diameter): " + circumferenceDiameter + "<br>";
        result.innerHTML += "Circumference (Radius): " + circumferenceRadius;
    } else if (shape === "rectangle") {
        var width = parseInt(document.getElementById("width").value);
        var length = parseInt(document.getElementById("length").value);
        var area = width * length;
        var perimeter = 2 * (length + width);

        result.innerHTML = "Area: " + area + "<br>";
        result.innerHTML += "Perimeter: " + perimeter;
    } else if (shape === "square") {
        var side = parseInt(document.getElementById("side").value);
        var area = side * side;
        var perimeter = 4 * side;

        result.innerHTML = "Area: " + area + "<br>";
        result.innerHTML += "Perimeter: " + perimeter;
    } else {
        result.innerHTML = "Please select a shape.";
    }
    document.getElementById('value').innerHTML = `<h3>${result.innerHTML}</h3>`;
    document.getElementById('mdl').style.display = 'block';
}
document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('mdl').style.display = 'none';

});

// Inputs & Functions


document.getElementById("circInput").style.display = "none";
        document.getElementById("rectInput").style.display = "none";
        document.getElementById("squaInput").style.display = "none";

        document.getElementById("shape").addEventListener("change", function() {
            var selectedShape = this.value;

            document.getElementById("circInput").style.display = "none";
            document.getElementById("rectInput").style.display = "none";
            document.getElementById("squaInput").style.display = "none";

            if (selectedShape === "circle") {
                document.getElementById("circInput").style.display = "block";
            } else if (selectedShape === "rectangle") {
                document.getElementById("rectInput").style.display = "block";
            } else if (selectedShape === "square") {
                document.getElementById("squaInput").style.display = "block";
            }
        });