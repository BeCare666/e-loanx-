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
  var idproductTable = [] 
  var urlImage = []
  var urlImageTakeEdit = []
  var idproductTableVal = true 
  var tableEmail = []
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
        var I_D = "xP8u2M6RnWeH0Z3WguFoU3AfBih2"
        if(userId == I_D){ 
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
        footer:`<a href="mailto:Arcomaritimos5190@gmail.com">Contact technical support.</a>`
        })   
        }
      }
    
    })

    localStorage.setItem('unserconnectuserId', userId);
    database.ref('utilisateurs').once('value', function(snapshot){ 
    document.getElementById('preloader').style.display = "none"
   // Parcourir chaque commande pour les afficher
   snapshot.forEach(function(childSnapshot) {
    const order = childSnapshot.val(); 
    const orderListElement = document.getElementById('order-list');
    const row = document.createElement('tr');
    //row.style.fontSize = "10px";
   
    // Ajouter le contenu des cellules de la ligne
    row.innerHTML = `
      <td>${order.Email}</td>
      <td>${order.Yout_loan_amount} $</td> 
      <td>${order.Laon_duration} $</td>  
      <td>${order.Marital_Statas}</td>
      <td>${order.K_U ? '<i class="bi bi-check-circle-fill"  style="color: green; font-size: 20px;"></i>' : '<i class="bi bi-x-octagon-fill" style="color: red; font-size: 20px;"></i>'}</td>
      <td>${order.I_U ? '<i class="bi bi-check-circle-fill"  style="color: green; font-size: 20px;"></i>' : '<i class="bi bi-x-octagon-fill" style="color: red; font-size: 20px;"></i>'}</td>
      <td>
      <div class="filter" id="filterId">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> 
                <li style="cursor: pointer;"><a data-id="${order.userId}" class="dropdown-item edit-btn" data-toggle="modal" data-target="#productModal">Valider</a></li>
               <li style="cursor: pointer;"><a class="dropdown-item delete-btn" data-id="${order.userId}">Delete</a></li>
              </ul>
            </div>
      </td>
    `; 
    // Ajouter la ligne au tableau
    orderListElement.appendChild(row);
  });
      
       // Add event listener to edit buttons
       document.querySelectorAll('.edit-btn').forEach(function(button) {
        button.addEventListener('click', function() {
           document.getElementById('preloader').style.display = "block"
          var productId = this.getAttribute('data-id');
          idproductTable.push(productId)
          idproductTableVal = false
          editProduct(productId);
        // Valider_le_prêt
        document.getElementById('Valider_le_prêt').addEventListener('click', function(){
           document.getElementById('preloader').style.display = "block"
          const dateActuelle = new Date();
          // Obtenez les composantes de la date et de l'he  
          const jour = dateActuelle.getDate();
          const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
          const annee = dateActuelle.getFullYear();
          const heures = dateActuelle.getHours();
          const minutes = dateActuelle.getMinutes();
          // Formatez la date et l'heure
          const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
          firebase.database().ref('utilisateurs/' + productId).update({
            I_U: true,
            C_U: dateFormatee
        }).then(() => {
           document.getElementById('preloader').style.display = "none"
          Swal.fire({
            title: "Congratulations",
            text: "The is validate",
            icon: "success",
            allowOutsideClick: false,
          }).then((result) => {
              if (result.isConfirmed) {
                 window.location.reload()
              }
          });
        }).catch((error) => {
          Swal.fire({
            title: "Erreur ",
            text: "There is an error: ",
            icon: "error",
            allowOutsideClick: true,
          }); 
        });
        })
        });
      });  

     // delete event listener to edit buttons
       document.querySelectorAll('.delete-btn').forEach(function(button) {
        button.addEventListener('click', function() {
          var productId = this.getAttribute('data-id');
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                database.ref('utilisateurs/' + productId).remove()
                .then(function() {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The user has been deleted.",
                        icon: "success",
                        allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
                })
                .catch(function(error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Error deleting product",
                        icon: "error",
                        allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
                  console.error('Error deleting product: ', error);
                }); 
            }
          });
        });
      });
   // Function to populate modal with product data for editing
   function editProduct(productId) {
    database.ref('utilisateurs/' + productId).once('value', function(snapshot) {
       document.getElementById('preloader').style.display = "none"
      var product = snapshot.val();       
      document.getElementById('Selfie_Photox').src = product.Selfie_Photo;
      document.getElementById('ID_Cardx').src = product.ID_Card;
      document.getElementById('Present_Addressx').value = product.Present_Address;
      document.getElementById('Statex').value = product.State;
      document.getElementById('Cityx').value = product.City;
      document.getElementById('Postal_Zip_Codex').value = product.Postal_Zip_Code;
      document.getElementById('First_Namex').value = product.First_Name;
      document.getElementById('Last_Namex').value = product.Last_Name;
      urlImageTakeEdit.push(product.urlImage)
      $('#productModal').modal('show');  
    });
  }
    })

      function generateCustomID() {
        // Générer un nombre aléatoire entre 0 et 0xFFFFFF (couleur hexadécimale maximale)
        const randomNum = Math.floor(Math.random() * 0xFFFFFF);
    
        // Convertir en chaîne hexadécimale et s'assurer qu'il a 6 caractères
        const hexID = randomNum.toString(16).toUpperCase().padStart(6, '0');
    
        // Ajouter '#' au début
        return `${hexID}`;
        }
        var inputElement = document.getElementById("imageProduct");
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
      // Handle form submission
      document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if(idproductTableVal){
            var idproduct = generateCustomID(); 
            var urlImagex = urlImage.slice(-1).pop(); 
        }else{
            var idproduct = idproductTable.slice(-1).pop();
            if(urlImage.length !=0){
              var urlImagex = urlImage.slice(-1).pop(); 
            }else{
              var urlImagex = urlImageTakeEdit.slice(-1).pop(); 
            }
          
        }
      
       
        var name = document.getElementById('productName').value;
        var description = document.getElementById('productDescription').value;
        var categoryId = document.getElementById('categoryId').value;
        var stock = document.getElementById('productStock').value;
        var priceNormal = document.getElementById('productPriceNormal').value;
        var pricePromo = document.getElementById('productPricePromo').value;
        var delivery = document.getElementById('productDelivery').value;
        const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
        var newProduct = {
          name: name,
          description: description,
          idproduct: idproduct,
          category:categoryId,
          stock: stock,
          priceNormal: priceNormal,
          pricePromo: pricePromo,
          delivery: delivery,
          date:currentDate,
          urlImage:urlImagex ,
        };
    
        // Push the new product to the Firebase database
        database.ref('products/' + idproduct).set(newProduct)
        .then(function() {
            if(idproductTableVal){
                Swal.fire({
                    title: "Congratulations",
                    text: "Product added successfully!",
                    icon: "success",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
            }else{
                Swal.fire({
                    title: "Congratulations",
                    text: "Product updated successfully!",
                    icon: "success",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
            }

          $('#productModal').modal('hide');
          document.getElementById('productForm').reset();
        })
        .catch(function(error) {
            if(idproductTableVal){
                     
                Swal.fire({
                    title: "Error",
                    text: "Error adding product",
                    icon: "error",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
            }else{
                Swal.fire({
                    title: "Error",
                    text: "Error updated product",
                    icon: "error",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
            }

          console.error('Error adding product: ', error);
        });
      });

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