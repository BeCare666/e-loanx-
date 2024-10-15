const firebaseConfig = {
  apiKey: "AIzaSyBh9RfyG1I8joL_tdCnOsZiQ84ay8F6yIQ",
  authDomain: "e-loanx.firebaseapp.com",
  databaseURL: "https://e-loanx-default-rtdb.firebaseio.com",
  projectId: "e-loanx",
  storageBucket: "e-loanx.appspot.com",
  messagingSenderId: "621562055256",
  appId: "1:621562055256:web:b25718dc69b8c436de982d"
  };

firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    var dialCodeTable = []
    var input = $("#mobile_code");
    input.intlTelInput({
    initialCountry: "bj",
    separateDialCode: true,
    // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
    var dialCode = input.intlTelInput("getSelectedCountryData").dialCode;
    dialCodeTable.push(dialCode)
    input.on("countrychange", function(e) {
    var dialCode = input.intlTelInput("getSelectedCountryData").dialCode;
    dialCodeTable.push(dialCode)
    });  
    document.getElementById('smsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var dialCode = dialCodeTable.slice(-1)[0];
    const phoneNumberx = document.getElementById('mobile_code').value;
    var phoneNumber = `+${dialCode}${phoneNumberx}` // 940203458 && phoneuserIDvalue !=="" && /^\d{7,}$/.test(phoneuserIDvalue)
    if( phoneNumber){
      // Obtenir une référence à l'objet d'authentification
        const auth = firebase.auth();
        // Configurer l'application pour envoyer un SMS
        const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');  
        // Envoyer le code de vérification au numéro de téléphone
        auth.signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // Le code de vérification a été envoyé avec succès
            const verificationCode = prompt(i18next.t('INDEXID19'));   
            // Vérifier le code de vérification
            return confirmationResult.confirm(verificationCode);
          })
          .then((result) => {
          // L'utilisateur a été authentifié avec succès
          // console.log('Authentification réussie pour', result.user.phoneNumber); 
           var useruid = result.user.uid
           var phoneNumber = result.user.phoneNumber
           localStorage.setItem('userconnect', useruid)
           localStorage.setItem('userphoneNumber', phoneNumber)
           const askLoanEndVal = localStorage.getItem("askLoanEnd")
           if(!askLoanEndVal){
            window.location.href = "../faceId.html"
           }else{
            window.location.href = "../myaccount.html"
           }
           
           //window.location.href = "../loan-details.html"
          })
          .catch((error) => {
            // Une erreur s'est produite lors de l'envoi du code de vérification ou de l'authentification
            //console.error('Erreur d\'authentification par numéro de téléphone:', error);
            Swal.fire({
                title: "Ooops",
                text: `ERROR`,
                icon: 'error'
              })
          });
    
      
        }else{
          //alert("les données ne sont pas")
          //document.getElementById('preloader').style.display = "none"
        }
    });
    });
           // Obtenez la référence de l'élément input
           const inputElement = document.getElementById("mobile_code");

           // Ajoutez un gestionnaire d'événements oninput pour exécuter la fonction
           inputElement.addEventListener("input", function() {
               validerSaisie(this);
           });
         // Fonction de validation
         function validerSaisie(input) {
           const valeurSaisie = input.value;
           const regexLettresAvecEspaces = /^\d+/;
           input.value = input.value.replace(/[^0-9]/g, "")
           if (!regexLettresAvecEspaces.test(valeurSaisie)) { 
           // Effacez la saisie incorrecte
           input.value = input.value.replace(/\D/g, '');
         
           }
           }