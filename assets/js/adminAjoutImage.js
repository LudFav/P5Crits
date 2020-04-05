pageImg = 1;

imageField();

//TABLE BILLETS**********************************************************
function imageField() {
    $.post({
      url: "admin",
      data: { action: "showImageLib", 'pageImg': pageImg },
      success: function(data) {
        responseImages = JSON.parse(data);
        responseImagesRadio = responseImages.imageOutput;
        pagesImgMax = responseImages.pageMaxImg;
        imagePage = new Pagination(
          "#paginationImgForm",
          "pageFieldset",
          pagesImgMax,
          pageImg
        );
        if (!$.trim(responseImagesRadio)) {
          $(".modal-body.mediaFile").text("Vous n'avez aucune image dans votre mediathèque");
          $(".imageFieldset").hide();
          $("#paginationImgForm").hide();
        } else {
          //$(".modal-body.media").text("Fichiers");
          $(".imageFieldset").show();
          if(pagesImgMax<=1){ 
            $("#paginationImgForm").hide();
          }
          newResponseImage = $(responseImagesRadio);
          newButtonValidButton = newResponseImage.find(".imageBillet-confirmBtn");
          newButtonValidButton.on("click", function() {
          idFileToUse = $(this).attr("value");
          });
          $(".imageFieldset").html(newResponseImage);
          imagePage;
          fileButtonPagination(pagesImgMax);
        }
      }
    });
  }
  
  function fileButtonPagination(pagesImgMax) {
    $(".pageFieldset.page-link.next").one("click", function(e) {
      e.preventDefault();
      console.log('next '+pageImg);
      if (pageImg< pagesImgMax) {
        pageImg= pageImg+ 1;
        imageField();
      }
    });
    $(".pageFieldset.page-link.prev").on("click", function() {
      if (pageImg> 1) {
        pageImg--;
        imageField();
        console.log('prev '+pageImg);
      }
    });
    $(".pageFieldset.page-link.but").on("click", function() {
      pagebutton = $(this).attr("value");
      pageImg= parseInt(pagebutton);
      console.log('button  '+pageImg);
      imageField();
    });
  }

      
function idImgToLink(idImgRadioLbl) {
  $.post({
    url: "addBillet",
    data: {action:'inputImage', 'idImage': idImgRadioLbl },
    success: function(data) {
    $('.imgInput').html(data);
    }
  });
}

function idImgToEdit(idImgRadioLbl){
  console.log('test 55')
  $.post({
    url: "update",
    data: {action:'editImage', 'idImage': idImgRadioLbl },
    success: function(data) {
      console.log(data)
      $('.imgInput').replaceWith(data);
    }
  });
}
//MODAL RAJOUT IMAGE BILLET
modalRajoutImage =  new Modal(document.querySelector("body"), {
  id: "imageBillet",
  titre: "Ajout d'image",
  type: "mediatheque",
  message: "Veuillez selectionner une image"
});


//BOUTONS
  $(window).bind("load", function() {
    $(".imgRadioLbl").on("click", function(){
      idImgRadioLbl = $(this).attr("value");
      $('.imgRadioImpt').prop("checked", false);
      $("#image"+idImgRadioLbl).prop("checked", true);
      $(".imageBillet-confirmBtn").attr("value", idImgRadioLbl);
    })

    $('.imageBillet-cancelBtn').on("click", function(){
      $(".imageBillet-confirmBtn").removeAttr( "value" )
    })

    $(".imageBillet-confirmBtn").on("click", function(){
      idImgToLink(idImgRadioLbl)
    })

    $(".imgBilletBtn.edit").on("click", function(){
      $('.imageBillet-confirmBtn').removeClass('imageBillet-confirmBtn').addClass('edit-confirmBtn');
      $('.imageBillet-cancelBtn').removeClass('imageBillet-cancelBtn').addClass('edit-cancelBtn');
      $(".imgRadioLbl").on("click", function(){
        idImgRadioLbl = $(this).attr("value");
        $('.imgRadioImpt').prop("checked", false);
        $("#image"+idImgRadioLbl).prop("checked", true);
        $(".edit-confirmBtn").attr("value", idImgRadioLbl);
      })
    })

    $('.edit-cancelBtn').on("click", function(){
      $(".edit-confirmBtn").removeAttr( "value" );
    })

    $('.edit-confirmBtn').on("click", function(){
      console.log(test)
      idImgToEdit(idImgRadioLbl);
    })

  })


