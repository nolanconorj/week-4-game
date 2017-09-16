$(document).ready(function() {
//Create variables to hold wins, losses, total score, random number
var wins = 1;
var losses = 1;
var score = 0;





//Generate Random number and store it in the #random-number Div
var random = Math.floor(Math.random() * 102) + 19; {
		//console.log(random);

		// ... and then dump the random number into our random-number div.
		$("#random-number").html("Random Number: " + random);

	};
//Generate Random number between 1-12 for each crystal/gem and store it in a variable.
var diamondGem = Math.floor(Math.random() * 12) + 1; {
	console.log(diamondGem);
	
	$("#diamondGem").on("click", function() {
		$("#score").text(diamondGem);
		score += diamondGem;

    $("#total-score").html("Your Total Score Is: " + score);

    if (score === random) {

      alert("You win!");
      $("#wins").html("Wins: " + wins++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (score >= random) {

      // Then they are alerted with a loss.
      alert("You lose!!");
      $("#losses").html("Losses: " + losses++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

	})
	

};


var orangeGem = Math.floor(Math.random() * 12) + 1; {
		console.log(orangeGem);
	
	$("#orangeGem").on("click", function() {
		$("#score").text(orangeGem);
		score += orangeGem;

    $("#total-score").html("Your Total Score Is: " + score);

    if (score === random) {

      alert("You win!");
      $("#wins").html("Wins: " + wins++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (score >= random) {

      // Then they are alerted with a loss.
      alert("You lose!!");
      $("#losses").html("Losses: " + losses++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

	});
	};
	var blueGem = Math.floor(Math.random() * 12) + 1; {
		console.log(blueGem);
	
	$("#blueGem").on("click", function() {
		$("#score").text(blueGem);
		score += blueGem;

    $("#total-score").html("Your Total Score Is: " + score);

    if (score === random) {

      alert("You win!");
      $("#wins").html("Wins: " + wins++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (score >= random) {

      // Then they are alerted with a loss.
      alert("You lose!!");
      $("#losses").html("Losses: " + losses++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

	});

	};
	var yellowGem = Math.floor(Math.random() * 12) + 1; {
		console.log(yellowGem);
	
	$("#yellowGem").on("click", function() {
		$("#score").text(yellowGem);
		score += yellowGem;

    $("#total-score").html("Your Total Score Is: " + score);

    if (score === random) {

      alert("You win!");
      $("#wins").html("Wins: " + wins++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (score >= random) {

      // Then they are alerted with a loss.
      alert("You lose!!");
      $("#losses").html("Losses: " + losses++);
      $("#random-number").html("Random Number: " + score*0);
      $("#total-score").html("Your Total Score Is: " + score*0);
    }

	});
	};

//When crystal is clicked the assigned value of that crystal goes to total score      
		//$("#diamondGem").on("click", function() {
      		//alert("Hi!");
      		//$score += diamondGem;("#score").text(diamondGem);
      		//
      	//});

      	//$("#orangeGem").on("click", function() {
      	//	alert("Hi22");
      	//});

      	//$("#blueGem").on("click", function() {
      //		alert("Hi333");
      	//});

      	//$("#yellowGem").on("click", function() {
      	//	alert("Hi4444");
      	//});






      //	if (score === random) {
      	//	alert("You win!");
      	//}

      	//else if (score >= random) {
      	//	alert("You lose!!");
      	//}

      //headsCount++;
      //$("#heads-chosen").html(headsCount);
      //$("#guess").html("<b>Heads</b>");
      //flipThatCoin(0);

  });
