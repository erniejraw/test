
	//we want to find out the value of addition between factors of 10
	function runAlgorithm(x,y){
		var z = (10*x + 20*y)/50 * 200000;
		return z;
	}
	
	function addResultToH1(result){
		$('#result-div').append("<br>" + result);
	}
