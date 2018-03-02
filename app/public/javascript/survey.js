$(document).ready(function() {
	// array of questions
	let questions = [
		'I like cats.',
		'Batman & Robin is my favorite Batman movie.',
		'I like milk in my tea.',
		'I feel Jar Jar Binks is underappreciated.',
		'I am a night person.',
		'I often think "I am extremely lucky".',
		'I am very forgetful.',
		'Being nice to the waiter is overrated.',
		'Winter is the best season.',
		'Pixar wins too many Oscars.'
	];

	// array of choices
	let choices = [
		'1 (Strongly Disagree)',
		'2',
		'3',
		'4',
		'5 (Strongly Agree)'
	];

	// adding all of the questions to the html
	let questionDiv = $('.Questions');
	let j = 1;
	let i = 0

	for (i; i < questions.length; i++) {
		let eachQuestion = $('<div>');
		eachQuestion.addClass('question-div');
		let heading = $('<h4>').text('Question ' + j++);
		let questionText = $('<p>').text(questions[i]);
		let select = $('<select>');
		select.addClass('user-choices');

		// adding all of the choices onto the html
        for (let i = 0; i < choices.length; i++){
            let option = $('<option>').text(choices[i]);
            select.append(option);
         };
        select.attr('id', 'select' + i);
        eachQuestion.append(heading, questionText, select);
        questionDiv.append(eachQuestion)
	};

	// the on click event that will handle the user input
	$('.submit').on('click', function() {
		jQuery.ajaxSettings.traditional = true;
		event.preventDefault();
		// grab the name and photo
		let userName = $('#name').val();
		let userPhoto = $('#photo').val();
		// if there is a valid name and photo continue, else alert to fill it out properly
		if (userName.length === 0 || userPhoto.length === 0 || userPhoto.indexOf('http://') !== 0) {
			alert('Please fill out your name and give a valid photo link (No "s" in "https://)"');
		} else {
			// grabbing the users answers
			let userChoice = $('.user-choices');
			let answers = [];
			// This uses object.keys so you can use a for each callback function on the users answers
			Object.keys(userChoice).forEach(function(choice) {
	            if (answers.length < questions.length) {
	            // for each answer object, grab the first thing, which will be the number, and push it into the answers array
	            answers.push(userChoice[choice].value.charAt(0));
	            };
	        });

			// creating a new object will all of the user's answers
	        let newFriend = {
	        	'name': userName,
	        	'photo': userPhoto,
	        	'answers': answers
	        };

	        // post that sends the new object out in a modal form
	        $.post('/api/friends', newFriend, function(data) {
	        	if (data) {
					let modal = $('#myModal');
					let modalContent = $('.modal');
					let modalImage = $('.modal-image');
					let friendImg = new Image();
					friendImg.src = data.photo;
					friendImg.style.height = '300px';
					friendImg.style.width = 'auto';
					console.log(friendImg);
					let span = $(".close")[0];
					modal.css('display', 'block');
					modalContent.html(data.name);
					modalImage.html(friendImg);
					span.onclick = function() {
					    modal.css('display', 'none');
					}
					window.onclick = function(event) {
					    if (event.target !== modal) {
					        modal.css('display', 'none');
					    }
					}
				}
			});

	        // empties out all of the user's answers so that the survey is ready for the next user
	        $('#name').val('');
	        $('#photo').val('');
			$('select').prop('selectedIndex', null);	
		}
	});
// document.ready closing tag
});