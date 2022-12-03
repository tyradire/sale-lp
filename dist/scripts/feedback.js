const formSubmit = document.getElementById('orderPopup-form');
const buttonorderPopup = document.querySelector('.orderPopup__button');
const formorderPopup = document.querySelector('.orderPopup__form');
const closeorderPopupButton = document.querySelector('.orderPopup__close-btn');

const openorderPopup = () => {
  formorderPopup.classList.add('orderPopup_opened');
}

const closeorderPopup = (e) => {
  e.preventDefault();
  formorderPopup.classList.remove('orderPopup_opened');
}

buttonorderPopup.addEventListener('click', openorderPopup);
closeorderPopupButton.addEventListener('click', closeorderPopup);

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
  formorderPopup.classList.remove('orderPopup_opened');
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}