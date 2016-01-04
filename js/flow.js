function Flow($contentParent, $navParent, obj) {
  // Our section for filling up with content!
  var $section = $('<section id="flow">');
  // Our navigation part thing!
  var $nav = $('<nav>');
  // Go through our keys in the object! This should be our stuff.
  for(var key in obj) {
    // Id safe key! Probably.
    var idkey = key.replace(/(\W|\s)/,"-");
    // Make a link and throw it into the navigation!
    $nav.append('<a href="#'+idkey+'">'+key+'</a>');
    // Make the article containing the content, or nothing. Depends on content existing!
    var $article = $('<article id="'+idkey+'">'+((obj[key].html)?obj[key].html:'')+'</article>');
    // Add css rules, if they exist!
    if(obj[key].css) $article.css(obj[key].css);
    // Add the article to the section for content!
    $section.append($article);
  }
  // Okay now we add our navigation to whatever parent was passed to us
  $navParent.append($nav);
  // Same for content!
  $contentParent.append($section);
  // Now that all the page stuff is handled, let's make some interactivity!
}
