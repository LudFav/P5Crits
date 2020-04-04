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
        pagesMax = responseImages.pageMaxImg;
        imagePage = new Pagination(
          "imageBillet-form",
          "pageFieldset",
          pagesMax,
          pageImg
        );
        if (!$.trim(responseImagesRadio)) {
          $(".modal-body.mediaFile").text("Vous n'avez aucun fichier dans votre mediathèque");
          $(".imageFieldset").hide();
          $("#pageFieldset").hide();
        } else {
          //$(".modal-body.media").text("Fichiers");
          $(".imageFieldset").show();
          if(pagesMax<=1){ 
            $("#pageFieldset").hide();
          }
          newResponseImage = $(responseImagesRadio);
          newButtonValidButton = newResponseImage.find(".imageBillet-confirmBtn");
          newButtonValidButton.on("click", function() {
          modalDeleteBillet;
          idFileToUse = $(this).attr("value");
          });
          $(".imageFieldset").html(newResponseImage);
          imagePage;
          fileButtonPagination(pagesMax);
        }
      }
    });
  }
  
  function fileButtonPagination(pagesMax) {
    $(".pageFieldset.page-link.next").one("click", function(e) {
      e.preventDefault();
      page = pageImg;
      if (page < pagesMax) {
        page = page + 1;
        imageField();
      }
    });
    $(".pageFieldset.page-link.prev").on("click", function() {
      if (page > 1) {
        page--;
        imageField();
      }
    });
    $(".pageFieldset.page-link.but").on("click", function() {
      pagebutton = $(this).attr("value");
      page = parseInt(pagebutton);
      imageField();
    });
  }


  $(window).bind("load", function() {
    $(".imgRadioLbl").on("click", function(){
      idImgRadioLbl = $(this).attr("value");
      $('.imgRadioImpt').prop("checked", false);
      $("#image"+idImgRadioLbl).prop("checked", true);
    })
  })


