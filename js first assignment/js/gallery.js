/*Name this external file gallery.js*/

var textOfDiv = "";

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image

       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

        var elm = document.getElementById("image");
       //storing the dive text
       textOfDiv = elm.innerHTML;

       //No.1
       var src = previewPic.src;
       console.log(src);
       
       elm.style.backgroundColor = "#ff0000";
       elm.style.backgroundImage = "url(" + src + ")";

       //No.2 
       elm.innerHTML = previewPic.alt;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */

       //No.1
       var elm = document.getElementById("image");
       elm.style.backgroundColor = "#8e68ff";
       elm.style.backgroundImage = "url('')";

       //No.2
       elm.innerHTML = textOfDiv;
           
       }