var p = document.getElementsByTagName("p");

for (var i = 0; i < p.length ; i ++)
{
  p[i].style.color = "green";
}

p[2].style.color = "red";
p[2].style.marginTop = "20px";
p[2].style.fontFamily = "Sans-Serif";


var l = getComputedStyle(document.getElementById('para'))

console.log(l.fontStyle);
console.log(l.color);
