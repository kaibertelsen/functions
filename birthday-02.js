loadyear(startyear,endyear);
loadmonth();

document.getElementById("monthselector").addEventListener("change", (e) => {
  setdaysoptions();
});


function setdaysoptions(){
var inputmonth=Number(document.getElementById("monthselector").value);
var inputyear=Number(document.getElementById("yearselector").value);

//finne hvor mange dager det er i denne mnd
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
loadday(daysInMonth(inputyear, inputmonth));
}

// functions
function loadday(days){
var dayarray = [];
for (var i = 0;i<days;i++){
		var option = [];
		//tekst
		option.push(i+1);
		//tekst
		option.push(i+1);
		//opiton
		dayarray.push(option);
		}
	
		loadselector(document.getElementById("dayscelector"),dayarray);
}






function loadmonth(){
var montharray = [
									[1,"Januar"],
                  [2,"Februar"],
                  [3,"Mars"],
                  [4,"April"],
                  [5,"Mai"],
                  [6,"Juni"],
                  [7,"Juli"],
                  [8,"August"],
                  [9,"September"],
                  [10,"Oktober"],
                  [11,"November"],
                  [12,"Desember"]
									];
loadselector(document.getElementById("monthselector"),montharray);

}
function loadyear(syear,eyear){
var diff = eyear-syear;
var yeararray = [];
for (var i = 0;i<diff;i++){
var option = [];
//tekst
option.push(eyear-i);
//tekst
option.push(eyear-i);
//opiton
yeararray.push(option);
}
loadselector(document.getElementById("yearselector"),yeararray);
}





function loadselector(selector,options){
	selector.empty();
	for(var i = 0; i < options.length; i++) {
    var value = options[i][0];
    var text = options[i][1];
    var el = document.createElement("option");
    el.textContent = text;
    el.value = value;
    selector.appendChild(el);
		}
 }
