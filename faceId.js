const firebaseConfig = {
    apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
  authDomain: "arlitfinance.firebaseapp.com",
  databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
  projectId: "arlitfinance",
  storageBucket: "arlitfinance.appspot.com",
  messagingSenderId: "1012825535505",
  appId: "1:1012825535505:web:767da3656b27c1b994edb0"
  };
const userId = localStorage.getItem("userconnect")
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const userRef = database.ref(`/utilisateurs/${userId}`);
userRef.once("value")
.then((snapshot) => {
if(!snapshot.exists()){
    let scanningLineY = 0;
    let canvas, context, video, latestDetections = []; // Initialiser la variable avec un tableau vide
    async function startVideo() {
        video = document.getElementById('videoInput');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.addEventListener('loadedmetadata', setCanvasSize);
        } catch (error) {
            console.error("Erreur d'accès à la caméra :", error);
        }
    }
    
    async function detectFaces() {
        canvas = document.getElementById('overlay');
        context = canvas.getContext('2d');
    
        // Charger les modèles de Face API.js
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    
        const displaySize = { width: canvas.width, height: canvas.height };
        faceapi.matchDimensions(canvas, displaySize);
    
        setInterval(async () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
    
            // Détecter les visages
            latestDetections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            const resizedDetections = faceapi.resizeResults(latestDetections, displaySize);
    
            // Dessiner les résultats
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    
            // Dessiner la barre de scanning
            drawScanningLine();
        }, 100);
    }
    
    function drawScanningLine() {
        scanningLineY += 5; // Vitesse de la barre
        if (scanningLineY > canvas.height) {
            scanningLineY = 0; // Réinitialisation de la barre en haut
        }
    
        // Dessiner la barre de scanning
        context.beginPath();
        context.moveTo(0, scanningLineY);
        context.lineTo(canvas.width, scanningLineY);
        context.strokeStyle = 'rgba(0, 255, 0, 0.8)'; // Couleur verte de la barre
        context.lineWidth = 3; // Épaisseur de la barre
        context.stroke();
    }
    
    function capturePhoto() {
        const errorMsg = document.getElementById('captureBtn'); 
        document.getElementById('preloader').style.display = "block"
        
        // Vérifier si latestDetections est défini et contient au moins un visage

            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = video.videoWidth;
            tempCanvas.height = video.videoHeight;
            const tempContext = tempCanvas.getContext('2d');
            tempContext.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
    
            // Convertir l'image en Blob
            tempCanvas.toBlob(async (blob) => {
                const userId = localStorage.getItem("userconnect")
                // Créer une référence dans Firebase Storage pour l'image
                const storageRef = firebase.storage().ref('images/' + userId + '/photo_capture.png');               
                try {
                    // Téléverser l'image Blob dans Firebase Storage
                    const snapshot = await storageRef.put(blob);
                    
                    // Obtenir l'URL de l'image téléversée
                    const downloadURL = await snapshot.ref.getDownloadURL();
                    
                    // Enregistrer les informations utilisateur dans la base de données avec l'URL de l'image
                    await firebase.database().ref('utilisateurs/' + userId).update({
                        userId : userId, 
                        Selfie_Photo: downloadURL, // Stocker l'URL de la photo 
                    });
                    document.getElementById('preloader').style.display = "none"
                    document.getElementById('divvideoInput').style.display = "none"
                    // Afficher un message de succès à l'utilisateur
                    Swal.fire({
                      title: i18next.t("DEPARTMENTS6"),
                      text: i18next.t("DEPARTMENTS7"),
                      icon: "success",
                      allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                           window.location.href = "../loan-details.html"
                        }
                    });
    
                } catch (error) { 
                    // En cas d'erreur lors du téléversement ou de l'enregistrement
                    Swal.fire({
                      title: i18next.t("INDEXID13"),
                      text: i18next.t("INDEXID15"),
                      icon: "error",
                      allowOutsideClick: false,
                    });
                }
            }, 'image/png');
    
            // Cacher le message d'erreur en cas de succès
            errorMsg.style.display = 'none';
         // Afficher un message d'erreur si aucun visage n'est détecté


    }
     
    setTimeout(() => { 
        const errorMsg = document.getElementById('captureBtn'); 
        errorMsg.style.display = 'block';
        
        document.getElementById('captureBtn').addEventListener("click", capturePhoto, )
        
     }, 5000);
    
    // Ajuste le canvas en fonction de la vidéo
    function setCanvasSize() {
        const canvas = document.getElementById('overlay');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    }
    
    // Démarrer la vidéo et les détections
    startVideo().then(detectFaces);
     
}else{
    if(snapshot.val().STEP3){
    window.location.href = "account.html"
    } else{
        window.location.href = "../loan-details.html"
    }
}
})
