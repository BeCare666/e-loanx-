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
  var tableEmail = []
  var urlImage = []
  // Reference to the Firebase database
  var database = firebase.database();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var  userId = user.uid;
    var useremail = user.email;
    tableEmail.push(useremail)
      localStorage.setItem('unserconnectuserId', userId);
      const userRef = database.ref(`/admin/${userId}`);
      userRef.once("value")
      .then((snapshot) => {
      document.getElementById('preloader').style.display = "none"
      if(!snapshot.exists()){ 
        $('#staticBackdrop').modal('show'); 
  
      }else{
        if(snapshot.val().USERSTATUS){
          var photoDataUrl = 'data:image/png;base64,' + snapshot.val().PPP_PHOTO;
          document.getElementById('imdId').src = `${photoDataUrl} `
          document.getElementById('nameP').innerHTML = `${snapshot.val().fullname} `
           document.getElementById('namePx').innerHTML = `${snapshot.val().fullname} `
          document.getElementById('PostP').innerHTML = `${snapshot.val().position} ` 
        }else{

        document.getElementById('preloader').style.display = "none"
        Swal.fire({
        title: "Ooops",
        text:"Votre compte est suspendu.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'error',
        footer:`<a href="mailto:Harlitfinances5190@gmail.com">Contact technical support.</a>`
        })   
        }
      }
    
    })

    }else{
      window.location.href = "pages-login.html"
    }
  });



  var inputElement = document.getElementById("urlImageId");
  // Ajoutez un gestionnaire d'événements pour écouter le changement de fichier
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {  
  // Récupérez le fichier sélectionné par l'utilisateur
  var file = this.files[0];
  console.log("Fichier sélectionné : ", file);

  // Créez une nouvelle instance de FileReader
  var reader = new FileReader();

  // Ajoutez un gestionnaire d'événements pour écouter la fin de la lecture du fichier
  reader.onload = function(event) {
      // Créez une nouvelle instance d'image
      var img = new Image();

      // Définissez le gestionnaire d'événements pour lorsque l'image est chargée
      img.onload = function() {
      const minWidth = 300; // La largeur minimale souhaitée
      const minHeight = 300; // La longeur minimale souhaitée
      if (img.width >= minWidth && img.height >= minHeight) { 
      // Créez un élément canvas
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');

      // Déterminez les dimensions de l'image redimensionnée
      var maxWidth = 800;
      var maxHeight = 600;
      var width = img.width;
      var height = img.height;

      // Vérifiez si l'image doit être redimensionnée
      if (width > maxWidth || height > maxHeight) {
          // Calculez le facteur de redimensionnement
          var ratio = Math.min(maxWidth / width, maxHeight / height);

          // Appliquez le redimensionnement
          width *= ratio;
          height *= ratio;
      }

      // Définissez les dimensions du canvas
      canvas.width = width;
      canvas.height = height;

      // Dessinez l'image sur le canvas avec les nouvelles dimensions
      context.drawImage(img, 0, 0, width, height);

      // Obtenez le contenu de l'image redimensionnée sous forme de base64
      var base64Content = canvas.toDataURL('image/jpeg');
      base64Content = base64Content.replace(/^data:image\/jpeg;base64,/, '');
      console.log("Contenu en base64 : ", base64Content);
      urlImage.push(base64Content)
      // ...
      }else{
          Swal.showValidationMessage(i18next.t('IDTRANSLATEFORM105'));
          //alert(`Votre image est trop pétite. Veuillez sélectionner une image d'au moins 300x300 pixels.`)
          inputElement.value = ""
      }
      };

      // Définissez la source de l'image comme le contenu du fichier
      img.src = event.target.result;
  };

  // Commencez la lecture du fichier
  reader.readAsDataURL(file);
  }
  function submitmy(){
    var name = document.getElementById('Name').value;
    var description = document.getElementById('Description').value; 
    var positionval = document.getElementById("positionId").value;
      const urlImagex = urlImage.slice(-1).pop();
      const unserconnectuserId = localStorage.getItem("unserconnectuserId")
      firebase.database().ref('admin/' + unserconnectuserId).set({ 
          userId : unserconnectuserId,
          email: tableEmail[0],
          fullname: name,
          PPP_PHOTO :urlImagex,
          USERSTATUS : true, 
          MESSAGES : "", 
          About_you: description,
          position: positionval                                                     
          }).then(() => {
          document.getElementById('preloader').style.display = "none"  
          Swal.fire({
          title: "Félicitations",
          text: "Votre compte a été finalisé !",
          icon: "success",
           allowOutsideClick: false,
          }).then((result)=>{
            if(result.isConfirmed){
              location.reload()
            }
          })
          }).catch((error)=>{
          Swal.fire({
          title: "Erreur ",
          text: "there is an error",
          icon: "error",
           allowOutsideClick: false,
          })
          console.log(error)
          })
  }