document.getElementById('langages').innerHTML += "<li id=c> C </li> ";
document.querySelector('h1').textContent = "Computer languages programmation";
document.querySelector('h1').setAttribute("id", "titre");

var t =  document.querySelector('h1');
t.classList.remove("debut");
t.classList.add("deb");

var jQuery = document.createElement("li");
jQuery.setAttribute("id","jQuery");
jQuery.textContent = "jQuery";
document.getElementById('langages').insertBefore(jQuery, document.querySelector("#java"));


var Pascal = document.createElement("li");
Pascal.setAttribute("id","Pascal");
Pascal.textContent = "Pascal";
document.getElementById('langages').replaceChild(jQuery, document.getElementById('cpp'));

document.getElementById('langages').insertAdjacentHTML("afterbegin", "<li id='python'> Python </li>");

document.getElementById('langages').removeChild(document.getElementById('python'));
