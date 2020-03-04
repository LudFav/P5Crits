
page = 1;
comSignPage = 1;
comModPage = 1;

billetTable();
commentTable();
moderedCommentTable();

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


//TABLE BILLETS**********************************************************
function billetTable() {
  $.post({
    url: "admin",
    data: { action: "showbillet", 'page': page },
    success: function(data) {
      responseBillet = JSON.parse(data);
      responseBilletTable = responseBillet.billetsOutput;
      pagesMax = responseBillet.maxPages;
      billetPage = new AdminPagination(
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

//OBJET PAGINATION***********************************************************
function AdminPagination(element, paginationId, pagesMax, pageName) {
  this.element = element;
  this.paginationId = paginationId;
  this.pagesMax = pagesMax;
  this.pageName = pageName;
  $(element).html("");
  numPage = pageName;
  pagesmax = pagesMax;
  pageNav = 2;

  let pagination = $(
    '<nav aria-label="Page navigation ' +
      paginationId +
      '" id="' +
      paginationId +
      '"></nav>'
  ).appendTo($(element));
  let paginationUl = $(
    '<ul class="' + paginationId + ' paginationUl"></ul>'
  ).appendTo($(pagination));

  let paginationPrev = $(
    '<li class="page-item"><button class="' +
      paginationId +
      ' page-link prev">Previous</button></li>'
  ).appendTo($(paginationUl));

  for (let i = numPage - pageNav; i < numPage; i++) {
    if (i > 0) {
      let leftPage = $(
        '<li class="page-item"><a class="' +
          paginationId +
          ' page-link but left" value=' +
          i +
          ">" +
          i +
          "</a></li>"
      );
      $(leftPage).appendTo($(paginationUl));
    }
  }

  let currentPage = $(
    '<li class="page-item current"><p class="' +
      paginationId +
      '  page-link active" value="' +
      numPage +
      '">' +
      numPage +
      "</p></li>"
  ).appendTo($(paginationUl));

  for (let j = numPage + 1; j <= pagesMax; j++) {
    let rightPage = $(
      '<li class="page-item"><a class="' +
        paginationId +
        ' page-link but right" value=' +
        j +
        ">" +
        j +
        "</a></li>"
    );
    $(rightPage).appendTo($(paginationUl));
    if (j >= numPage + pageNav) {
      break;
    }
  }

  let paginationNext = $(
    '<li class="page-item"><button class="' +
      paginationId +
      ' page-link next">Next</button></li>'
  ).appendTo(paginationUl);

  $(paginationPrev).hide();
  if (pageName > 1) {
    $(paginationPrev).show();
  } else {
    $(paginationPrev).hide();
  }

  if (pageName >= pagesmax) {
    $(paginationNext).hide();
  } else {
    $(paginationNext).show();
  }
}

//TABLE COMMENTAIRES SIGNALÉS********************************************
function commentTable() {
  $.post({
    url: "admin",
    data: { action: "showCommentSignaled", 'pageComSign': comSignPage },
    success: function(data) {
      response = JSON.parse(data);
      responseTable = response.commentOutput;
      comSignPagesMax = response.maxComSignPages;
      comSignPagination = new AdminPagination(
        "#paginationComSign",
        "pageAdminComSign",
        comSignPagesMax,
        comSignPage
      );
      if (!$.trim(responseTable)) {
        $("#commentTableTitre h2").text("0 commentaire signalé");
        $("#tableComments").hide();
        $("#pageAdminComSign").hide();
      } else {
        $('#commentTableTitre h2').text('Commentaires Signalés');  
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
//TABLE COMMENTAIRES MODERES****************************************************
function moderedCommentTable() {
  $.post({
    url: "admin",
    data: { action: "showCommentModered", 'pageComMod': comModPage },
    success: function(data) {
    responsemod = JSON.parse(data);
    responsemodTable = responsemod.moderedCommentOutput
    comModPagesMax = responsemod.maxPagesComMod;
    comModPagination = new AdminPagination(
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

//FONCTIONS REQUETES AJAX ACTIONS*****************************************

function deleteBilBtn(idBilletToDelete) {
  $.post({
    url: "admin",
    data: { action: "deleteBillet", deleteBillet: idBilletToDelete },
    success: function(data) {
      billetTable();
    }
  });
}

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


//BOUTON VALIDER Form update


// MODALS *******************************************************************

//BILLETS
modalDeleteBillet = new Modal(document.querySelector("body"), {
  id: "deleteBillet",
  titre: "Suppression",
  type: "confirmation",
  message: "Êtes-vous sur de vouloir supprimer ce billet?"
});

//COMMENTAIRES SIGNALÉ
modalUnsignalCom = new Modal(document.querySelector("body"), {
  id: "unsignalComModal",
  titre: "Restauration",
  type: "confirmation",
  message: "Êtes-vous sur de vouloir sortir ce commentaire des commentaires signalés?"
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
//COMMENTAIRES MODÉRÉ
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

//MODAL UPDATE BILLET
modalAlertUpdate =  new Modal(document.querySelector("body"), {
  id: "alertModal",
  titre: "Probleme",
  type: "alert",
  message: "Vous n'avez pas remplie tout les champs"
});

//BOUTONS CONFIRMATION MODAL*************************************************
$(window).bind("load", function() {

  $("#signalCom-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#billet-wrapper").show();

  $(".logout").on("click", function() {
    logout();
  });

  //BOUTONS EFFACER BILLET
  $(".deleteBilBtn").on("click", function() {
   // modalDeleteBillet;
    idBilletToDelete = $(this).attr("value");
    $(".deleteBillet-confirmBtn").attr("value", idBilletToDelete);
  });
  $(".deleteBillet-confirmBtn").on("click", function() {
    $(".billetRow" + idBilletToDelete).fadeOut("slow", function() {
      deleteBilBtn(idBilletToDelete);
    });
  });

  //BOUTONS COMMENTAIRES SIGNALÉS
  $(".unsignalComBtn").on("click", function() {
    //modalUnsignalCom;
    idComToUnsignal = $(this).attr("value");
    $(".unsignalComModal-confirmBtn").attr("value", idComToUnsignal);
  });
  $(".unsignalComModal-confirmBtn").on("click", function() {
    $(".signaledCommentRow" + idComToUnsignal).fadeOut("slow", function() {
      unsignalCom(idComToUnsignal);
    });
  });

  $(".modereComBtn").on("click", function() {
    //modalModereCom;
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
    //modalDeleteCom;
    idComToDelete = $(this).attr("value");
    $(".deleteComModal-confirmBtn").attr("value", idComToDelete);
  });
  $(".deleteComModal-confirmBtn").on("click", function() {
    $(".signaledCommentRow" + idComToDelete).fadeOut("slow", function() {
      deleteComBtn(idComToDelete);
    });
  });
  //BOUTONS COMMENTAIRES MODÉRÉ
  $(".unmodereComBtn").on("click", function() {
    //modalUnmodereCom;
    idModComToUnmodere = $(this).attr("value");
    $(".unmodereComModal-confirmBtn").attr("value", idModComToUnmodere);
  });
  $(".unmodereComModal-confirmBtn").on("click", function() {
    $(".moderedCommentRow" + idModComToUnmodere).fadeOut("slow", function() {
      unmodereComBtn(idModComToUnmodere);
    });
  });

  $(".deleteModComBtn").on("click", function() {
    //modalDeleteModCom;
    idModComToDelete = $(this).attr("value");
    $(".deleteModComModal-confirmBtn").attr("value", idModComToDelete);
  });
  $(".deleteModComModal-confirmBtn").on("click", function() {
    $(".moderedCommentRow" + idModComToDelete).fadeOut("slow", function() {
      deleteModComBtn(idModComToDelete);
    });
  });
});


$(".editBillet").on("click", function(){
  return validateEdit();
})

$(".addBillet").on("click", function(){
  return validateAdd();
})

// fonction de verification d'update billet


isLoggedin();

//paginationCommentSign();

$("#signalCom-wrapper").hide();
$("#modCom-wrapper").hide();

$("#billetLink").on("click", function() {
  $("#signalCom-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#billet-wrapper").fadeIn(1000);
});
$("#signalComLink").on("click", function() {
  commentTable();
  comSignPagination;
  $("#billet-wrapper").hide();
  $("#modCom-wrapper").hide();
  $("#signalCom-wrapper").fadeIn(1000);
});
$("#modComLink").on("click", function() {
  moderedCommentTable();
  comModPagination;
  $("#billet-wrapper").hide();
  $("#signalCom-wrapper").hide();
  $("#modCom-wrapper").fadeIn(1000);
});
