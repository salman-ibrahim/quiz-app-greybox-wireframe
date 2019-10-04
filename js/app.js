$(document).ready(function(){

	//Variables to COntrol flow of whole Quiz
	var currentQuestion = '.question-container-';
	var questionNo = 1;
	var correct = 0;
	var incorrect = 0;
	var choice;

	//Start Button to be pressed before 
	//first question is shown on screen
	$(".js-start-quiz").click(".start-button",function(){
		$(".js-start-quiz").hide();
		$(".question-container").show();
		$(".status").show();
		$(".next-button").hide();
		$("#button").prop("disabled",true);
		$(".current-question").text(questionNo + " ");
		$(".correct").text(correct +" ");
		$(".incorrect").text(incorrect + " ");
		$(".question-container").hide();
		$(currentQuestion+questionNo).show();
	})

	//Make a choice but make it changeable untill
	//it is submitted by pressing button
	$(".choices").on("click",".js-choice",function(){
		choice = $(this).val();
		if (choice != "undefined")
		{
			$("#button").prop("disabled",false);		
		}
	})

	//Show the answer after submit button is pressed
	//and disable choices so it cannot be modified
	$(".submit-button").on("click",".js-submit", function(){
		$(".js-submit-button").hide();
		$(".js-choice").prop("disabled",true);
		$(".js-next-button").show();


		if(choice == "true"){
			questionNo++;
			correct++;
			$(".correct").text(correct +" ");
		}

		else{
			questionNo++;
			incorrect++;
			$(".incorrect").text(incorrect + " ");
		}
	})

	//Press Next Button to move to next question
	$(".js-next-button").on("click",".js-next", function(){
		$(currentQuestion+(questionNo-1)).hide();
		if (questionNo < 11){
			$(currentQuestion+questionNo).show();
			$(".js-submit-button").show();
			$(".current-question").text(questionNo + " ");
		}
		else{
			$(".progress").text("End of Quiz");	
		}
		$(".js-next-button").hide();
		$(".js-choice").prop("disabled",false);
		choice = "undefined";
		$(".js-submit").prop("disabled",true);	
	})

	//Show instructions to play
	$(".instructions").click(function(){
		//Code
	})

	//Start a new game
	$(".header").on("click",".new-game", function(){
		questionNo = 1;
		correct = 0;
		incorrect = 0;
		choice = "undefined";
		$(".js-start-quiz").show();
		$(".question-container").hide();
		$(".status").hide();
		$(".next-button").hide();
		$("#button").prop("disabled",true);
		$(".current-question").text(questionNo + " ");
		$(".correct").text(correct +" ");
		$(".incorrect").text(incorrect + " ");
		$(".js-submit-button").show();
		$(".js-choice").prop("disabled",false);
	})
	

});