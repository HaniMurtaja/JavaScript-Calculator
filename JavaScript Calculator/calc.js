
// Stores previous value 
	let prevVal = "";
 
// Stores new value 
	let newVal = "";
 
// Stores the result value 
	let resultVal = "";
 
// Store previous math operator clicked
	let mathOperator = "";
 
// Store the decimal has been clicked
// [Only allow 1 per new value entered]
	let decimalClicked = false;
 
// store values in memory
	let valMemStored = "";

// when a number  clicked
	function numButPress(num){

    	// Check if a number has been already clicked
    		if(resultVal){
        // Start a new new number
        		newVal = num;
        // Reset to create a new result
        		resultVal = "";
    } else {

        // avoid using multiple decimals
        	if(num === '.'){

            if(decimalClicked != true){

                newVal += num;
                decimalClicked = true;
            }

        } else {

            newVal += num;
        }
    }
        
    	// Update value in entry input tag
    		document.getElementById("entry").value = newVal;
  }

	function mathButPress(operator){
    	// Check if there was a previous calculation by seeing if resultVal has a value
    	// If result doesn't have a value then store the current val as a previous for the next 
    	
    	if(!resultVal){

        prevVal = newVal;
    } else {
 
        // If there is a current result store that as the previous value entered
       
        	prevVal = resultVal;
    }
    
    // Restart creation of new number
    		newVal = "";
    // Reset decimalClicked
    		decimalClicked = false;
    // Store operator clicked
    		mathOperator = operator;
 
    // Prepare entry for receiving new numbers
   			 resultVal = "";
		document.getElementById("entry").value = "";
	}

	function equalButPress(){

    // Reset decimalClicked
    	decimalClicked = false;
 
    // Convert string numbers to floats
    	prevVal = parseFloat(prevVal);
    	newVal = parseFloat(newVal);
 
 
   	 switch(mathOperator){

        case "+":

            resultVal = prevVal + newVal;

          	break;

        case "-":

            resultVal = prevVal - newVal;

           	break;

        case "*":

            resultVal = prevVal * newVal;

           	break;

       	case "/":

            resultVal = prevVal / newVal;

          	 break;
        // If equals is hit without an operator leave everything as is
      
        default:

            resultVal = newVal;
    }
 
    	// Store the current value as the previous 
   			 prevVal = resultVal;
 
    	// Put the calculation result in the entry window
    		document.getElementById("entry").value = resultVal;
    }
 
	
		function clearButPress(){

    			prevVal = "";
    			newVal = "";
    			resultVal = "";
    			mathOperator = "";
    			decimalClicked = false;
    	document.getElementById("entry").value = "0";
    }

    // Store the current value in the entry window
		function copyButPress(){
    		valMemStored = document.getElementById("entry").value;
	}
 
	// If a value has been stored paste it in the entry window and assign it as the newVal
	
		function pasteButPress(){

    		if(valMemStored){

        	document.getElementById("entry").value = valMemStored;

        		newVal = valMemStored;
    }
     
}
