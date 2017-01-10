var list = document.getElementsByTagName('a');


console.log(list.length);
for (var i = 0; i < list.length ; i++) {
  if (list[i].hasAttribute("href"))
  {
    console.log("Le lien a un attribut href")
  }
  else
  {
    console.log("Le lien n'a pas d'attribut href")
  }
 console.log(list[i].getAttribute("href"));
 console.log(list[i].innerHTML)
 console.log(list[i].classList)
}

console.log(document.querySelector(".existe").innerHTML)
