let length = ["Centimeter", "Meter", "Kilometer", "Mile", "Feet", "Inch"];
let temperature = ["Celcius", "Fahrenheit", "Kelvin"];
let volume = ["Liter", "Mililiter", "Gallon"];

let dropdown1, dropdown2;
let flag = "";
let inflag;
let a1 = 1, a2 = 1;
let first, end;
let unit = 0;

let unitT = [{
    "Celcius": (val) => { return val },
    "Fahrenheit": (val) => { return (val * 1.8) + 32 },
    "Kelvin": (val) => { return val + 273.15 }
},
{
    "Celcius": (val) => { return (val - 32) / 1.8 },
    "Fahrenheit": (val) => { return val },
    "Kelvin": (val) => { return ((val - 32) / 1.8) + 273.15 }
},
{
    "Celcius": (val) => { return val - 273.15 },
    "Fahrenheit": (val) => { return ((val - 273.15) * 1.8) + 32 },
    "Kelvin": (val) => { return val }
}]

let unitV = [{
    "Liter": (val) => { return val },
    "Mililiter": (val) => { return val * 1000 },
    "Gallons": (val) => { return val / 3.785 }
},
{
    "Liter": (val) => { return val / 1000 },
    "Mililiter": (val) => { return val },
    "Gallons": (val) => { return val / 3785 }
},
{
    "Liter": (val) => { return val * 3.785 },
    "Mililiter": (val) => { return val * 3785 },
    "Gallons": (val) => { return val }
}]

let unitL = [{
    "Centimeter": (val) => { return val },
    "Meter": (val) => { return val / 100 },
    "Kilometer": (val) => { return val / 10000 },
    "Mile": (val) => { return val * 0.0000062137 },
    "Feet": (val) => { return val * 0.032808 },
    "Inch": (val) => { return val / 2.54 }
},
{
    "Centimeter": (val) => { return val / 0.01 },
    "Meter": (val) => { return val },
    "Kilometer": (val) => { return val / 1000 },
    "Mile": (val) => { return val * 0.00062137 },
    "Feet": (val) => { return val * 3.2808 },
    "Inch": (val) => { return val * 39.370 }
},
{
    "Centimeter": (val) => { return val * 100000 },
    "Meter": (val) => { return val * 1000 },
    "Kilometer": (val) => { return val },
    "Mile": (val) => { return val * 0.62137 },
    "Feet": (val) => { return val * 3280.8 },
    "Inch": (val) => { return val * 39370 }
}, {
    "Centimeter": (val) => { return val / 0.0000062137 },
    "Meter": (val) => { return val / 0.00062137 },
    "Kilometer": (val) => { return val / 0.62137 },
    "Mile": (val) => { return val },
    "Feet": (val) => { return val * 5280 },
    "Inch": (val) => { return val * 63360 }
}, {
    "Centimeter": (val) => { return val / 0.032808 },
    "Meter": (val) => { return val / 3.2808 },
    "Kilometer": (val) => { return val / 3280.8 },
    "Mile": (val) => { return val * 0.00018939 },
    "Feet": (val) => { return val },
    "Inch": (val) => { return val * 12 }
}, {
    "Centimeter": (val) => { return val / 0.39370 },
    "Meter": (val) => { return val / 39.370 },
    "Kilometer": (val) => { return val / 39370 },
    "Mile": (val) => { return val * 0.000015783 },
    "Feet": (val) => { return val * 0.083333 },
    "Inch": (val) => { return val }
}
]

$(document).ready(() => {
    len = () => {
        flag = "L";
        $('#length').css({
            'border-color': '#0EC098',
            'background': 'url("../assert/length1.jpg") no-repeat',
            'background-position': 'center',
            'background-color': '#EDFDF9',
            'color': '#0EC098'
        });
        dropdown1 = "", dropdown2 = "";
        for (let i = 0; i < length.length; i++) {
            dropdown1 += "<option id='optn1'>" + length[i] + "</option>"
            dropdown2 += "<option id='optn2' selected>" + length[i] + "</option>"
        }
        $('.fromOpt1').empty().html(dropdown1);
        $('.fromOpt2').empty().html(dropdown2);
    }
    len();

    $('#length').click(() => {
        this.len();
        $('#temperature').css({
            'border-color': '#ffffff',
            'background': 'url("../assert/temperature2.jpg") no-repeat',
            
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });
        $('#volume').css({
            'border-color': '#ffffff',
            'background': 'url("../assert/volume2.jpg") no-repeat',
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });
        initialVal();
    })

    $('#temperature').click(() => {
        flag = "T";
        $('#temperature').css({
            'border-color': '#FD5160',
            'background': 'url("../assert/temperature1.jpg") no-repeat',
            
            'background-position': 'center',
            'background-color': '#FFEEF0',
            'color': '#FD5160'
        });
        $('#length').css({
            'border-color': '#ffffff',
            'background': 'url("../assert/length2.jpg") no-repeat',
            
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });
        $('#volume').css({
            'border-color': '#ffffff',
            'background': 'url("../assert/volume2.jpg") no-repeat',
            
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });

        dropdown1 = "", dropdown2 = "";
        for (let i = 0; i < temperature.length; i++) {
            dropdown1 += "<option id='optn1'>" + temperature[i] + "</option>"
            dropdown2 += "<option id='optn2'selected>" + temperature[i] + "</option>"
        }
        $('.fromOpt1').empty().html(dropdown1);
        $('.fromOpt2').empty().html(dropdown2);
        initialVal();
    })

    $('#volume').click(() => {
        flag = "V";
        $('#volume').css({
            'border-color': '#7224FF',
            'background': 'url("../assert/volume1.jpg") no-repeat',
            
            'background-position': 'center',
            'background-color': '#E8DDFF',
            'color': '#7224FF'
        });
        $('#length').css({
            'border-color': '#ffffff',
            
            'background': 'url("../assert/length2.jpg") no-repeat',
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });
        $('#temperature').css({
            'border-color': '#ffffff',
           'background': 'url("../assert/temperature2.jpg") no-repeat',
            'background-position': 'center',
            'background-color': '#ffffff',
            'color': 'black'
        });
        dropdown1 = "", dropdown2 = "";
        for (let i = 0; i < volume.length; i++) {
            dropdown1 += "<option id='optn1'>" + volume[i] + "</option>"
            dropdown2 += "<option id='optn2' selected>" + volume[i] + "</option>"
        }
        $('.fromOpt1').empty().html(dropdown1);
        $('.fromOpt2').empty().html(dropdown2);
        initialVal();
    })

    initialVal = () => {
        a1 = parseInt($("#in1").val());
        first = $('.fromOpt1').val();
        end = $('.fromOpt2').val();
        inflag = 1;
        checkInput();
    }

    $("#in1").on("input", function () {
        a1 = parseInt($("#in1").val());
        $("#in2").val(1);
        first = $('.fromOpt1').val();
        end = $('.fromOpt2').val();
        inflag = 1;
        console.log("a1 " + a1)
        checkInput();
    });

    $("#in2").on("input", function () {
        a2 = parseInt($("#in2").val());
        $("#in1").val(1);
        first = $('.fromOpt2').val();
        end = $('.fromOpt1').val();
        console.log("a2 " + a2)
        inflag = 2;
        checkInput();
    });

    $(".fromOpt1").change(function () {
        first = this.value;
        end = $('.fromOpt2').val();
        $("#in1").val(1);
        $("#in2").val(1);
        a1 = parseInt($("#in1").val());
        inflag = 1;
        checkInput();
    });

    $(".fromOpt2").change(function () {
        first = this.value;
        end = $('.fromOpt1').val();
        $("#in2").val(1);
        $("#in1").val(1);
        a2 = parseInt($("#in2").val());
        inflag = 2;
        checkInput();
    });

    checkInput = () => {
        let val;
        let q;
        if (first == undefined || end == undefined) {
            first = $('.fromOpt1').val();
            end = $('.fromOpt2').val();
        }

        if (inflag == 1) {
            val = a1;
        } else if (inflag == 2) {
            val = a2;
        }

        switch (flag) {
            case "L":
                if (first == "Centimeter") {
                    unit = 0;
                } else if (first == "Meter") {
                    unit = 1;
                } else if (first == "Kilometer") {
                    unit = 2;
                } else if (first == "Mile") {
                    unit = 3;
                } else if (first == "Feet") {
                    unit = 4;
                } else {
                    unit = 5;
                }

                if (end == "Centimeter") {
                    q = unitL[unit].Centimeter(val);
                } else if (end == "Meter") {
                    q = unitL[unit].Meter(val);
                } else if (end == "Kilometer") {
                    q = unitL[unit].Kilometer(val);
                } else if (end == "Mile") {
                    q = unitL[unit].Mile(val);
                } else if (end == "Feet") {
                    q = unitL[unit].Feet(val);
                } else {
                    q = unitL[unit].Inch(val);
                }

                if (inflag == 2) {
                    $("#in1").val(q);
                } else if (inflag == 1) {
                    $("#in2").val(q);
                }
                break;

            case "T":
                if (first == "Celcius") {
                    unit = 0;
                } else if (first == "Fahrenheit") {
                    unit = 1;
                } else {
                    unit = 2;
                }
                if (end == "Celcius") {
                    q = unitT[unit].Celcius(val);
                } else if (end == "Fahrenheit") {
                    q = unitT[unit].Fahrenheit(val);
                } else {
                    q = unitT[unit].Kelvin(val);
                }
                if (inflag == 2) {
                    $("#in1").val(q);
                } else if (inflag == 1) {
                    $("#in2").val(q);
                }
                break;

            case "V":
                if (first == "Liter") {
                    unit = 0;
                } else if (first == "Mililiter") {
                    unit = 1;
                } else {
                    unit = 2;
                }
                if (end == "Liter") {
                    q = unitV[unit].Liter(val);
                } else if (end == "Mililiter") {
                    q = unitV[unit].Mililiter(val);
                } else {
                    q = unitV[unit].Gallons(val);
                }
                if (inflag == 2) {
                    $("#in1").val(q);
                } else if (inflag == 1) {
                    $("#in2").val(q);
                }
                break;
        }
        inflag = 3;
    }
})