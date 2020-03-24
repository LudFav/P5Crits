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
        docPage = new AdminPagination(
          "#paginationAdminDoc",
          "pageAdminDoc",
          docPagesMax,
          pageDoc
        );
        if (!$.trim(responseDocTable)) {
          $("#docTableTitre h2").text("0 document enregistré");
          $("#tableDoc").hide();
          $("#pageAdminDoc").hide();
        } else {
          $("#docTableTitre h2").text("Documents PDF");
          $("#tableDoc").show();
          if(docPagesMax<=1){ 
            $("#pageAdminDoc").hide();
          }
          newDocTable = $(responseDocTable);
          newButtonDeleteDoc = newDocTable.find(".deleteDocFile");
          newButtonDeleteDoc.on("click", function() {
          modalDeleteDoc;
          idDocToDelete = $(this).attr("value");
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
        imgPage = new AdminPagination(
          "#paginationAdminImg",
          "pageAdminImg",
          imgPagesMax,
          pageImg
        );
        if (!$.trim(responseImgTable)) {
          $("#imgTableTitre h2").text("0 image enregistrée");
          $("#tableImg").hide();
          $("#pageAdminImg").hide();
        } else {
          $("#imgTableTitre h2").text("Images");
          $("#tableImg").show();
          if(imgPagesMax<=1){ 
            $("#pageAdminImg").hide();
          }
          newImgTable = $(responseImgTable);
          newButtonDeleteImg = newImgTable.find(".deleteImgFile");
          newButtonDeleteImg.on("click", function() {
          modalDeleteImg;
          idImgToDelete = $(this).attr("value");
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



