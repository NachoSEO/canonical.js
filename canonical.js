var canonical = "";
var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i ++) {
    if (links[i].getAttribute("rel") === "canonical") {
        canonical = links[i].getAttribute("href")
    }
};
var url_absoluta = window.location.href; 
var url_relativa = window.location.pathname;
if (canonical)
{
	if (url_absoluta == canonical || url_relativa == canonical) 
	{
		console.log("La URL " + url_absoluta + " es canónica");
		alert("La URL " + url_absoluta + " es canónica");
	}
	else 
	{
		console.log("La URL " + url_absoluta + " NO es canónica, la canónica es " + canonical);
		alert("La URL " + url_absoluta + " NO es canónica, la canónica es " + canonical);
	}
}
else 
{
	console.log("No existe canonical");
	alert("No existe canonical");
};
