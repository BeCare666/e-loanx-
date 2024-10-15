function generateCustomID() {
    // Générer un nombre aléatoire entre 0 et 0xFFFFFF (couleur hexadécimale maximale)
    const randomNum = Math.floor(Math.random() * 0xFFFFFF);

    // Convertir en chaîne hexadécimale et s'assurer qu'il a 6 caractères
    const hexID = randomNum.toString(16).toUpperCase().padStart(6, '0');

    // Ajouter '#' au début
    return `${hexID}`;
    }

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var idproduct = generateCustomID() 
    const urlImagex = urlImage.slice(-1).pop();
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