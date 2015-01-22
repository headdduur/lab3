'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#submitBtn").click(updateProject);

	//var counter = 0;
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
		/*if (counter == 0) { 
			$('.jumbotron h1').text("Experience Chan! It's not a lot of questions.");
			counter++;
		}
		else if (counter == 1) {
			$('.jumbotron h1').text("Too many questions is the Chan disease.");
			counter++;			
		}
		else if (counter == 2) {
			$('.jumbotron h1').text("The best way is just to observe the noise of the world.");
			counter++;					
		}
		else if (counter == 3) {
			$('.jumbotron h1').text("The answer to your questions?");
			counter++;		
		}
		else if (counter == 4) {
			$('.jumbotron h1').text("Ask your own heart.");
			counter = 0;		
		}*/
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
  	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    console.log(projectTitle);
    var jumbotronHeader = $('.jumbotron h1');
    jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.fadeOut();
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   console.log("newText: " + newText);
   $(projectID + " .project-description").text(newText);
}