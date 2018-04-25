var canonical = "";
var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i ++) {
    if (links[i].getAttribute("rel") === "canonical") {
        canonical = links[i].getAttribute("href")
    }
};
var url_absolute = window.location.href; 
var url_relative = window.location.pathname;
if (canonical)
{
	if (url_absolute == canonical || url_relative == canonical) 
	{
		console.log(url_absolute + " is the canonical");
		alert(url_absolute + " is the canonical");
	}
	else 
	{
		console.log(url_absolute + " is NOT the canonical, the canonical is " + canonical);
		alert(url_absolute + " is NOT the canonical, the canonical is " + canonical);
	}
}
else 
{
	console.log("Canonical tag doesn't exist");
	alert("Canonical tag doesn't exist");
};
