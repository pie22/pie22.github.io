/* 
This is the compiled JS - Source at https://github.com/schliflo/PhotobloggR
*/
"use strict";
! function() {
   var n, t, e, c = function() {
         t = "menu-trigger", e = "menu-open"
      },
      o = function() {
         n.classList.toggle(e)
      },
      u = function() {
         document.getElementById(t).addEventListener("click", function() {
            o()
         })
      },
      i = function() {
         n = document.querySelector("body"), c(), u()
      };
   i()
}();