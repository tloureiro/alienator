function alienator(){
    var elem = document.getElementById('pagelet_trending_tags_and_topics');
    
    if(elem)
      elem.style.display = "none";
};
setInterval(alienator, 1000);
