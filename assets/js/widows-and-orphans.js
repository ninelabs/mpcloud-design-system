
/**
* Preventing Widows/Orphans with Vanilla Javascript
**/
var nbspSelectors = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote'
];

var nbspWordMin = 4;

nbspSelectors.forEach(function(selector) {
  var nbspElements = document.querySelectorAll(selector);
  nbspElements.forEach(function(element) {
    var wordCount = (element.innerHTML.split(" ").length);
    if (wordCount >= nbspWordMin ) {
      element.innerHTML = element.innerHTML.replace(/ ([^ ]*)$/,'&nbsp;$1');
    }
  });
});
