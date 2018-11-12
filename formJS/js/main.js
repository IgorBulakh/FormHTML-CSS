function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
      container.removeChild(container.lastChild);
    }
  }

  function validate(form) {
    var elems = form.elements;
//value First name.
    resetError(elems.from.parentNode);
    if (!elems.from.value) {
      showError(elems.from.parentNode, ' First name.');
    }
//value Last name.
    resetError(elems.from1.parentNode);
    if (!elems.from1.value) {
      showError(elems.from1.parentNode, ' Last name.');
    }
    resetError(elems.meil.parentNode);
    if (!elems.meil.value) {
      showError(elems.meil.parentNode, ' meil.');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
      showError(elems.password.parentNode, ' password is not valid.');
    } else if (elems.password.value != elems.password2.value) {
      showError(elems.password.parentNode, ' Пароли не совпадают.');
    }

    resetError(elems.to.parentNode);
    if (!elems.to.value) {
      showError(elems.to.parentNode, ' Country.');
    }

    resetError(elems.message.parentNode);
    if (!elems.message.value) {
      showError(elems.message.parentNode, ' Отсутствует текст.');
    }

  }