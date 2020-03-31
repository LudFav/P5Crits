page = 1;

billetTable();

//TABLE BILLETS**********************************************************
function billetTable() {
    $.post({
      url: "admin",
      data: { action: "showbillet", 'page': page },
      success: function(data) {
        responseBillet = JSON.parse(data);
        responseBilletTable = responseBillet.billetsOutput;
        pagesMax = responseBillet.maxPages;
        billetPage = new Pagination(
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

  // ACTION BILLET

  function deleteBilBtn(idBilletToDelete) {
    $.post({
      url: "admin",
      data: { action: "deleteBillet", deleteBillet: idBilletToDelete },
      success: function(data) {
        billetTable();
      }
    });
  }

// MODALS *******************************************************************
modalDeleteBillet = new Modal(document.querySelector("body"), {
    id: "deleteBillet",
    titre: "Suppression",
    type: "confirmation",
    message: "Êtes-vous sur de vouloir supprimer ce billet?"
  });

//BOUTONS CONFIRMATION MODAL*************************************************
$(window).bind("load", function() {
    $("#billet-wrapper").show();
//BOUTONS EFFACER BILLET
  $(".deleteBilBtn").on("click", function() {
     idBilletToDelete = $(this).attr("value");
     $(".deleteBillet-confirmBtn").attr("value", idBilletToDelete);
   });
   $(".deleteBillet-confirmBtn").on("click", function() {
     $(".billetRow" + idBilletToDelete).fadeOut("slow", function() {
       deleteBilBtn(idBilletToDelete);
     });
   });
});

$("#billetLink").on("click", function() {
    $("#signalCom-wrapper").hide();
    $("#modCom-wrapper").hide();
    $("#docLib-wrapper").hide();
    $("#billet-wrapper").fadeIn(1000);
  });
    