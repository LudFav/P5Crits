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
                let logout = '<a href="" class="logout">Déconnexion</a>';
                $('#login').replaceWith($(logout));
                let profilButton = $('<li><a href="profil" class="userProfil">Profil</a></li>').insertBefore($('.logout').parent());
                let createCharacterButton = $('<li><a href="character" class="characterBtn">Création de personnage</a></li>').insertBefore($('.logout').parent());
            }
        }
    });
}

$(window).bind("load", function() {

    $(".logout").on("click", function() {
        logout();
    });
});


isLoggedin();