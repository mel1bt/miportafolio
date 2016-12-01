var words = ['Coder',
'Programadora',
'Ing. Informática',
'Front-End Jr.'],
 current_length = 0,
 current_direction = 1,
 current_word = 0,
 character_delay = 50,
 word_delay = 800,
 $title = $('#soy');



function advanced_text() {
  if(current_direction == -1) {
    $title.addClass('highlighted');
    setTimeout(function() {
      $title.removeClass('highlighted');
      current_length = 0;
      current_direction = 1;
      current_word++;
      setTimeout(advanced_text,0);
    },word_delay/2);
    return;
  }
  current_length += current_direction;
  var timeout_delay = 0;
  set_text($title, words[current_word], current_length);
  if(current_length >= words[current_word].length) {
    current_length = words[current_word].length;    
    current_direction = -1; //Now we're deleting
    if(current_word >= words.length -1) {
      //stop! we're done
      return;
    }
    //set long timout
    timeout_delay = word_delay;
  }
  timeout_delay = timeout_delay ? timeout_delay : (current_direction > 0 ? character_delay-10+Math.random()*20 : character_delay/4);
  setTimeout(advanced_text, timeout_delay);
}

advanced_text();

function set_text($element, word, length) {
  $element.text(word.substring(0,length));
}