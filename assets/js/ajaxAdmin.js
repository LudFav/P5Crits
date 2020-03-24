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

function addImgFile(){
  $.post({
    url:"admin",
    data: { action: "addImg"},
    success: function(data) {
      console.log(data);
    }
  })
}

function showFile(){
  console.log('test bouton validation')
  $.post({
    url:"upload",
    data: {action:"showFiles"},
    success: function(data) {
      console.log(data);
      console.log('test ajax')
    }
  })
}

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

//DEBUT DRAGNDROP
  $(document).ready(function(){  
    $('.file_drag_area').on('dragover', function(){  
         $(this).addClass('file_drag_over');  
         return false;  
    });  
    $('.file_drag_area').on('dragleave', function(){  
         $(this).removeClass('file_drag_over');  
         return false;  
    });  
    $('.file_drag_area').on('drop', function(e){  
         e.preventDefault();  
         $(this).removeClass('file_drag_over');  
         var formData = new FormData();  
         var files_list = e.originalEvent.dataTransfer.files;  
         
         for(var i=0; i<files_list.length; i++)  
         {  
              formData.append('file[]', files_list[i]);  
         }  
      
         $.ajax({  
              url:"upload",  
              method:"POST",  
              data: formData,  
              contentType:false,  
              cache: false,  
              processData: false,  
              success:function(data){  
               
                response = JSON.parse(data);
                responseThumb = response.output;
                $("#uploadfile").html(responseThumb);  
              }  
         })  
    });  
});  

function addThumbnail(data){
  $("#uploadfile h1").remove(); 
  var len = $("#uploadfile div.thumbnail").length;

  var num = Number(len);
  num = num + 1;

  var name = data.name;
  var size = convertSize(data.size);
  var src = data.src;

  // Creating an thumbnail
  $("#uploadfile").append('<div id="thumbnail_'+num+'" class="thumbnail"></div>');
  $("#thumbnail_"+num).append('<img src="'+src+'" width="100%" height="78%">');
  $("#thumbnail_"+num).append('<span class="size">'+size+'<span>');
}

// Bytes conversion
function convertSize(size) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (size == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
  return Math.round(size / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// FIN DRAGNDROP

$(".logout").on("click", function() {
  logout();
});
 
//BOUTONS NOUVEAU DOC
$("#docFileModal-validBtn").on("click", function(){
  showFile()
})
});

$(".editBillet").on("click", function(){
  return validateEdit();
})

$(".addBillet").on("click", function(){
  return validateAdd();
})

isLoggedin();



$("#docLib-wrapper").hide();
$("#imgLib-wrapper").hide();

$("#docLibraryLink").on("click", function(){
  $("#billet-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#signalCom-wrapper").hide();
  $("#imgLib-wrapper").hide();
  $("#docLib-wrapper").fadeIn(1000);
})
$("#imgLibraryLink").on("click", function(){
  $("#billet-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#signalCom-wrapper").hide();
  $("#docLib-wrapper").hide();
  $("#imgLib-wrapper").fadeIn(1000);
})