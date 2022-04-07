const msgerFormJohn = get(".msger-inputareaJohn");
const msgerInputJohn = get(".msger-inputJohn");

const msgerChatJohn = get(".msger-chatJohn");

const msgerFormAnik = get(".msger-inputareaAnik");
const msgerInputAnik = get(".msger-inputAnik");
const msgerChatAnik = get(".msger-chatAnik");

const msgerFormBhabin = get(".msger-inputareaBhabin");
const msgerInputBhabin = get(".msger-inputBhabin");
const msgerChatBhabin = get(".msger-chatBhabin");

const  BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
 const BOT_NAME = "sandeep";
// const PERSON_NAME = "Sajad";
var USER_ARRAYJohn = [];
var USER_ARRAYAnik = [];
var USER_ARRAYBhabin = [];
var personArrayJohn = [];
var personArrayAnik = [];
var personArrayBhabin = [];

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
 

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  if(cityName=="John"){
    personArrayJohn.push(cityName) ;
    USER_ARRAYJohn.push(cityName) ;
  }
  else if(cityName=="Anik"){
    personArrayAnik.push(cityName) ;
    USER_ARRAYJohn.push(cityName) ;
  }
  else if(cityName=="Bhabin"){
    personArrayBhabin.push(cityName) ;
    USER_ARRAYJohn.push(cityName) ;
  }
  
  
  evt.currentTarget.className += " active";
  
}
document.getElementById("defaultOpen").click();


msgerFormJohn.addEventListener("submit", event => {
  event.preventDefault();

  var msgTextJohn = msgerInputJohn.value;
  var myFileJohn = document.getElementById("myFileJohn").value;
  let substringJohn = myFileJohn.substring(12);


  //if (msgText) return;
    if( USER_ARRAYJohn[0]=="John"){
    appendMessageJohn(USER_ARRAYJohn[USER_ARRAYJohn.length-1], PERSON_IMG, "right", msgTextJohn, substringJohn);
    msgerInputJohn.value = "";
    USER_ARRAYJohn[0] = "sandeep";
    } else{
        BOT_MSGS.push(msgTextJohn);

        botResponse(personArrayJohn[0]);
       
    }
   document.getElementById("notify-id-p").innerHTML = "${USER_ARRAYJohn[0]} has messsaged you";
      
});

msgerFormAnik.addEventListener("submit", event => {
  event.preventDefault();

  var msgTextAnik = msgerInputAnik.value;
  var myFileAnik = document.getElementById("myFileAnik").value;
  let substringAnik = myFileAnik.substring(12);
  //if (msgText) return;
    if(USER_ARRAYAnik[0]=="Anik"){
    appendMessageAnik(USER_ARRAYAnik[USER_ARRAYAnik.length-1], PERSON_IMG, "right", msgTextAnik,substringAnik);
    msgerInputAnik.value = "";
    USER_ARRAYAnik[0] = "sandeep";
    } else{
        BOT_MSGS.push(msgTextAnik);

        botResponse(personArrayAnik[0]);
       
    }
    document.getElementById("notify-id-p").innerHTML = "${USER_ARRAYAnik[0]} has messsaged you";
      
});

msgerFormBhabin.addEventListener("submit", event => {
  event.preventDefault();

  var msgTextBhabin = msgerInputBhabin.value;
  var myFileBhabin = document.getElementById("myFileBhabin").value;
  let substringBhabin = myFileBhabin.substring(12);
  
  //if (msgText) return;
    if(USER_ARRAYBhabin[0]=="Bhabin"){
    appendMessageBhabin(USER_ARRAYBhabin[USER_ARRAYBhabin.length-1], PERSON_IMG, "right", msgTextBhabin,substringBhabin);
    msgerInputBhabin.value = "";
    USER_ARRAYBhabin[0] = "sandeep";
    } else{
        BOT_MSGS.push(msgTextBhabin);

        botResponse(personArrayBhabin[0]);
       
    }

   
      
});

function appendMessageJohn(name, img, side, text, image) {

  document.getElementById("johnNotify").innerHTML = "John has messsaged you";
  //   Simple solution for small apps
  const msgHTMLJohn = `
    <div class="msgJohn ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubbleJohn">
        <div class="msg-infoJohn">
          <div class="msg-info-nameJohn">${name}</div>
          <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
        </div>

        <div class="msg-textJohn">${text}
        

        </div>
      </div>
    </div>
  `;
  const msgHTMLJohnImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textJohn">
      <h1>${text}</h1>
      <img src="images/${image}"  width="200" height="200">

      </div>
    </div>
  </div>
`;
 
  if(image === "" || image === undefined){
    msgerChatJohn.insertAdjacentHTML("beforeend", msgHTMLJohn);
    msgerChatJohn.scrollTop += 500;
  }
  else{
    msgerChatJohn.insertAdjacentHTML("beforeend", msgHTMLJohnImage);
      msgerChatJohn.scrollTop += 500;
  }
    
      
 
}

function appendMessageAnik(name, img, side, text, image) {
  document.getElementById("AnikNotify").innerHTML = "Anik has messsaged you";
  //   Simple solution for small apps
  const msgHTMLAnikImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textJohn">
      <h1>${text}</h1>
      <img src="images/${image}"  width="200" height="200">

      </div>
    </div>
  </div>
`;

  const msgHTMLAnik = `
  <div class="msgAnik ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleAnik">
      <div class="msg-infoAnik">
        <div class="msg-info-nameAnik">${name}</div>
        <div class="msg-info-timeAnik">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textAnik">${text}</div>
    </div>
  </div>
`;

if(image === "" || image === undefined){
  msgerChatAnik.insertAdjacentHTML("beforeend", msgHTMLAnik);
      msgerChatAnik.scrollTop += 500;
}
else{
  msgerChatAnik.insertAdjacentHTML("beforeend", msgHTMLAnikImage);
      msgerChatAnik.scrollTop += 500;
}
  
    
  
  
}

function appendMessageBhabin(name, img, side, text, image) {

  document.getElementById("BhabinNotify").innerHTML = "Bhabin has messsaged you";
  //   Simple solution for small apps
  const msgHTMLBhabinImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textJohn">
      <h1> ${text}</h1>
      <img src="images/${image}"  width="200" height="200">

      </div>
    </div>
  </div>
`;

const msgHTMLBhabin = `
<div class="msgBhabin ${side}-msg">
  <div class="msg-img" style="background-image: url(${img})"></div>

  <div class="msg-bubbleBhabin">
    <div class="msg-infoBhabin">
      <div class="msg-info-nameBhabin">${name}</div>
      <div class="msg-info-timeBhabin">${formatDate(new Date())}</div>
    </div>

    <div class="msg-textBhabin">
    ${text}
    
    </div>
  </div>
</div>
`;

if(image === "" || image === undefined){
  msgerChatBhabin.insertAdjacentHTML("beforeend", msgHTMLBhabin);
  msgerChatBhabin.scrollTop += 500;
}
else{
  msgerChatBhabin.insertAdjacentHTML("beforeend", msgHTMLBhabinImage);
      msgerChatBhabin.scrollTop += 500;
}
  
      
    
  
  
}

function botResponse(name) {

    const r = BOT_MSGS.length - 1;
//   const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;
  if(name=="John"){
    var myFileJohn = document.getElementById("myFileJohn").value;
  let substringJohn = myFileJohn.substring(12);
    setTimeout(() => {
      appendMessageJohn(BOT_NAME, BOT_IMG, "left", msgText,substringJohn);
    }, delay);
    USER_ARRAYJohn[0] = personArrayJohn[0];
  } else if(name=="Anik"){
    var myFileAnik = document.getElementById("myFileAnik").value;
  let substringAnik = myFileAnik.substring(12);
    setTimeout(() => {
      appendMessageAnik(BOT_NAME, BOT_IMG, "left", msgText,substringAnik);
    }, delay);
    USER_ARRAYAnik[0] = personArrayAnik[0];
  }
  else if(name=="Bhabin"){
    var myFileBhabin = document.getElementById("myFileBhabin").value;
  let substringBhabin = myFileBhabin.substring(12);
    setTimeout(() => {
      appendMessageBhabin(BOT_NAME, BOT_IMG, "left", msgText,substringBhabin);
    }, delay);
    USER_ARRAYBhabin[0] = personArrayBhabin[0];
  }
  

 
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




// var contacts = [{
//     name: "Sandeep"
//   }, {
//     name: "John"
//   }, {
//     name: "Bhabin"
//   }];
  
//   var messages = [{
//     name: "sandeep",
//     message: [{
//       msg: "Hello",
//       date: 10
//     }, {
//       msg: "Hello",
//       date: 400
//     }]
//   }, {
//     name: "john",
//     message: [{
//       msg: "Hi",
//       date: 20
//     }, {
//       msg: "Hi",
//       date: 30
//     }]
//   }, {
//     name: "bhabin",
//     message: [{
//       msg: "Hi there",
//       date: 20
//     }, {
//       msg: "Lol",
//       date: 40
//     }]
//   }];
  
//   var result = contacts.sort(function(x, y) {
  
//     var max_date_x = messages.find(function(element){
//       return element.name === x.name;     
//     }).message.map(function(element) {
//       return element.date;
//     }).reduce(function(a, b) {
//       return Math.max(a, b);
//     }, 0);
  
//     var max_date_y = messages.find(function(element){
//       return element.name === y.name;     
//     }).message.map(function(element) {
//       return element.date;
//     }).reduce(function(a, b) {
//       return Math.max(a, b);
//     }, 0);
  
//     // sort the contacts array
//     return (max_date_y - max_date_x) || 0;
//   });
  
//   console.log(result);
// JavaScript code
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('tablinks');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
