var sources = {
    "total-populations": {
        "author": "Prison Studies",
        "display_name": "Highest to Lowest - Prison Population Total",
        "url": "https://www.prisonstudies.org/highest-to-lowest/prison-population-total?field_region_taxonomy_tid=All"
    },
    "wp-lee": {
        "author": "The Washington Post",
        "display_name": "Does the United States really have 5 percent of the world’s population and one quarter of the world’s prisoners?",
        "url": "https://www.washingtonpost.com/news/fact-checker/wp/2015/04/30/does-the-united-states-really-have-five-percent-of-worlds-population-and-one-quarter-of-the-worlds-prisoners/"
    },
    "per-capita": {
        "author": "World Population Review",
        "display_name": "Incarceration Rates by Country 2021",
        "url": "https://worldpopulationreview.com/country-rankings/incarceration-rates-by-country"
    },
    "state-by-state": {
        "author": "The Sentencing Project",
        "display_name": "State-by-State Data",
        "url": "https://www.sentencingproject.org/the-facts/#rankings"
    },
    "times-pic": {
        "author": "NOLA",
        "display_name": "Louisiana is the world's prison capital",
        "url": "https://www.nola.com/news/crime_police/article_8feef59a-1196-5988-9128-1e8e7c9aefda.html"
    },
    "bjs-2018": {
        "author": "U.S. Bureau of Justice Statistics",
        "display_name": "Correctional Populations In The United States, 2017-2018",
        "url": "https://www.bjs.gov/index.cfm?ty=pbdetail&iid=7026"
    },
    "npr-prison-capital": {
        "author": "NPR",
        "display_name": "How Louisiana Became The World's 'Prison Capital'",
        "url": "https://www.npr.org/2012/06/05/154352977/how-louisiana-became-the-worlds-prison-capital"
    },
    "prison-policy-profile": {
        "author": "Prison Policy",
        "display_name": "Louisiana profile",
        "url": "https://www.prisonpolicy.org/profiles/LA.html"
    },
    "lifers": {
        "author": "The Sentencing Project",
        "display_name": "Still Life: America’s Increasing Use of Life and Long-Term Sentences",
        "url": "https://www.sentencingproject.org/publications/still-life-americas-increasing-use-life-long-term-sentences/#III.%20Life%20by%20the%20Numbers"
    },
    "aclu": {
        "author": "ACLU Louisiana",
        "display_name": "Justice Can't Wait: An Indictment of Louisiana’s Pretrial System",
        "url": "https://www.laaclu.org/sites/default/files/field_documents/aclu_la_justicecantwaitreport_02102020_online.pdf"
    },
    "40-percent": {
        "author": "U.S. Federal Reserve",
        "display_name": "Report on the Economic Well-Being of U.S. Households in 2018 - May 2019",
        "url": "https://www.federalreserve.gov/publications/2019-economic-well-being-of-us-households-in-2018-dealing-with-unexpected-expenses.htm"
    },
    "splc": {
        "author": "Southern Poverty Law Center",
        "display_name": "Racial Profiling in Louisiana: Unconstitutional and Counterproductive",
        "url": "https://www.splcenter.org/sites/default/files/leg_special_report_racial_final.pdf"
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

function getSortedSources() {
    return Object.values(sources).sort((a, b) => (a.number > b.number) ? 1 : -1)
}

// yes I know this is jank and non-sustainable
// I'm not using a templating language for a small project like this, don't @ me
function createRefSlide() {
    let refHTML = ``;
    let sortedSources = getSortedSources()

    sortedSources.forEach(source => {
        refHTML +=
            `
                <p><a target="_blank" href="${source.url}">[${source.number}] - ${source.display_name}</a></p>
            `
    });

    document.querySelector('#js-refs').insertAdjacentHTML('beforeend', refHTML)

}

window.onload = function () {
    embedAllCitations();
    createRefSlide();
};

