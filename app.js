window.addEventListener("load", function() {
  document.getElementById("startbutton")
  .addEventListener("click", function( event ) {
      if(this.getAttribute("data-l10n-id") == "restart") {
        this.setAttribute("data-l10n-id", "start");
        document.getElementById("sometext")
         .setAttribute("data-l10n-id", "text");
      } else {
        this.setAttribute("data-l10n-id", "restart");
        document.getElementById("sometext")
         .setAttribute("data-l10n-id", "another-text");
        
      }
  });
});