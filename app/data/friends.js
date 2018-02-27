$('.submit-btn').on('click', function(event) {
		event.preventDefault();
		
		let newFriend = {
			name: $('#name').val().trim(),
			photo: $('#photo').val().trim(),
			scores: [$('#answer-1').val(), $('#answer-2').val(), $('#answer-3').val(), $('#answer-4').val(), $('#answer-5').val(),
					 $('#answer-6').val(), $('#answer-7').val(), $('#answer-8').val(), $('#answer-9').val(), $('#answer-10').val()]
		}
		console.log(newFriend);
	});

	$.post('/api/new', newFriend)
	.then(function(data) {
		console.log(data)
	});