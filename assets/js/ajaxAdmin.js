function logout() {
  $.post({
    url: "login",
    data: { action: "logout" },
    success: function(data) {
      window.location.href = data;
    }
  });
}

function isLoggedin() {
  $.post({
    url: "login",
    data: { action: "isLogged" },
    success: function(data) {
      if (data == "1") {
        let logout = '<a class="logout fas fa-sign-out-alt"></a>';
        $('#login').replaceWith($(logout));
        let adminButton = '<li><a href="admin" class="fas fa-feather-alt"></a></li>';
        $(adminButton).insertBefore($('li.logout'));
      }
    }
  });
}

//FONCTIONS REQUETES AJAX ACTIONS*****************************************


function validateEdit(){
    $("#formEditBillet").on('submit', function(){
    if(!$("#textareaEditC").val() == true){
      $('#alertModal').modal('show');
      return false 
    }  
    return true;
    })
}

function validateAdd(){
  $("#formAddBillet").on('submit', function(){
    if(!$("#textareaB").val() == true){
      $('#alertModal').modal('show');
      return false 
    }  
    return true;
    })
}

//MODAL UPDATE BILLET
modalAlertUpdate =  new Modal(document.querySelector("body"), {
  id: "alertModal",
  titre: "Probleme",
  type: "alert",
  message: "Vous n'avez pas remplie tout les champs"
});

//MODAL RAJOUT IMAGE BILLET
modalRajoutImage =  new Modal(document.querySelector("body"), {
  id: "imageBillet",
  titre: "Ajout d'image",
  type: "mediatheque",
  message: "Veuillez selectionner une image"
});

//MODAL UPLOAD
modalDocFile = new Modal(document.querySelector("body"), {
  id: "docFileModal",
  titre: "Upload de fichier",
  type: "upload",
  message: "Type de fichier attendu :</br> pdf, jpg, jpeg, png, gif, bmp</br>Taille max : 5mo"
});

modalimgFile = new Modal(document.querySelector("body"), {
  id: "imgFileModal",
  titre: "Upload d'image",
  type: "upload",
  message: "type de fichier image attendu : jpg jpeg png gif</br> ou</br> JPG JPEG PNG GIF</br>Taille max : 5mo"
});

//BOUTONS CONFIRMATION MODAL*************************************************
$(window).bind("load", function() {

$(".logout").on("click", function() {
  logout();
});
 
//BOUTONS NOUVEAU DOC
$("#docFileModal-validBtn").on("click", function(){
  showFile()
})
});

$('.imgBilletBtn').on('click', function(){
  $('#imageBillet').modal('show');
})

$(".editBillet").on("click", function(){
  return validateEdit();
})

$(".addBillet").on("click", function(){
  return validateAdd();
})

isLoggedin();



