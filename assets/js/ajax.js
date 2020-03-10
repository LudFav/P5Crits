page = 1;
pageCom = 1;
billetAccueil();
showComment();
//  AJAX FRONT
function billetAccueil() {
    $.post({
        url: 'sommaire',
        data: { 'action': 'showAccueilBillet', 'page': page },
        success: function (data) {
            responseBilletAccueil = JSON.parse(data);
            billetAccueilTable = responseBilletAccueil.billetsAccueilOutput;
            accueilMaxPages = responseBilletAccueil.maxPages;
            billetAccueilPagination = new FrontPagination(
                "#paginationAccueil",
                "pageAccueilBillet",
                accueilMaxPages,
                page
            )
            if (accueilMaxPages <= 1) {
                $('#pageAccueilBillet').hide();
            }
            $('#billetAccueil').html(billetAccueilTable);
            billetAccueilPagination;
            billetAccueilButtonPagination(accueilMaxPages)
        }
    })
}

function billetAccueilButtonPagination(accueilMaxPages) {
    $(".pageAccueilBillet.page-link.next").one("click", function (e) {
        e.preventDefault();
        if (page < accueilMaxPages) {
            page = page + 1;
            billetAccueil();
        }
    });
    $(".pageAccueilBillet.page-link.prev").on("click", function () {
        if (page > 1) {
            page--;
            billetAccueil();
        }
    });
    $(".pageAccueilBillet.page-link.but").on("click", function () {
        pagebutton = $(this).attr("value");
        page = parseInt(pagebutton);
        billetAccueil();
    });
}

function showComment() {
    idBillet = $('.post-info').attr('data-trf');
    $.post({
        url: 'post',
        data: { 'action': 'showComment', 'pageCom' : pageCom, 'billetId': idBillet},
        success: function (data) {
            responseFrontCom = JSON.parse(data);
            responseFrontComTable = responseFrontCom.commentairesOutput;
            frontComPagesMax = responseFrontCom.maxPagesComFront;
            frontComPagination = new FrontPagination(
                "#paginationFrontCom",
                "frontComPage",
                frontComPagesMax,
                pageCom
            )
            if (!$.trim(responseFrontComTable)) {
                let noComment = '<p class ="noComment">Soyez la première personne à écrire un commentaire sur ce billet.</p>';
                $(noComment).appendTo($('#showComments'));
                $('#showComments').attr('style', 'font-style:italic; margin-bottom:15px;');
                $('#frontComPage').hide();
            } else {
               
                let newCommentDisplay = $(responseFrontComTable);
                newButtonSignal = newCommentDisplay.find('.signalbtn');
                newButtonSignal.on('click', function () {
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
    $(".frontComPage.page-link.next").one("click", function (e) {
        e.preventDefault();
        if (pageCom < frontComPagesMax) {
            pageCom = pageCom + 1;
            showComment();
        }
    });
    $(".frontComPage.page-link.prev").on("click", function () {
        if (pageCom > 1) {
            pageCom--;
            showComment();
        }
    });
    $(".frontComPage.page-link.but").on("click", function () {
        pagebutton = $(this).attr("value");
        pageCom = parseInt(pagebutton);
        showComment();
    });
}

function errorMessageEmpty(){
    let emptyLogins = '<div class="emptylogins alert alert-warning" role="alert">Veuillez remplir tout les champs</div>';
    $(emptyLogins).insertAfter($('.md-form.mb-4'));
    $('.emptylogins').fadeIn(1000);
    setTimeout(function(){
        $('.emptylogins').fadeOut( "slow", function(){
            $('.emptylogins').remove();
        } );
    }, 2000);
}

function errorMessageLogin(){
    let errorLogin = '<div class="errorlogins alert alert-warning" role="alert">Erreur de login, veuillez reessayer</div>';
    $(errorLogin).insertAfter($('.md-form.mb-4'));
    $('.errorlogins').fadeIn(1000);
    setTimeout(function(){
        $('.errorlogins').fadeOut( "slow", function(){
            $('.errorlogins').remove();
        });
    }, 2000);
}

//FORMULAIRE D'ENVOI DE COMMENTAIRE
$('.submit-btn').on('click', function (e) {
    e.preventDefault();
    if ($('#formCommentaire')[0].checkValidity()) {
        var idBillet = $('.post-info').attr('data-trf');
        var auteur = $('#auteur').val();
        var contenu = $('#contenu').val();
        $.post({
            url: 'post',
            data: {
                'action': 'insertCom',
                'auteur': auteur,
                'contenu': contenu,
                'billetId': idBillet
            },
            success: function (data) {
                $('#formCommentaire')[0].reset();
                showComment();
            }
        })
    }
})

function signalement(id) {
    $.post({
        url: 'post',
        data: { 'action': 'signalCom', 'idSignal': id },
        success: function (data) {
            showComment();
        }
    });
}

//OBJET PAGINATION***********************************************************
function FrontPagination(element, paginationId, pagesMax, pageName) {
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

//BOUTON SIGNALER
$(window).bind('load', function () {

    $('#formCommentaire').attr('action', '');    
    $('.signalbtn').on('click', function () {
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
    $('#login').on('click', function () {
        login;
    });
    let user = localStorage.getItem("name");
    $('#username').val(user);

    $('#connexion-validBtn').on('click', function () {
        var username = $('#username').val();
        var password = $('#password').val();
            $.post({
                url: 'login',
                data: { 'action': 'login', 'username': username, 'password': password },
                success: function (data) {
                        if(data == 'inputVide'){
                            errorMessageEmpty();
                        } else if (data == 'wrong login'){
                            errorMessageLogin();
                        } else {
                        $('#connexion-validBtn').attr('data-dismiss','modal');
                        window.location.href = data;
                        }
                }
            });
    }) 
    
})


