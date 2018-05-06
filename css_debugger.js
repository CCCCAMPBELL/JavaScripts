   function css_debugger() {
      if (window.hasOwnProperty("is_css_debugging") === false) { 
         is_css_debugging = false; 
      }
   
      if (!is_css_debugging) { 
         var debug_css = document.createElement("style");
         debug_css.type = "text/css";
         debug_css.setAttribute("id", "css_debugger");
         debug_css.textContent = `
            *:not(path):not(g) {
               color: hsla(210, 100%, 100%, 0.9) !important;
               background: hsla(210, 100%,  50%, 0.5) !important;
               outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
               box-shadow: none !important;
             }
           `;
         document.head.appendChild(debug_css);
         is_css_debugging = true;
      }
      else if (is_css_debugging) {
         var remove = document.getElementById("css_debugger");
         remove.parentNode.removeChild(remove);
         is_css_debugging = false;
      }
   }
