comModPage = 1;

moderedCommentTable();

//TABLE COMMENTAIRES MODERES****************************************************
function moderedCommentTable() {
    $.post({
      url: "admin",
      data: { action: "showCommentModered", 'pageComMod': comModPage },
      success: function(data) {
      responsemod = JSON.parse(data);
      responsemodTable = responsemod.moderedCommentOutput
      comModPagesMax = responsemod.maxPagesComMod;
      comModPagination = new Pagination(
          "#paginationComMod",
          'pageAdminComMod',
          comModPagesMax,
          comModPage
      )
        if (!$.trim(responsemodTable)) {
          $("#moderedCommentTableTitre h2").text("0 commentaire modéré");
          $("#moderedCommentsTable").hide();
          $("#pageAdminComMod").hide();
        } else {
          $('#moderedCommentTableTitre h2').text('Commentaires Modérés');  
          $('#moderedCommentsTable').show();
          if(comModPagesMax<=1){ 
          $("#pageAdminComMod").hide();
          }
          let newModeredCommentTable = $(responsemodTable);
          newButtonUnmodere = newModeredCommentTable.find(".unmodereComBtn");
          newButtonUnmodere.on("click", function() {
            modalUnmodereCom;
            idModComToUnmodere = $(this).attr("value");
          });
          newButtonDeleteCom = newModeredCommentTable.find(".deleteModComBtn");
          newButtonDeleteCom.on("click", function() {
            modalDeleteModCom;
            idModComToDelete = $(this).attr("value");
          });
          $("#tbodyCommentModere").html(newModeredCommentTable);
          comModButtonPagination(comModPagesMax);
        }
      }
    });
}

function comModButtonPagination(comModPagesMax) {
      $(".pageAdminComMod.page-link.next").on("click", function() {
        if (comModPage < comModPagesMax) {
          comModPage++;
          moderedCommentTable();
        }
      });
      $(".pageAdminComMod.page-link.prev").on("click", function() {
        if (comModPage > 1) {
          comModPage--;
          moderedCommentTable();
        }
      });
      $(".pageAdminComMod.page-link.but").on("click", function() {
        comModPageButton = $(this).attr("value");
        comModPage = parseInt(comModPageButton);
        moderedCommentTable();
      });
}

    
function unmodereComBtn(idModComToUnmodere) {
    $.post({
      url: "admin",
      data: { action: "unmodere", 'unmodere': idModComToUnmodere },
      success: function(data) {
        moderedCommentTable();
      }
    });
}
  
function deleteModComBtn(idModComToDelete) {
    $.post({
      url: "admin",
      data: { action: "deleteModCom", 'deleteCom': idModComToDelete },
      success: function(data) {
        moderedCommentTable();
      }
    });
}

//MODAL
modalUnmodereCom = new Modal(document.querySelector("body"), {
    id: "unmodereComModal",
    titre: "Modération",
    type: "confirmation",
    message: "Êtes-vous sur de vouloir rétablir ce commentaire censuré?"
});
modalDeleteModCom = new Modal(document.querySelector("body"), {
    id: "deleteModComModal",
    titre: "Supression",
    type: "confirmation",
    message: "Êtes-vous sur de vouloir supprimer ce commentaire censuré?"
});

//BOUTONS CONFIRMATION MODAL*************************************************
$(window).bind("load", function() {
    $("#modCom-wrapper").hide();

//BOUTONS COMMENTAIRES MODÉRÉ
  $(".unmodereComBtn").on("click", function() {
    idModComToUnmodere = $(this).attr("value");
    $(".unmodereComModal-confirmBtn").attr("value", idModComToUnmodere);
  });
  $(".unmodereComModal-confirmBtn").on("click", function() {
    $(".moderedCommentRow" + idModComToUnmodere).fadeOut("slow", function() {
      unmodereComBtn(idModComToUnmodere);
    });
  });

  $(".deleteModComBtn").on("click", function() {
    idModComToDelete = $(this).attr("value");
    $(".deleteModComModal-confirmBtn").attr("value", idModComToDelete);
  });
  $(".deleteModComModal-confirmBtn").on("click", function() {
    $(".moderedCommentRow" + idModComToDelete).fadeOut("slow", function() {
      deleteModComBtn(idModComToDelete);
    });
  });

})

$("#modComLink").on("click", function() {
    moderedCommentTable();
    comModPagination;
    $("#billet-wrapper").hide();
    $("#docLib-wrapper").hide();
    $("#imgLib-wrapper").hide();
    $("#signalCom-wrapper").hide();
    $("#modCom-wrapper").fadeIn(1000);
  });