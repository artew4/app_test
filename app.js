alert('wooooo');

let tg = window.Telegram.WebApp;
let text_id = document.getElementById('text_id');
let text_name = document.getElementById('text_name');
var testing = document.getElementById("testing");

//console.log(testing)

var user_id = tg.initData.user.id;
var user_name = tg.initData.user.first_name;
var some_text = 'some text from js';

text_id.innerHTML = user_id;
text_name.innerHTML = user_name;
testing.innerHTML = some_text;
