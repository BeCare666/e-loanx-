
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
  authDomain: "arlitfinance.firebaseapp.com",
  databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
  projectId: "arlitfinance",
  storageBucket: "arlitfinance.appspot.com",
  messagingSenderId: "1012825535505",
  appId: "1:1012825535505:web:767da3656b27c1b994edb0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  // Reference to the Firebase database
  var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var  userId = user.uid;
    var  userId = user.uid;
    var useremail = user.email;
    //tableEmail.push(useremail)
      localStorage.setItem('unserconnectuserId', userId);
      const userRef = database.ref(`/admin/${userId}`);
      userRef.once("value")
      .then((snapshot) => {
      document.getElementById('preloader').style.display = "none"
      if(!snapshot.exists()){ 
  
      }else{
        if(snapshot.val().USERSTATUS){ 
            var photoDataUrl = 'data:image/png;base64,' + snapshot.val().PPP_PHOTO; 
            document.getElementById('imdId').src = `${photoDataUrl} `
            document.getElementById('nameP').innerHTML = `${snapshot.val().fullname} `
             document.getElementById('namePx').innerHTML = `${snapshot.val().fullname} `
            document.getElementById('PostP').innerHTML = `${snapshot.val().position} ` 

            document.getElementById('imdIdw').src = `${photoDataUrl} `
            document.getElementById('namePw').innerHTML = `${snapshot.val().fullname} `
            document.getElementById('PostPw').innerHTML = `${snapshot.val().position} `
            document.getElementById('emailw').innerHTML = `Email : ${useremail} `
        }else{

        document.getElementById('preloader').style.display = "none"
        Swal.fire({
        title: "Ooops",
        text:"Votre compte est suspendu.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'error',
        footer:`<a href="mailto:Arcomaritimos5190@gmail.com">Contact technical support.</a>`
        })   
        }
      }
    
    })
}else{
  window.location.href = "pages-login.html"
}
})