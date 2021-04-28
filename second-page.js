const url_string = window.location.href;
const url = new URL(url_string);

const name = url.searchParams.get("name");
const surname = url.searchParams.get("surname");
const date = url.searchParams.get("date");

const today = new Date();
const dateObject = new Date(date);
const age = today.getFullYear() - dateObject.getFullYear();

const h1 = document.getElementById("h1");
h1.innerHTML = "Bonjour " + name + " " + surname + ", vous avez " + age + " ans.";



