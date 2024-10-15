
const firebaseConfig = {
  apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
  authDomain: "arlitfinance.firebaseapp.com",
  databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
  projectId: "arlitfinance",
  storageBucket: "arlitfinance.appspot.com",
  messagingSenderId: "1012825535505",
  appId: "1:1012825535505:web:767da3656b27c1b994edb0"
    };
   firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    // Créer une référence à la base de données Firebase
    const dbRef = firebase.database().ref();

    // Obtenez une référence à l'emplacement contenant les données d'utilisateur
    const usersRef = dbRef.child("utilisateurs");

document.getElementById('preloader').style.display = "none"
function submitmy1(){ 
    //const emailRef = firebase.database().ref('utilisateurs');
       document.getElementById('preloader').style.display = "block"
      //var fullname = document.getElementById('name').value
      //var username = document.getElementById('username').value
      var email = document.getElementById('yourEmail').value;
      var password = document.getElementById('yourPassword').value
      //var phoneuserIDvalue = document.getElementById('phoneuserIDval').value
      if(email &&  password){
      //L'adresse e-mail n'a pas été trouvée
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // L'utilisateur est inscrit avec succès
          const user = userCredential.user;
          const userwId = user.uid;
          localStorage.setItem("wmyuserId", userwId)
          // Envoi de l'e-mail de vérification
          user.sendEmailVerification()
            .then(() => {
            //  window.location.href = "validemail.html"
            //document.getElementById('grid').style.display = "none"
            //document.getElementById('teMainId').style.display = "none"
             document.getElementById('preloader').style.display = "none"
            Swal.fire({
                title:"Succès",
                allowOutsideClick: false,
                html : ` <div class="success-message">
                <p>Vous êtes inscrit avec succès.</p>
                <strong>Consulter votre boîte mail pour valider votre email. Merci !</strong>
              </div> `,
            }).then((result)=>{
              if(result.isConfirmed){
                window.location.href = "pages-login.html"
              }
            })
              
            })
            .catch((error) => {
              // Gestion des erreurs lors de l'envoi de l'e-mail de vérification
              console.error('Erreur lors de l\'envoi de l\'e-mail de vérification :', error);
              alert("Erreur lors de l\'envoi de l\'e-mail de vérification")
            });
        })
        .catch((error) => {
          // Gestion des erreurs lors de l'inscription de l'utilisateur
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.error('Erreur lors de l\'inscription de l\'utilisateur :', errorMessage);
          if (errorCode === 'auth/email-already-in-use') {
          // L'adresse e-mail est déjà utilisée par un autre compte
          // alert('Adresse e-mail déjà utilisée par un autre compte.');
          // L'adresse e-mail a été trouvée
          document.getElementById('preloader').style.display = "none"
          document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
  
          Swal.fire({
          icon: 'error',
          allowOutsideClick: true,
          text : `L'adresse e-mail est déjà utilisée par un autre compte`,
          }) 
          }  
        });
    }else{
    //alert("les données ne sont pas")
   // document.getElementById('preloader').style.display = "none"
   }
  }