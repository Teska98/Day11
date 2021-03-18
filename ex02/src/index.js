// Create a temps array here
 var monday = [31, 32, 19, 37];
 var tuesday = [29, 27, 55, 36];
 var wednesday = [17, 27, 42, 46];
 var thursday = [29, 52, 21, 64];
 var friday = [91, 27, 31, 61];
// End of temps array

function myArrayFunction(arr) {
 var newTemps = [...arr];
 var avergeDayTemp = [];
  // Only change code below this line
 var sumPon;
 var prosPon;
 var sumUto;
 var prosUto;
 var sumSri;
 var prosSri;
 var sumCet;
 var prosCet;
 var sumPet;
 var prosPet;
 for (var i = 0; i < newTemps.lenght; i++) {
      sumPon += newTemps;
      prosPon = sumPon/4;
    }
 for (var j = 0; j < newTemps.lenght; j++) {
      sumUto += newTemps;
      prosUto = sumUto/4;
    }
 for (var m = 0; m < newTemps.lenght; m++) {
      sumSri += newTemps;
      prosSri = sumSri/4;
    }
 for (var n = 0; n < newTemps.lenght; n++) {
      sumCet += newTemps;
      prosCet = sumCet/4;
    }
 for (var p = 0; p < newTemps.lenght; p++) {
      sumPet += newTemps;
      prosPet = sumPet/4;
    }
  avergeDayTemp[0] = prosPon;
  avergeDayTemp[1] = prosUto;
  avergeDayTemp[2] = prosSri;
  avergeDayTemp[3] = prosCet;
  avergeDayTemp[4] = prosPet;
  // Only change code above this line
  return avergeDayTemp;
}

console.log(myArrayFunction(arr));
module.exports = myArrayFunction;
