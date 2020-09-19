document.onreadystatechange = function(){
  if(document.readyState == "complete"){
    var maxLines = 10,
        textarea = document.getElementById('demo');

    var autoGrowTextarea = new Autogrow(textarea, maxLines);
  }
}