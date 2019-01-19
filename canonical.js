const canonical = document.querySelector("link[rel='canonical']").href;

const url_absolute = window.location.href;
const url_relative = window.location.pathname;

function checkCanonical(canonical) {
	if(canonical) {
		if(url_absolute == canonical || url_relative == canonical) {
			console.log(url_absolute + " is the canonical");
		} else {
			console.log(url_absolute + " is NOT the canonical, the canonical is " + canonical);
		}
	} else {
		console.log("Canonical tag doesn't exist");
	}
}

checkCanonical(canonical);
