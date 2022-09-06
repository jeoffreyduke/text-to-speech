function TextToSpeech() {
  let text = document.getElementById("ttp").value;
  let speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  speech.lang = "en-US";
  speechSynthesis.speak(speech);
}
