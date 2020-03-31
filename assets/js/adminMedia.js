pageDoc = 1;
pageImg = 1;

docTable();
imgTable();

//TABLE DOC**********************************************************
function docTable() {
    $.post({
      url: "admin",
      data: { action: "showDocFile", 'pageDocFile': pageDoc },
      success: function(data) {
        responseDoc= JSON.parse(data);
        responseDocTable = responseDoc.docFileOutput;
        docPagesMax = responseDoc.docFileMaxPages;
        docPage = new Pagination(
          "#paginationAdminDoc",
          "pageAdminDoc",
          docPagesMax,
          pageDoc
        );
        
        if (!$.trim(responseDocTable)) {
          $(".docTable h5").text("0 document enregistré");
          $("#tableDocLib").hide();
          $("#pageAdminDoc").hide();
        } else {
          $(".docTable h5").text("Documents PDF");
          $("#tableDocLib").show();
          if(docPagesMax<=1){ 
            $("#pageAdminDoc").hide();
          }
          newDocTable = $(responseDocTable);
          newButtonDeleteDoc = newDocTable.find(".deleteDocFile");
          newButtonDeleteDoc.on("click", function() {
          modalDeleteDoc;
          idDocToDelete = $(this).attr("value");
          docNameToDel = $('.docname'+idDocToDelete).attr("value");
          passValueDoc(idDocToDelete, docNameToDel)
          });
          $("#tbodyDocLibrary").html(newDocTable);
          pageDoc;
          docButtonPagination(docPagesMax);
        }
      }
    });
  }
  
  function docButtonPagination(docPagesMax) {
    $(".pageAdminDoc.page-link.next").one("click", function(e) {
      e.preventDefault();
      if (pageDoc < docPagesMax) {
        pageDoc = pageDoc + 1;
        docTable();
      }
    });
    $(".pageAdminDoc.page-link.prev").on("click", function() {
      if (pageDoc > 1) {
        pageDoc--;
        docTable();
      }
    });
    $(".pageAdminDoc.page-link.but").on("click", function() {
      pagebutton = $(this).attr("value");
      pageDoc = parseInt(pagebutton);
      docTable();
    });
  }


  function imgTable() {
    $.post({
      url: "admin",
      data: { action: "showImgFile", 'pageImgFile': pageImg },
      success: function(data) {

        responseImg= JSON.parse(data);
        responseImgTable = responseImg.imgFileOutput;
        imgPagesMax = responseImg.imgFileMaxPages;
        console.log('image pages max :'+imgPagesMax)
        imgPage = new Pagination(
          "#paginationAdminImg",
          "pageAdminImg",
          imgPagesMax,
          pageImg
        );
        if (!$.trim(responseImgTable)) {
          $(".imgTable h5").text("0 image enregistrée");
          $("#tableImgLib").hide();
          $("#pageAdminImg").hide();
        } else {
          $(".imgTable h5").text("Images");
          $("#tableImgLib").show();
          if(imgPagesMax<=1){ 
            $("#pageAdminImg").hide();
          }
          newImgTable = $(responseImgTable);
          newButtonDeleteImg = newImgTable.find(".deleteImgFile");
          newButtonDeleteImg.on("click", function() {
          modalDeleteImg;
          idImgToDelete = $(this).attr("value");
          imgNameToDel = $('.thumbnail.file'+idImgToDelete).attr("alt");
          passValueImg(idImgToDelete, imgNameToDel);
          });
          $("#tbodyImgLibrary").html(newImgTable);
          pageImg;
          imgButtonPagination(imgPagesMax);
        }
      }
    });
  }
  
  function imgButtonPagination(imgPagesMax) {
    $(".pageAdminImg.page-link.next").one("click", function(e) {
      e.preventDefault();
      if (pageImg < imgPagesMax) {
        pageImg = pageImg + 1;
        imgTable();
      }
    });
    $(".pageAdminImg.page-link.prev").on("click", function() {
      if (pageImg > 1) {
        pageImg--;
        imgTable();
      }
    });
    $(".pageAdminImg.page-link.but").on("click", function() {
      pagebutton = $(this).attr("value");
      pageImg = parseInt(pagebutton);
      imgTable();
    });
  }


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

  function deleteDocument(idDocToDelete, docNameToDel) {
    $.post({
      url: "admin",
      data: { action: "deleteThisDoc", 'deleteDoc': idDocToDelete, 'deleteDocUrl':docNameToDel},
      success: function(data) {
        //console.log(data)
        docTable();
      }
    });
  }

  function deleteImage(idImgToDelete, imgNameToDel) {
    console.log('test delete image');
    $.post({
      url: "admin",
      data: { action: "deleteThisImg", 'deleteImg': idImgToDelete, 'deleteImgUrl': imgNameToDel},
      success: function(data) {
        console.log(data);
        imgTable();
      }
    });
  }

  function passValueDoc(idDocToDelete, docNameToDel){
    $(".deleteDocFileModal-confirmBtn").attr({value: idDocToDelete, "data-name": docNameToDel});
  }
  function passValueImg(idImgToDelete, imgNameToDel){
    $(".deleteImgFileModal-confirmBtn").attr({value: idImgToDelete, "data-name": imgNameToDel});
  }
//MODAL
modalDeleteDoc = new Modal(document.querySelector("body"), {
  id: "deleteDocFileModal",
  titre: "Suppression de document",
  type: "confirmation",
  message: "Êtes-vous sur de vouloir supprimer ce document?"
});

modalDeleteImg = new Modal(document.querySelector("body"), {
  id: "deleteImgFileModal",
  titre: "Supression d'image",
  type: "confirmation",
  message: "Êtes-vous sur de vouloir supprimer cette image?"
});


  $(window).bind("load", function() {
    
  $(".deleteDocFile").on("click", function() {
    idDocToDelete = $(this).attr("value");
    docNameToDel = $('.docname'+idDocToDelete).attr("value");
    passValueDoc(idDocToDelete, docNameToDel)
  });
  $(".deleteDocFileModal-confirmBtn").on("click", function() {
    $(".docFileRow" + idDocToDelete).fadeOut("slow", function() {
      deleteDocument(idDocToDelete, docNameToDel);
    });
  });

  $(".deleteImgFile").on("click", function() {
    idImgToDelete = $(this).attr("value");
    imgNameToDel = $('.thumbnail.file'+idImgToDelete).attr("alt");
    passValueImg(idImgToDelete, imgNameToDel);
  });
  $(".deleteImgFileModal-confirmBtn").on("click", function() {
    $(".imgFileRow" + idImgToDelete).fadeOut("slow", function() {
      deleteImage(idImgToDelete, imgNameToDel);
    });
  });

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
                    docTable()  
                    imgTable()
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
  });

  
$("#docLib-wrapper").hide();
$("#docLibraryLink").on("click", function(){
  $("#billet-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#signalCom-wrapper").hide();
  $("#docLib-wrapper").fadeIn(1000);
})

