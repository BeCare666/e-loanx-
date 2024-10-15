// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
    authDomain: "arlitfinance.firebaseapp.com",
    databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
    projectId: "arlitfinance",
    storageBucket: "arlitfinance.appspot.com",
    messagingSenderId: "1012825535505",
    appId: "1:1012825535505:web:767da3656b27c1b994edb0"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
// Authentification Firebase et récupération de l'utilisateur
firebase.auth().onAuthStateChanged(function(user) { 
    if(user) {
        var userId = user.uid;
        alert("User ID: " + userId);

        // Une fois l'utilisateur connecté, on peut créer l'indicateur de progression
        window.addEventListener("DOMContentLoaded", () => {
            const steps = new StepIndicator(".steps", userId);  // On passe userId à StepIndicator
        });

        class StepIndicator {
            /** Élément utilisé pour cet indicateur de progression */
            el = null;
            /** Nombre d'étapes */
            steps = 5;
            _step = 0;

            /** Utilisateur courant (nom) */
            username = '';

            constructor(el, userId) {
                this.el = document.querySelector(el);
                this.userId = userId;  // Stocker l'ID utilisateur

                // Récupérer l'étape et le nom depuis Firebase au chargement
                firebase.database().ref(`utilisateurs/${this.userId}`).once('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        this._step = data.H_U ?? 0;
                        this.username = data.userName ?? '';
                    }
                    this.displayStep(this.step);
                    this.checkExtremes();
                });

                document.addEventListener("click", this.clickAction.bind(this));
            }

            get step() {
                return this._step;
            }

            set step(value) {
                this.displayStep(value);
                this._step = value;
                this.checkExtremes();
            }

            /** Gestion du clic */
            clickAction(e) {
                const button = e.target;
                const actionName = button?.getAttribute("data-action");

                if (actionName === "prev") {
                    this.prev();
                } else if (actionName === "next") {
                    this.promptUserNameAndNext();
                }
            }

            /** Aller à l'étape précédente */
            prev() {
                if (this.step > 0) {
                    --this.step;
                    this.updateStepInFirebase();
                }
            }

            /** Demande un nom à l'utilisateur et passe à l'étape suivante une fois validé */
            promptUserNameAndNext() {
                const userName = prompt("Veuillez entrer votre nom pour passer à l'étape suivante :");

                if (userName) {
                    this.username = userName;

                    // Enregistrer le nom dans Firebase
                    firebase.database().ref(`utilisateurs/${this.userId}`).update({
                        userName: this.username
                    });

                    // Passer à l'étape suivante si possible
                    if (this.step < this.steps - 1) {
                        ++this.step;
                        this.updateStepInFirebase();
                    }
                } else {
                    alert("Vous devez entrer un nom pour continuer.");
                }
            }

            /** Sauvegarder l'étape actuelle dans Firebase */
            updateStepInFirebase() {
                firebase.database().ref(`utilisateurs/${this.userId}`).update({
                    H_U: this.step
                });
            }

            /** Vérifier et désactiver les boutons si nécessaire */
            checkExtremes() {
                const prevBtnEl = document.querySelector(`[data-action="prev"]`);
                const nextBtnEl = document.querySelector(`[data-action="next"]`);

                if (prevBtnEl) {
                    prevBtnEl.disabled = this.step <= 0;
                }
                if (nextBtnEl) {
                    nextBtnEl.disabled = this.step >= this.steps - 1;
                }
            }

            /** Afficher l'étape actuelle dans l'indicateur */
            displayStep(targetStep) {
                const current = "steps__step--current";
                const done = "steps__step--done";

                for (let s = 0; s < this.steps; ++s) {
                    const stepEl = this.el?.querySelector(`[data-step="${s}"]`);
                    stepEl?.classList.remove(current, done);

                    if (s < targetStep) {
                        stepEl?.classList.add(done);
                    } else if (s === targetStep) {
                        stepEl?.classList.add(current);
                    }
                }
            }
        }
    } else {
        alert("Utilisateur non authentifié");
    }
});
