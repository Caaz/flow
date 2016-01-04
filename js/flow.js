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

  // viewing is the id link thing that we're viewing!
  var viewing = 0;
  // This updates our navigation's links to have a special class for fancying up with css!
  var updateNav = function() {
    // Grab all the navigation's children!
    $nav.children()
    // Remove their flow-viewing class!
    .removeClass('flow-viewing')
    // Now get the child with the viewing id!
    .eq(viewing)
    // Add in that flow-viewing class!
    .addClass('flow-viewing');
  }
  // Now let's update our navigation to have it asap!
  updateNav();
  // Let's throw in a scroll handler to make all that defining useful!
  $(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    // Divide our scroll amount by height getting a value that should correspond with our navigation!
    // Unless there's other shit on the page. I didn't account for that. Hm.
    // Maybe I could use navParent? For scrolling that'd work.... There's all sorts of issues that could happen with this.
    var at = Math.floor(scroll/height);
    // If our at doesn't equal viewing that means we've switched what we're looking at
    if(at != viewing) {
      viewing = at;
      // So update our navigation.
      updateNav();
    }
  });
}
