background = "linear-gradient(90deg, #C779D0, #4BC0C8,#FEAC5E)";
var i = 0;
var timer = setInterval(function(){
	$('#gradient').css({
		background : background
	});
	i++;
	if(i % 3 == 0){
		background = "linear-gradient(90deg,#4BC0C8,#FEAC5E,#C779D0)";
	}else if(i % 3 == 1){
		background = "linear-gradient(90deg,#FEAC5E, #C779D0, #4BC0C8);";
	}else{
		background = "linear-gradient(90deg, #C779D0, #4BC0C8,#FEAC5E)";
	}
},1000)