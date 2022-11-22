const formSubmit = document.getElementById('feedback-form');
const buttonFeedback = document.querySelector('.feedback__button');
const formFeedback = document.querySelector('.feedback__form');
const closeFeedbackButton = document.querySelector('.feedback__close-btn');

const openFeedback = () => {
  formFeedback.classList.add('feedback_opened');
}

const closeFeedback = (e) => {
  e.preventDefault();
  formFeedback.classList.remove('feedback_opened');
}

buttonFeedback.addEventListener('click', openFeedback);
closeFeedbackButton.addEventListener('click', closeFeedback);

formSubmit.onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("namecl=" + this.namecl.value +"&phonecl=" + this.phonecl.value + "&emailcl=" + this.emailcl.value + "&textcl=" + this.textcl.value );
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + 'Ваше сообщение получено.\nНаши специалисты ответят Вам.\nБлагодарим за интерес!');
    }
  }
  formFeedback.classList.remove('feedback_opened');
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}