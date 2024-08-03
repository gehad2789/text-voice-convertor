/*
The SpeechSynthesisUtterance object available on the global Window object represents a speech request.
 In the example above we passed it a string. That's the message the browser should read aloud
*/
let speechs=new SpeechSynthesisUtterance(); 
let playbtn=document.querySelector("button");
let usertext=document.querySelector(".txtar");
let selectvoice=document.querySelector("select");
let voiceoptions=[];

playbtn.addEventListener("click", ()=>{
    speechs.text=usertext.value;
  

    window.speechSynthesis.speak(speechs);//pass value of text area into window object to read 
});
//end of speak text


//voices options
window.speechSynthesis.onvoiceschanged= function(){
    voiceoptions=window.speechSynthesis.getVoices();//get all avalible voices in device
    //default
    speechs.voice=voiceoptions[0];

    //loop on each voice
    voiceoptions.forEach((voice,i)=>(selectvoice.options[i])=new Option(voice.name,i));//equal each option in select menu = options of voiceoptions areay

   
};

//equal choise of select menu with text reader
selectvoice.addEventListener("change",(a)=>{
    a.preventDefault;
    speechs.voice=voiceoptions[a.target.value];
    /*
    speechs.voice=voiceoptions[selectvoice.value];*/




})