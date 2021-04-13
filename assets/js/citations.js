var sources = {
    "total-populations": {
        "url": "https://www.prisonstudies.org/highest-to-lowest/prison-population-total?field_region_taxonomy_tid=All"
    }
}


function getAllCitations() {
    return document.querySelectorAll('.citation');
}

function embedAllCitations() {
    let citationElems = getAllCitations();
    let citationCounter = 0;

    [...citationElems].forEach(citationElem => {
        if (citationElem.dataset.citationName in sources) {
            let source = sources[citationElem.dataset.citationName]
            let numToDisplay;

            "number" in source
                ? numToDisplay = source.number
                : numToDisplay = source.number = ++citationCounter;

            citationElem.href = source.url
            citationElem.innerText = `[${numToDisplay}]`
        } else {
            alert(`Source key ${citationElem.dataset.citationName} not found in sources`)
        }
    });
}

window.onload = function () {
    embedAllCitations();
};

