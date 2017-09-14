$(document).ready(function() {
//Create variables to hold wins, losses, total score, random number
	var wins = 0;
    var losses = 0;
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
			$(this).attr(diamondGem);
		diamondGem = parseInt(diamondGem);
		score += diamondGem;
		};
	var orangeGem = Math.floor(Math.random() * 12) + 1; {
		//console.log(orangeGem);
		};
	var blueGem = Math.floor(Math.random() * 12) + 1; {
		//console.log(blueGem);
		};
	var yellowGem = Math.floor(Math.random() * 12) + 1; {
		//console.log(yellowGem);
		};

//When crystal is clicked the assigned value of that crystal goes to total score      
		//$("#diamondGem").on("click", function() {
      		//alert("Hi!");
      		//$score += diamondGem;("#score").text(diamondGem);
      		//
      	//});

      	$("#orangeGem").on("click", function() {
      		alert("Hi22");
      	});

      	$("#blueGem").on("click", function() {
      		alert("Hi333");
      	});

      	$("#yellowGem").on("click", function() {
      		alert("Hi4444");
      	});






if (score === random) {
      alert("You win!");
    }

    else if (score >= random) {
      alert("You lose!!");
    }

      //headsCount++;
      //$("#heads-chosen").html(headsCount);
      //$("#guess").html("<b>Heads</b>");
      //flipThatCoin(0);

});


       