
function showHomeTour() {
    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
    }});

    tour.addStep('home1', {
        title: "Discover the content of our studies. ",
        text: "<ul><li>Identify the specific questions and variables you may be interested in;</li><li>Find out how the questions asked relate to the variables</li><li>Refine your search using 100+ topics</li></ul>",

    });

    tour.addStep('home2', {
        title: "Search",
        text: "<ul><li>Search using free text across the whole site</li><li>Refine your search using filters: <i>Item Type</i> (variables, questions), <i>Topics</i> and <i>Lifestage</i></li><li> e.g. If you are interested in variables related to obesity then search: <i>weight or height or bmi</i> and filter by item type <i>Variables</i> and topic <i>Anthropometry</i>/li>li>use fuzzy search e.g. ~hose will include house and huse in the search</li><li><b>Don’t forget to</b> Reset your filters before you start a new search</li></ul>",
        attachTo: '#nav-link-search bottom',
    });

    tour.addStep('home3', {
        title: "Explore",
        text: "<ul><li>Explore allows you to browse variables OR questions by topic</li><li>You can Filter using LifeStage or Study</li></ul>",
        attachTo: '#nav-link-explore bottom',
    });

    tour.addStep('home4', {
        title: "List",
        text: "<ul><li>You can add variables and questions to a list using the <b>+</b></li><li>Download your lists as PDFs for yourself or to share them with your collaborators</li></ul>",
        attachTo: '#nav-link-basket bottom',
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });

    tour.start()
};

function showSearchTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    // Text box
    tour.addStep('search1', {
        title: "Query",
        text: "<p>By default, this will find everything matching your term.</p><p>The results will return which items were searched</p><ul><li><b>Item Types</b>: Variables, Questions</li><li><b>Query</b>: medications</li><li><b>Results</b>: 1 to 20 of 26 (0.36 seconds)</li></ul>",
        attachTo: "#search-group bottom",
    });

    // Item type facet
    if ($("#item-type-panel").length) {
        tour.addStep('search2', {
            title: "Item Types",
            text: "<p>Choose which types of items you would like to find. Checking a box will refine your search</p><ul><li>Variables</li><li>Questions</li><li>Datasets</li></ul>",
            attachTo: "#item-type-panel right",
        });
    }

    // Life stage
    if ($("#life-stage-panel").length) {
        tour.addStep('search4', {
            title: "Life Stage",
            text: "Choose the life stages you would like to search within.",
            attachTo: "#life-stage-panel right",
        });
    }

    // Topic facet
    if ($("#topic-panel").length) {
        tour.addStep('search5', {
            title: "Topic",
            text: "Choose one (or more) of the 15 top level topics you would like to search within.",
            attachTo: "#topic-panel top",
        });
    }

    // Results
    if ($("#no-query-message").length) {
        tour.addStep('searchLast', {
            title: "Results",
            text: "After searching, your results will show here.",
            attachTo: '#no-query-message top',
            buttons: {
                text: "Finish",
                action: tour.next
            }
        });
    }
    else if ($("#search-results").length) {
        tour.addStep('searchLast', {
            title: "Results",
            text: "Here are your search results. Click the header link to find details about an item.",
            attachTo: '#search-results top',
            buttons: {
                text: "Finish",
                action: tour.next
            }
        });
    }

    tour.start();
};

function showExploreTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    tour.addStep('concepts', {
        title: 'Topics',
        text: 'The left sidebar shows a list of topics. Select a topic to see variables and other items.',
        attachTo: '#concept-system-tree right',
    });

    tour.addStep('concordance', {
        title: "Concordance",
        text: "When a topic is selected, the concordance table shows variables in that topic. Select a row to see summary statistics.",
        attachTo: "#concordance-wrapper top"
    });

    tour.addStep("concordance-details", {
        title: "Details",
        text: "The right side shows details about the selected item, including any descriptive statistics in the metadata.",
        attachTo: "#concordance-details left"
    });

    tour.addStep("left-pane-buttons", {
        title: "Views",
        text: "Use these buttons to switch between the concordance views or lists of variables, questions, and other item types.",
        attachTo: "#left-pane-buttons bottom",
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });


    tour.start()
};

function showBasketTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    tour.addStep('basket1', {
        title: 'Basket',
        text: "The basket lets you save variables, questions, or other items that interest you.",
        attachTo: '.basket-items bottom',
    });


    // Download metadata or data
    tour.addStep('basket2', {
        title: 'Basket',
        text: "You can download information about items in you basket in various formats.",
        attachTo: '#download-ddi-link right',
    });


    // Create multiple
    tour.addStep('basket3', {
        title: 'Basket',
        text: "You can create multiple baskets to organize your items however you like.",
        attachTo: '#create-basket-link right',
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });


    tour.start()
};
