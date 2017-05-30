var myCar = {
    model:  "Jaguar",
    color: "red",
    year: "2006",
    engine: "v8",
    seeCar: function() {
        console.log("==seeCar==");
        console.log(myCar.color)
        console.log("myCar.year", "\n What year is my car?", myCar.year)
    }
};
myCar.seeCar();
