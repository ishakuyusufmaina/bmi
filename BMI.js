

    function compute(weight, height) {

        return weight/(height * height);
    }

   function categorize(bmi) {
        let cat = null;
        if (bmi <  15)
            cat = "very serverely underweight"; else
        if ((bmi == 15 | bmi < 16)  & ! (bmi < 15) )
            cat = "servere underweight"; else
        if ((bmi == 16 | bmi < 18.5) & ! (bmi < 16))
            cat = "underweight"; else
        if ((bmi == 18.5 | bmi < 25) & ! (bmi < 18.5) )
            cat = "normal (healthy weight)"; else
        if ((bmi == 25 | bmi < 30) & ! (bmi < 25) )
            cat = "overweight"; else
        if ((bmi == 30 | bmi < 35) & ! (bmi < 30) )
            cat = "obese class I (moderately obese)"; else
        if ((bmi == 35 | bmi < 40) & ! (bmi < 35) )
            cat = "obese class II (severely obese"; else
        if ( (bmi == 40 | bmi > 40) )
            cat = "obese class III (very severely obese)";
        return cat;
    }
	

function categorizeFromControls(){
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let bmi = compute(weight, height);
	return categorize(bmi);
}

function computeFromControls(){
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	return compute(weight, height);
	
}