        // Sélectionner l'input
        let inputElement = document.getElementById("cardnumberx");

        // Fonction pour nettoyer l'input
        function nettoyerInput(event) {
            // Supprime les caractères spéciaux et les espaces
            let valeur = event.target.value.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
            
            // Limiter la longueur à 13 caractères
            if (valeur.length > 13) {
                valeur = valeur.slice(0, 13);
            }
            
            event.target.value = valeur; // Met à jour la valeur de l'input
        }
        inputElement.addEventListener("input", nettoyerInput);
          
                // Sélectionner l'input
                let inputElementx = document.getElementById("expirationdate");

                // Fonction pour nettoyer l'input
                function nettoyerInput(event) {
                    // Supprime les caractères spéciaux et les espaces
                    let valeur = event.target.value.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
                    
                    // Limiter la longueur à 13 caractères
                    if (valeur.length > 13) {
                        valeur = valeur.slice(0, 13);
                    }
                    
                    event.target.value = valeur; // Met à jour la valeur de l'input
                }
                inputElementx.addEventListener("input", nettoyerInput);
                  