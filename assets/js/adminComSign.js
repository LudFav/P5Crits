comSignPage = 1;
commentTable();
//TABLE COMMENTAIRES SIGNALÉS********************************************
function commentTable() {
    $.post({
      url: "admin",
      data: { action: "showCommentSignaled", 'pageComSign': comSignPage },
      success: function(data) {
        response = JSON.parse(data);
        responseTable = response.commentOutput;
        comSignPagesMax = response.maxComSignPages;
        comSignPagination = new Pagination(
          "#paginationComSign",
          "pageAdminComSign",
          comSignPagesMax,
          comSignPage
        );
        if (!$.trim(responseTable)) {
          $("#commentTableTitre h3").text("0 commentaire signalé");
          $("#tableComments").hide();
          $("#pageAdminComSign").hide();
        } else {
          $('#commentTableTitre h3').text('Commentaires Signalés');  
          $('#tableComments').show();
          if(comSignPagesMax<=1){
            $("#pageAdminComSign").hide();
          }
          let newCommentTable = $(responseTable);
          newButtonUnsignal = newCommentTable.find(".unsignalComBtn");
          newButtonUnsignal.on("click", function() {
            modalUnsignalCom;
            idComToUnsignal = $(this).attr("value");
          });
          newButtonModere = newCommentTable.find(".modereComBtn");
          newButtonModere.on("click", function() {
            modalModereCom;
            idComToModere = $(this).attr("value");
          });
  
          newButtonDeleteCom = newCommentTable.find(".deleteComBtn");
          newButtonDeleteCom.on("click", function() {
            modalDeleteCom;
            idComToDelete = $(this).attr("value");
          });
          
          $("#tbodyComment").html(newCommentTable);
          comSignButtonPagination(comSignPagesMax);
        }
      }
    });
  }
  
  function comSignButtonPagination(comSignPagesMax) {
    $(".pageAdminComSign.page-link.next").on("click", function() {
      if (comSignPage < comSignPagesMax) {
        comSignPage++;
        commentTable();
      }
    });
    $(".pageAdminComSign.page-link.prev").on("click", function() {
      if (comSignPage > 1) {
        comSignPage--;
        commentTable();
      }
    });
    $(".pageAdminComSign.page-link.but").on("click", function() {
      comSignPageButton = $(this).attr("value");
      comSignPage = parseInt(comSignPageButton);
      commentTable();
    });
  }
// ACTIONS 

  function unsignalCom(idComToUnsignal) {
    $.post({
      url: "admin",
      data: { action: "unsignal", comToUnsignal: idComToUnsignal },
      success: function(data) {
        commentTable();
      }
    });
  }
  
  function modereComBtn(idComToModere) {
    $.post({
      url: "admin",
      data: { action: "moderer", 'modere': idComToModere },
      success: function(data) {
        commentTable();
      }
    });
  }
  
  function deleteComBtn(idComToDelete) {
    $.post({
      url: "admin",
      data: { action: "deleteComment", 'deleteCom': idComToDelete },
      success: function(data) {
        commentTable();
      }
    });
  }
 
//COMMENTAIRES SIGNALÉ
modalUnsignalCom = new Modal(document.querySelector("body"), {
    id: "unsignalComModal",
    titre: "Restauration",
    type: "confirmation",
    message: "Êtes-vous sur de ne plus vouloir considérer ce commentaire signalé?"
  });
  modalModereCom = new Modal(document.querySelector("body"), {
    id: "modereComModal",
    titre: "Modération",
    type: "confirmation",
    message: "Êtes-vous sur de vouloir modérer ce commentaire?"
  });
  modalDeleteCom = new Modal(document.querySelector("body"), {
    id: "deleteComModal",
    titre: "Supression",
    type: "confirmation",
    message: "Êtes-vous sur de vouloir supprimer ce commentaire?"
  });

  
//BOUTONS CONFIRMATION MODAL*************************************************
$(window).bind("load", function() {
    $("#signalCom-wrapper").hide();
//BOUTONS COMMENTAIRES SIGNALÉS

  $(".unsignalComBtn").on("click", function() {
    idComToUnsignal = $(this).attr("value");
    $(".unsignalComModal-confirmBtn").attr("value", idComToUnsignal);
  });
  $(".unsignalComModal-confirmBtn").on("click", function() {
    $(".signaledCommentRow" + idComToUnsignal).fadeOut("slow", function() {
      unsignalCom(idComToUnsignal);
    });
  });

  $(".modereComBtn").on("click", function() {
    idComToModere = $(this).attr("value");
    $(".modereComModal-confirmBtn").attr("value", idComToModere);
  });
  $(".modereComModal-confirmBtn").on("click", function() {
    $(".signaledCommentRow" + idComToModere).fadeOut("slow", function() {
      modereComBtn(idComToModere);
      moderedCommentTable();
    });
  });

  $(".deleteComBtn").on("click", function() {
    idComToDelete = $(this).attr("value");
    $(".deleteComModal-confirmBtn").attr("value", idComToDelete);
  });
  $(".deleteComModal-confirmBtn").on("click", function() {
    $(".signaledCommentRow" + idComToDelete).fadeOut("slow", function() {
      deleteComBtn(idComToDelete);
    });
  });

});
$("#signalComLink").on("click", function() {
    commentTable();
    comSignPagination;
    $("#billet-wrapper").hide();
    $("#modCom-wrapper").hide();
    $("#docLib-wrapper").hide();
    $("#imgLib-wrapper").hide();
    $("#signalCom-wrapper").fadeIn(1000);
  });