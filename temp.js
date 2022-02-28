function convert_Temp(){
	let val = document.getElementById("input-value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", convert_Temp);
    input.addEventListener("input", convert_Temp);
    output.addEventListener("output", convert_Temp);

    let input_value = input.value;
    let output_value = output.value;

    if(input_value === "celcius" && output_value === "fahrenheit"){
     result.value = Number((val.value) * 9/5) + 32;
    }
	else if(input_value === "celcius" && output_value === "kelvin"){
     result.value = Number(val.value) + 273.15;
}
else if(input_value === "celcius" && output_value === "celcius"){
     result.value = val.value;
}
// FAHRENHEIT
 if(input_value === "fahrenheit" && output_value === "celcius"){
     result.value = Number((val.value - 32)*5)/9;
}
else if(input_value === "fahrenheit" && output_value === "kelvin"){
     result.value = Number((val.value - 32) * 5/9) + 273.15;
}
else if(input_value === "fahrenheit" && output_value === "fahrenheit"){
     result.value = val.value;
}

//KELVIN
if(input_value === "kelvin" && output_value === "celcius"){
     result.value = Number(val.value) - 273.15;
}
else if(input_value === "kelvin" && output_value === "fahrenheit"){
     result.value = Number((val.value - 273.15) * 9/5) + 32;
}
else if(input_value === "kelvin" && output_value === "kelvin"){
     result.value = val.value;
}
}