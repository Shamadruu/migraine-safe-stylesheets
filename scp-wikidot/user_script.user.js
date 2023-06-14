// ==UserScript==
// @name         Migraine-Safe Theme for the SCP-wiki
// @namespace    https://raw.githubusercontent.com/Shamadruu/migraine-safe-stylesheets/main/scp-wikidot-stylesheet.css
// @version      2.4
// @description  try to take over the world!
// @author       Shamadruu
// @downloadURL  https://raw.githubusercontent.com/Shamadruu/migraine-safe-stylesheets/main/scp-wikidot-stylesheet.user.js
// @updateURL    https://raw.githubusercontent.com/Shamadruu/migraine-safe-stylesheets/main/scp-wikidot-stylesheet.user.js
// @match        https://scp-wiki.wikidot.com/*
// @grant        none
// ==/UserScript==
(function(){
	var addGlobalStyle = function(style) {
        let styleElement = document.createElement("style");
        styleElement.innerHTML = style;
        document.head.appendChild(styleElement);
    }
	addGlobalStyle(`:root {
    --desat-dark-blue: #28364f;
    --dark-blue: #1b314b;
    --desat-blue: #375a7f;
    --desat-light-blue: #5383e8;
    --desat-dark-red: #5d383f;
    --light-red: #e84057;
    --desat-light-red: #D47F7F;
    --desat-dark-green: #506633;
    --desat-light-green: #90b181;
    --tint-green: #dbe2d2;
    --desat-dark-purple: #4a3366;
    --desat-dark-orange: #a36417;
    --light-yellow: #c0d033;
    --desat-light-yellow: #d7d77c;
    --cyan: #20c6df;
    --desat-cyan: #559eaa;
    --turquoise: #0e8a9e;
    --desat-turquoise: #32717b;
    --magenta: #df20df;
    --desat-magenta: #a5a;
    --white: #dfdfdf;
    --black: #060606;
    --very-dark-grey: #111;
    --dark-grey: #323238;
    --grey: #45454d;
    --light-grey: #aaa;
    --body-background-color: var(--black);
    --body-embed-background-color: var(--very-dark-grey);
    --post-head-background-color: var(--dark-grey);
    --body-text-color: var(--light-grey);
    --active-link-color: var(--cyan);
    --hover-link-color: var(--turquoise);
    --visited-link-color: var(--magenta);
    --filter-invert-value: 0.85;
}

#container, #page-title, #page-content, h1, #content-wrap {
    background: var(--body-background-color)!important;
    color: var(--body-text-color)!important;
}
#side-bar > .side-block, .blockquote, .scp-image-block, .description-block.well, div.box:not(.art), div.box.newsbox > div, .INT-box, .scp-image-caption, #top-bar, .post .long, .page-rate-widget-box  {
    background: var(--body-embed-background-color)!important;
    color: var(--body-text-color)!important;
}

.post .long .head {
    background: var(--post-head-background-color)!important;
    color: var(--body-text-color)!important;
}
.side-block .heading {
  color: var(--body-text-color)!important;
  border-bottom: solid 1px var(--body-text-color)!important;
    
}
#side-bar > .side-block, blockquote, .scp-image-block, .description-block.well, div.box:not(.art), div.box.newsbox > div, .INT-box, .post .long {
    box-shadow: 0 2px 6px rgba(var(--body-text-color),.25)!important;
}
#side-bar > .side-block, blockquote, .scp-image-block, .description-block.well, div.box:not(.art), div.box.newsbox > div, .INT-box {
    border: 1px solid var(--body-text-color)!important;
}
.post .long {
    border-radius: 5px 5px 5px 5px;
}
.post > .long > .options {
    padding-right:1em!important;
    padding-bottom:1em!important;
}
#page-title a, .side-block .menu-item{
    color: var(--body-text-color)!important;
}
a, .post .long .options a, .side-block .heading a, .side-block .menu-item a, #header a{
    color: var(--active-link-color)!important;
}
a:hover{
    color: var(--hover-link-color)!important;
}
a:visited, .side-block .heading a:visited, .side-block .menu-item a:visited {
    color: var(--visited-link-color)!important;
}


iframe {
    filter: invert(var(--filter-invert-value));
}`);
})();
