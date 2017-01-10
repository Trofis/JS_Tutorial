function infosLiens()
{
  console.log(document.querySelectorAll('a').length);
  console.log(document.querySelector('a').getAttribute("href"));
  console.log(document.querySelectorAll('a')[document.querySelectorAll('a').length-1].getAttribute("href"));
}

function possede(elem, attribut)
{
  text = document.body.textContent;
  query = document.getElementById(elem);
  ok = "False";
  if (query != null)
  {
    if (query.getAttribute("class").includes(attribut))
    {
          ok = "True";
    }

    console.log(ok);
  }

  else
  {
    console.log("Cela n'existe pas");
  }


}

infosLiens();


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
