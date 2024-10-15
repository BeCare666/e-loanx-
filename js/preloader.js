{/*(function ($) {
  "use strict";
  var cites = [];
  cites[0] =
    "We design Banca for the readers, optimizing not for page views or engagement";
  cites[1] = "Banca turns out that context is a key part of learning.";
  cites[2] = "You can create any type of product documentation with Banca";
  cites[3] = "Advanced visual search system powered by Ajax";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");
  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
         $("#preloader").removeClass("loading");
             const welcomw = localStorage.getItem("welcomx")
              if(!welcomw){
              var welcom = "QSDLKFJKSLFKJFKJ"
              localStorage.setItem("welcomx", welcom)
              Swal.fire({
                title: "Welcom in your online Bank.",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Custom image",
                color: "#716add",
                imageUrl: "https://www.enquete-debat.fr/wp-content/uploads/2019/12/Avis-banque-en-ligne.jpeg",
                backdrop: `
                  rgba(0,0,123,0.4)
                `,
                showConfirmButton: false,
                timer: 6000
              });
              setTimeout(()=>{
                  location.reload()
              },6000)
              }
      });
    }, 500);
  });
})(jQuery);*/}

(function ($) {
  "use strict";
  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
         var something = document.getElementById("something");
         something.click()
      });
    }, 500);
  });
})(jQuery);
