function provjera() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let z = parseInt(document.getElementById("z").value);

    let umnozak = x * y * z;
    let zbroj = x + y + z;

    if (umnozak > zbroj) {
        document.getElementById("rez").innerHTML = "Umnožak brojeva " + x + ", " + y + " i " + z + " veći je od zbroja brojeva.";
    } else if (zbroj > umnozak) {
        document.getElementById("rez").innerHTML = "Zbroj brojeva " + x + ", " + y + " i " + z + " je veći od njihovog umnoška.";
    } else {
        document.getElementById("rez").innerHTML = "Zbroj brojeva " + x + ", " + y + " i " + z + " je jednak njihovom umnošku.";
    }
}