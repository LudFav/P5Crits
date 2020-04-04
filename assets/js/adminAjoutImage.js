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
        pagesMax = responseImages.maxPages;
        imagePage = new Pagination(
          "#paginationAdminBillet",
          "pageAdminBillet",
          pagesMax,
          page
        );
        if (!$.trim(responseBilletTable)) {
          $("#billetTableTitre h2").text("0 billet posté");
          $("#tableBillet").hide();
          $("#pageAdminBillet").hide();
        } else {
          $("#billetTableTitre h2").text("Billets");
          $("#tableBillet").show();
          if(pagesMax<=1){ 
            $("#pageAdminBillet").hide();
          }
          newBilletTable = $(responseBilletTable);
          newButtonDeleteBillet = newBilletTable.find(".deleteBilBtn");
          newButtonDeleteBillet.on("click", function() {
          modalDeleteBillet;
          idBilletToDelete = $(this).attr("value");
          });
          $("#tbodyBillet").html(newBilletTable);
          billetPage;
          billetButtonPagination(pagesMax);
        }
      }
    });
  }
  
  function billetButtonPagination(pagesMax) {
    $(".pageAdminBillet.page-link.next").one("click", function(e) {
      e.preventDefault();
      if (page < pagesMax) {
        page = page + 1;
        billetTable();
      }
    });
    $(".pageAdminBillet.page-link.prev").on("click", function() {
      if (page > 1) {
        page--;
        billetTable();
      }
    });
    $(".pageAdminBillet.page-link.but").on("click", function() {
      pagebutton = $(this).attr("value");
      page = parseInt(pagebutton);
      billetTable();
    });
  }