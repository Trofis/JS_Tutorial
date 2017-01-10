var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

var div = document.getElementById("contenu");

div.appendChild(document.createElement("dl"));
for (var i =0 ; i < mots.length ; i++)
{
  var strong = document.createElement("strong");
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");


  strong.textContent = mots[i].terme;
  dt.appendChild(strong);
  dd.textContent = mots[i].definition;
  div.appendChild(dt);
  div.appendChild(dd);
}
