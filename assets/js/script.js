window.onload = function() {
    populateSitography()
}

function populateSitography() {
    sitographyLinks.sort();
    sitographyLinks.forEach(line => {
        let elem = line.split(" | ");
        $("#sitography-links").append("<li><a target='_blank' href=\"" + elem[1] + "\">-> " + elem[0] + "</a></li>")
    })
}

function showMap(item, me) {
    var btn = $(".map-button");
    for(b of btn){
        b.classList.remove("map-button-active")
    }
    me.classList.add("map-button-active")
    var maps = $(".map-svg");
    for (const m of maps) {
        m.style.display ="none";
    }
    document.getElementById(item).style.display = "block";
}

