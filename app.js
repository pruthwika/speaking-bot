const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("Speech Recognition started");
};

recognition.onresult = function(event){
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords);
};

function computerSpeech(words){
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

determineWords(speech,words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if(words.includes("how are you")){
        speech.text = 'I am fine , thank you'
    }
    if(words.includes("who am I")){
        speech.text = 'You are my master'
    }
    if(words.includes("how is the weather")){
        speech.text = 'why you care about that?you never go out'
    }
    if(words.includes("do you love me")){
    speech.text = 'why should i love you?you are a looser'
    }
    if(words.includes("should people subscribe my channel")){
    speech.text = 'Yes you are a rising youtube star'
    }
    if(words.includes("open Facebook for me")){
    speech.text = 'opening Facebook for you now!'
    window.open("https://www.facebook.com/")
    }
    if(words.includes("open Google for me")){
    speech.text = 'opening Google for you now!'
    window.open("https://www.google.com/")
    }

}



button.addEventListener("click",()=>{
    recognition.start();
});