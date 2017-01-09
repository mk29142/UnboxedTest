function ResultAdder() {

};

ResultAdder.prototype.addBox = function (user, languages) {

  var container = document.getElementById('container');

  // clears previous search
  var oldBox = document.getElementById('resultbox');
  if(oldBox) {
    oldBox.parentNode.removeChild(oldBox);
  }

  var box = document.createElement('div');
  box.id = 'resultbox';
  box.classList.add('resultbox');
  container.appendChild(box);

  //creates new image for html / css test
  var image = new Image(40,40);
  image.className = 'image';

  var firstLanguage = languages[0];

  if(firstLanguage == 'Java') {
    image.src = '/images/java.png';
    image.alt = "Java";
  } else if (firstLanguage == 'JavaScript') {
    image.src = '/images/javascript.png';
    image.alt = 'Javascript';
  } else if (firstLanguage == 'Haskell') {
    image.src = '/images/haskell.png';
    image.alt = 'Haskell';
  } else if (firstLanguage == 'Python') {
    image.src = '/images/python.png';
    image.alt = 'Python';
  } else {
    image.src = '/images/other.png';
    image.alt = 'other';
  }

  var message = this._createMessage(languages);

  // seperates image and userBox
  var vSpace = document.createElement('div');
  vSpace.classList.add('space');

  // adds username 
  var userBox = document.createElement('div');
  userBox.classList.add('userBox');
  userBox.innerHTML = user;
  userBox.appendChild(document.createElement("br"));

  // adds messages
  var messageBox = document.createElement('div');
  messageBox.classList.add('messagebox');
  messageBox.appendChild(document.createTextNode(message));
  userBox.appendChild(messageBox);

  box.appendChild(image);
  box.appendChild(vSpace);
  box.appendChild(userBox);

};

ResultAdder.prototype._createMessage = function (languages) {
  var message = 'My favourite ';
  var numLang = languages.length;

  if(numLang == 1) {
    // For when you only have 1 favourite langauge
    message += 'language is ' + languages[0] + '!';
  } else {
    // For when you have multiple favourite languages
    message += 'languages are ';
    for(var i = 0; i < numLang; i++) {
      if(i != numLang - 1) {
        message += languages[i] + ', ';
      } else {
        message += 'and ' + languages[i] + '!';
      }
    }
  }
  return message;
};
