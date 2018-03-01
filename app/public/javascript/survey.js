$(document).ready(function() {
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

	let choices = [
		'1 (Strongly Disagree)',
		'2',
		'3',
		'4',
		'5 (Strongly Agree)'
	];

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

        for (let i = 0; i < choices.length; i++){
            let option = $('<option>').text(choices[i]);
            select.append(option);
         };
        select.attr('id', 'select' + i);
        eachQuestion.append(heading, questionText, select);
        let br = $('<br>');
        questionDiv.append(eachQuestion, br)
	};

	$('.submit').on('click', function() {
		jQuery.ajaxSettings.traditional = true;
		event.preventDefault();
		let userName = $('#name').val();
		let userPhoto = $('#photo').val();
		if (userName.length === 0 || userPhoto.length === 0) {
			alert('Please fill out your name and choose a photo');
		} else {
			let userChoice = $('.user-choices');
			let answers = [];

			Object.keys(userChoice).forEach(function(choice) {
	            if (answers.length < questions.length) {
	            answers.push(userChoice[choice].value.charAt(0));
	            };
	        });

	        let newFriend = {
	        	'name': userName,
	        	'photo': userPhoto,
	        	'answers': answers
	        };

	        $.post('/api/friends', newFriend, function(data) {
	        	alert(`Your new friend: ${data.name} ${data.photo}`);
	        });

	        $('#name').val('');
	        $('#photo').val('');
			$('select').prop('selectedIndex', null);	
		}
	});
// document.ready closing tag
});