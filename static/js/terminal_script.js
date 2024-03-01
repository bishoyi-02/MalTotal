var inputReady = true;
var input = $('.404-input');
// console.log("input");
input.focus();
$('.container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase();
  var href;

	 if (val === 'upload'){
		upload();
	}else if(val==='show_family' || val==='show_classes'){
		let classes=['AgentTesla','Socelars','Loki','SmokerLoader']
		let message = "AgentTesla , Socelars , Loki , SmokerLoader"
		$('.new-output').removeClass('new-output');
  			var input = $('.404-input');
			input.val('');
			$('.terminal').append('<p class="prompt">' + message + '</p>');
			$('.new-output').velocity(
				'scroll'
			  ), {duration: 100}
		$('.terminal').append('<p class="prompt output new-output"></p>');
		
	
	}else if(val==='exit'){
		window.close();
	}else if(val==='cls'){
		let terminal = document.getElementsByClassName('terminal')[0]
		// console.log(terminal.childNodes)
		while(terminal.childNodes.length>2){
			terminal.removeChild(terminal.lastChild);
		}
		var input = $('.404-input');
		input.val('');
		$('.terminal').append('<p class="prompt output new-output"></p>');
	}else if(val==='help'){
		$('.new-output').removeClass('new-output');
		var input = $('.404-input');
		input.val('');
		$('.terminal').append('<p class="prompt">' + "upload : to upload files" + '</p>');
		$('.new-output').velocity(
			'scroll'
		), {duration: 100}
		
		$('.terminal').append('<p class="prompt">' + "show_classes / show_family : to see malware families that the uploaded file is tested for. " + '</p>');
		$('.new-output').velocity(
			'scroll'
		), {duration: 100}
		
		$('.terminal').append('<p class="prompt">' + "cls : to clear the previous commands" + '</p>');
		$('.new-output').velocity(
			'scroll'
		), {duration: 100}
		$('.terminal').append('<p class="prompt output new-output"></p>');
		
	}
	else {
		resetForm();
	}
});

function upload(){
    document.getElementById('yourformhere').click(function(event) {
		event.preventDefault();
	});
	var input = $('.404-input');
	  $('.new-output').removeClass('new-output');
	  input.val('');
	  let message = "File uploaded successfully"
	  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
	
	  $('.new-output').velocity(
		'scroll'
	  ), {duration: 100}
}

function resetForm(withKittens){
  var message = "Sorry that command is not recognized. Type writing 'help' to get accustomed with the portal."
  var input = $('.404-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Huzzzzzah Kittehs!"
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}

	function showKittens(){
		$('.terminal').append("<div class='kittens'>"+
								 "<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" +
								 "<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" +
								 "<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" +
								 "<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" +
								 "<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" +
								 "<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" +
								 "<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" +
								 "<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" +
								 "<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" +
								 "<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" +
								 "<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" +
								 "<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" +
								 "<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" +
								 "<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" +
								 "<p class='prompt'>                                                              </p></div>");

		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		setTimeout(function(){
			var gif;

			$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result){
				gif = result.data.image_url;
				$('.terminal').append('<img class="kitten-gif" src="' + gif + '"">');
				resetForm(true);
			});
		}, (lines.length * 100) + 1000);
	}

	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 10;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};