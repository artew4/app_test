let tg = window.Telegram.WebApp;
let text_id = document.getElementById('text_id');
let text_name = document.getElementById('text_name');

var user_id = tg.initDataUnsafe.user.id;
var user_name = tg.initDataUnsafe.user.first_name;

text_id.innerHTML = user_id;
text_name.innerHTML = user_name;