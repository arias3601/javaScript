function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array();

	   if (listA === null || listB === null){
	   		return null;
	   }

	   for (var i = 0; i < listA.length; i++){
			var nameA = listA[i];
			for (var j = 0; j < listB.length; j++){
				var nameB = listB[j];
				if (nameA === nameB){
					resultList.push(nameA);
					break;
				}
			}
	   }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();

        if (listA === null || listB === null){
            return null;
        }

        for (var i = 0; i < listA.length; i++){
        	var check = true;
            var nameA = listA[i];
            for (var j = 0; j < listB.length; j++){
                var nameB = listB[j];
                if (nameA === nameB){
                    resultList.push(nameA);
                    check = false;
                    break;
                }
            }
            if (check === true){
            	resultList.push(nameA);
			}
        }
        for (var i = 0; i < listB.length; i++){
        	var check = true;
        	var nameB = listB[i];
        	for (var j = 0; j < resultList.length; j++) {
        		var nameR = resultList[j];
        		if (nameB === nameR){
        			check = false;
        			break;
				}
			}
            if (check === true){
                resultList.push(nameB);
            }
		}
	   
	   return resultList;
	}




	this.relativeCompliment = function(listA, listB) {

	   var resultList = new Array();

        if (listA === null || listB === null){
            return null;
        }

        for (var i = 0; i < listA.length; i++){
            var check = true;
            var nameA = listA[i];
            for (var j = 0; j < listB.length; j++){
                var nameB = listB[j];
                if (nameA === nameB){
                    check = false;
                    break;
                }
            }
            if (check === true){
                resultList.push(nameA);
            }
        }
       
	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

	   var resultList = new Array();

        if (listA === null || listB === null){
            return null;
        }

        for (var i = 0; i < listA.length; i++){
            var check = true;
            var nameA = listA[i];
            for (var j = 0; j < listB.length; j++){
                var nameB = listB[j];
                if (nameA === nameB){
                    check = false;
                    break;
                }
            }
            if (check === true){
                resultList.push(nameA);
            }
        }
        for (var i = 0; i < listB.length; i++){
            var check = true;
            var nameB = listB[i];
            for (var j = 0; j < listA.length; j++) {
                var nameA = listA[j];
                if (nameB === nameA){
                    check = false;
                    break;
                }
            }
            if (check === true){
                resultList.push(nameB);
            }
        }

       
	   return resultList;
	}	
	

}
