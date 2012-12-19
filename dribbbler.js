// Dribbble Follow Button by @thomweerd.
// Free to use and abuse.

$(function() {

	// APPENDS STYLESHEET FOR THE CSS
	$('body').append('<link rel="stylesheet" href="dribbbler.css" />');

	// SOME VARIABLES
	var button = '.dribbble-follow-button',
		label = $(button).text(),
		username = $('a'+button).attr('href').toLowerCase().replace('http://dribbble.com/', ''),
		disableCount = $(button).attr('class');

	// DISPLAYED WHEN THE API IS NOT RESPONDING
	$(button).wrap('<div class="dribbble-follow-button" />').removeClass().addClass('label').html('<i></i> '+label);

	// REQUESTS USER'S DATA FROM DRIBBBLE'S API AND APPENDS IT
	$.getJSON('http://api.dribbble.com/players/'+username+'?callback=?', function(data) {
		$(button).wrap('<div class="dribbble-follow-button '+disableCount+'" />').parent().html('<a class="label" href="http://dribbble.com/'+username+'" target="_blank"><i></i>'+label+'</a><a class="count" href="http://dribbble.com/'+username+'/followers" target="_blank"><i></i><u></u>'+data.followers_count+' followers</a>');
		$(button+'.disableCount').find('.count').remove();
	});

});