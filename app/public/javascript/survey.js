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

	for (let i = 0; i < questions.length; i++) {
		let eachQuestion = $('<div>');
		eachQuestion.addClass('question-div');
		let heading = $('<h4>').text('Question ' + j++);
		let questionText = $('<p>').text(questions[i]);
		let select = $('<select>');
        for (let i = 0; i < choices.length; i++){
            let option = $('<option>').text(choices[i]);
            select.append(option);
         };
        select.attr('id', 'select' + i);
        eachQuestion.append(heading, questionText, select);
        var br = $('<br>');
        questionDiv.append(eachQuestion, br)
	};

	$('.submit').on('click', function() {
		event.preventDefault();
		let userName = $('#name').val();
		let userPhoto = $('#photo').val();
		
	});







// document.ready closing tag
});