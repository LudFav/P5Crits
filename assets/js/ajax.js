page = 1;
pageCom = 1;
billetAccueil();
showComment();


//  AJAX FRONT



function billetAccueil() {
    $.post({
        url: 'sommaire',
        data: { 'action': 'showSommaire', 'page': page },
        success: function(data) {
            responseBilletAccueil = JSON.parse(data);
            billetAccueilTable = responseBilletAccueil.billetsAccueilOutput;

            accueilMaxPages = responseBilletAccueil.maxPages;
            billetAccueilPagination = new Pagination(
                "#paginationSommaire",
                accueilMaxPages,
                page, {
                    paginationId: "pageSommaire",
                    pageNav: 3
                }
            )

            if (accueilMaxPages <= 1) {
                $('#pageSommaire').hide();
            }
            $('#billetAccueil').html(billetAccueilTable);
            billetAccueilPagination;
            billetAccueilButtonPagination(accueilMaxPages)
        }
    })
}

function billetAccueilButtonPagination(accueilMaxPages) {
    $(".pageSommaire.page-link.next").one("click", function(e) {
        e.preventDefault();
        if (page < accueilMaxPages) {
            page = page + 1;
            billetAccueil();
        }
    });
    $(".pageSommaire.page-link.prev").on("click", function() {
        if (page > 1) {
            page--;
            billetAccueil();
        }
    });
    $(".pageSommaire.page-link.but").on("click", function() {
        pagebutton = $(this).attr("value");
        page = parseInt(pagebutton);
        billetAccueil();
    });
}

function showComment() {
    idBillet = $('.post-info').attr('data-trf');
    $.post({
        url: 'post',
        data: { 'action': 'showComment', 'pageCom': pageCom, 'billetId': idBillet },
        success: function(data) {
            responseFrontCom = JSON.parse(data);
            responseFrontComTable = responseFrontCom.commentairesOutput;
            frontComPagesMax = responseFrontCom.maxPagesComFront;
            frontComPagination = new Pagination(
                "#paginationFrontCom",
                frontComPagesMax,
                pageCom, {
                    paginationId: "frontComPage",
                    pageNav: 2
                }
            )
            if (!$.trim(responseFrontComTable)) {
                let noComment = '<p class ="noComment">Soyez la première personne à écrire un commentaire sur ce billet.</p>';
                $(noComment).appendTo($('#showComments'));
                $('#showComments').attr('style', 'font-style:italic; margin-bottom:15px;');
                $('#frontComPage').hide();
            } else {

                let newCommentDisplay = $(responseFrontComTable);
                newButtonSignal = newCommentDisplay.find('.signalbtn');
                newButtonSignal.on('click', function() {
                    id = $(this).attr('value');
                    signalement(id);
                });
                if (frontComPagesMax <= 1) {
                    $('#frontComPage').hide();
                }
                let comDisplay = $('#showComments').html(newCommentDisplay);
                $(comDisplay).fadeIn('slow');
                frontComPagination;
                frontComButtonPagination(frontComPagesMax);
            }
        }
    })
}

function frontComButtonPagination(frontComPagesMax) {
    $(".frontComPage.page-link.next").one("click", function(e) {
        e.preventDefault();
        if (pageCom < frontComPagesMax) {
            pageCom = pageCom + 1;
            showComment();
        }
    });
    $(".frontComPage.page-link.prev").on("click", function() {
        if (pageCom > 1) {
            pageCom--;
            showComment();
        }
    });
    $(".frontComPage.page-link.but").on("click", function() {
        pagebutton = $(this).attr("value");
        pageCom = parseInt(pagebutton);
        showComment();
    });
}

function errorMessageInscription(errorType) {
    if (errorType == 1) {
        let errorMessage = $('<p class="errorType  alert alert-warning">Email déja utilisé</p>').appendTo($('.blankSpace '))
    }

    $('.errorType').fadeIn(1000);
    setTimeout(function() {
        $('.errorType').fadeOut("slow", function() {
            $('.errorType').remove();
        });
    }, 2000);
}


function errorMessageLogin(errorType) {

    if (errorType == 1) {
        let errorLogin = $('<p class="errorLoginText alert alert-warning" role="alert">Veuillez rentrer tout vos logins</p>').appendTo($('.errorLogin'));
    } else if (errorType == 2) {
        let errorLogin = $('<p class="errorLoginText alert alert-warning" role="alert">Logins invalides</p>').appendTo($('.errorLogin'));;
    }

    $('.errorLoginText').fadeIn(1000);
    setTimeout(function() {
        $('.errorLoginText').fadeOut("slow", function() {
            $('.errorLoginText').remove();
        });
    }, 2000);
}

//FORMULAIRE D'ENVOI DE COMMENTAIRE
$('.submit-btn').on('click', function(e) {
    e.preventDefault();
    if ($('#formCommentaire')[0].checkValidity()) {
        let idBillet = $('.post-info').attr('data-trf');
        let auteur = $('#auteur').val();
        let contenu = $('#contenu').val();
        $.post({
            url: 'post',
            data: {
                'action': 'insertCom',
                'auteur': auteur,
                'contenu': contenu,
                'billetId': idBillet
            },
            success: function(data) {
                $('#formCommentaire')[0].reset();
                showComment();
            }
        })
    } else {
        $('#alertComModal').modal('show');
    }
});

//FORMULAIRE D'INSCRIPTION
$('.registerBtn').on('click', function(e) {
    e.preventDefault();
    if ($('#formRegister')[0].checkValidity()) {
        let username = $('#registerName').val();
        let email = $('#registerEmail').val();
        let password = $('#registerPassword').val();
        let confirmedPassword = $('#registerPassword-repeat').val();

        $.post({
            url: 'register',
            data: {
                'action': 'register',
                'username': username,
                'email': email,
                'password': password,
                'confirmedPassword': confirmedPassword
            },
            success: function(data) {
                console.log(data);
                let responseInscription = JSON.parse(data);
                console.log(responseInscription);
                if (responseInscription == 'mailAlreadyUsed') {
                    errorType = 1;
                    errorMessageInscription(errorType)
                }
            }
        })

    }
})

function signalement(id) {
    $.post({
        url: 'post',
        data: { 'action': 'signalCom', 'idSignal': id },
        success: function(data) {
            showComment();
        }
    });
}


//MODAL ALERTE NON CONFORMITÉ FORM COMMENTAIRE
modalAlertUpdate = new Modal(document.querySelector("body"), {
    id: "alertComModal",
    titre: "Probleme",
    type: "alert",
    message: "Vous n'avez pas remplie tout les champs"
});


//BOUTON SIGNALER
$(window).bind('load', function() {

    $('#formCommentaire').attr('action', '');
    $('.signalbtn').on('click', function() {
        signalement($(this).attr('value'));
    });
    let login = new Modal(document.querySelector('body'), {
        id: 'connexion',
        titre: 'Connexion',
        type: 'connexion',
        pseudonyme: '',
        motDePasse: '',
        message: 'Veuillez rentrer vos identifiants'
    });
    $('#login').on('click', function() {
        login;
    });
    let user = localStorage.getItem("name");
    $('#username').val(user);

    $('#connexion-validBtn').on('click', function() {
        let username = $('#username').val();
        let password = $('#password').val();
        $.post({
            url: 'login',
            data: { 'action': 'login', 'username': username, 'password': password },
            success: function(data) {

                if (data == 'inputVide') {
                    errorType = 1;
                    errorMessageLogin(errorType);
                    $('errorlogins').text();
                } else if (data == 'wrong login') {
                    errorType = 2;
                    errorMessageLogin(errorType);
                } else {
                    $('#connexion-validBtn').attr('data-dismiss', 'modal');
                    window.location.href = data;
                }
            }
        });
    })

})