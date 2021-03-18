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
      sumPon += newTemps[i];
      
 	for (var j = 0; j < newTemps[i].lenght; j++) {
          if (i >= 1) break;
	  sumUto += newTemps[i][j];

    	     for (var m = 0; m < newTemps[i][j].lenght; m++) {
                if (j >= 1) break;
      		sumSri += newTemps[i][j][m];

 		  for (var n = 0; n < newTemps[i][j][m].lenght; n++) {
		    if (m >= 1) break;
      		    sumCet += newTemps[i][j][m][n];

                       for (var p = 0; p < newTemps[i][j][m][n].lenght; p++) {
			 if (n >= 1) break;
                         sumPet += newTemps[i][j][m][n][p];
			}
		}
	}
  }
} 
  prosPon = sumPon/4;
  prosUto = sumUto/4;
  prosSri = sumSri/4;
  prosCet = sumCet/4;
  prosPet = sumPet/4;
  avergeDayTemp.push(prosPon);
  avergeDayTemp.push(prosUto);
  avergeDayTemp.push(prosSri);
  avergeDayTemp.push(prosCet);
  avergeDayTemp.push(prosPet);
  // Only change code above this line
  return avergeDayTemp;
}

console.log(myArrayFunction(arr));
module.export = myArrayFunction;
