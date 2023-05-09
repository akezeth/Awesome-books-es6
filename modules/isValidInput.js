const isValidInput = () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const btn = document.getElementById('add');

  if (title && author) {
    if (btn.classList.contains('disabled')) {
      btn.classList.remove('disabled');
    }
    btn.disabled = false;
  } else {
    if (!btn.classList.contains('disabled')) {
      btn.classList.add('disabled');
    }
    btn.disabled = true;
  }
};

export default isValidInput;
window.isValid = isValidInput;