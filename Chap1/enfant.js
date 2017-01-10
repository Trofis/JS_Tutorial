
function afficherEnfant(noeud, indice) {
  if (noeud.nodeType === Document.ELEMENT_NODE)
  {
    if (indice > noeud.childNodes.length -1 || indice < 0)
    {
      console.log("Indice Hors tableau child : "+indice);
    }
    else
    {
      console.log(noeud.childNodes[indice]);
    }
  }
  else
  {
    console.log("Ce n'est pas un noeud");
  }

}



// Doit afficher le noeud h1

afficherEnfant(document.body, 1);


// Doit afficher l'erreur "Indice incorrect"

// L'indice demandé est négatif

afficherEnfant(document.body, -1);


// Doit afficher l'erreur "Indice incorrect"

// Le noeud body a moins de 9 noeuds enfants

afficherEnfant(document.body, 8);


// Doit afficher l'erreur "Type de noeud incorrect"

// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants

afficherEnfant(document.body.childNodes[0], 0);
