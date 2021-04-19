var sources = {
    "total-populations": {
        "url": "https://www.prisonstudies.org/highest-to-lowest/prison-population-total?field_region_taxonomy_tid=All"
    },
    "wp-lee": {
        "url": "https://www.washingtonpost.com/news/fact-checker/wp/2015/04/30/does-the-united-states-really-have-five-percent-of-worlds-population-and-one-quarter-of-the-worlds-prisoners/"
    },
    "per-capita": {
        "url": "https://worldpopulationreview.com/country-rankings/incarceration-rates-by-country"
    },
    "state-by-state": {
        "url": "https://www.sentencingproject.org/the-facts/#rankings"
    },
    "times-pic": {
        "url": "https://www.nola.com/news/crime_police/article_8feef59a-1196-5988-9128-1e8e7c9aefda.html"
    },
    "bjs-2018": {
        "url": "https://www.bjs.gov/index.cfm?ty=pbdetail&iid=7026"
    },
    "npr-prison-capital": {
        "url": "https://www.npr.org/2012/06/05/154352977/how-louisiana-became-the-worlds-prison-capital"
    },
    "prison-policy-profile": {
        "url": "https://www.prisonpolicy.org/profiles/LA.html"
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

