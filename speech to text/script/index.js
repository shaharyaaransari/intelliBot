document.getElementById('click_to_record').addEventListener('click', function() {
    var speech = true;
    if (speech) {
      window.SpeechRecognition = window.webkitSpeechRecognition;
      
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
      
      recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
  
        document.getElementById("convert_text").innerHTML = `<h3>${transcript}</h3>`;
        console.log(transcript);
      });
  
      recognition.start();
    }
  });