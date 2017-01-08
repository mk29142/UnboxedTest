(function initPage() {

  var container = document.createElement('div');
  container.id = 'container';
  container.innerHTML = 'User Name: ';
  container.setAttribute('align', 'center');
	document.body.appendChild(container)

  var inputBox = document.createElement('input');
  inputBox.id = 'inputBox';
  inputBox.classList.add('inputBox');
  inputBox.type = 'text';
  inputBox.placeholder = 'user name';
	container.appendChild(inputBox);

  var submitbutton = document.createElement('input');
  submitbutton.id = 'submit';
  inputBox.classList.add('submitbutton');
  submitbutton.type = 'submit';
  submitbutton.value = "Submit";
	container.appendChild(submitbutton);

})();
