var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

var div = document.getElementById('contenu');
console.log(journaux.length);
for (var i = 0; i < journaux.length; i++)
{
  var j = document.createElement("a");
  j.setAttribute("href", journaux[i]);
  j.textContent = journaux[i];
  div.appendChild(j);
  div.appendChild(document.createElement("br"));
  console.log(div);
}
