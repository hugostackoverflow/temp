function onClick(opt) {

    optIndex = ["student", "staff"];
    var optValue = { student: "https://www.google.pt", staff: "https://www.continente.pt" };

    window.location.replace(optValue.optIndex[opt]);

}