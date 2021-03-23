function logout() {
    $.post({
        url: "login",
        data: { action: "logout" },
        success: function(data) {
            window.location.href = data;
            console.log(data);
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

new CharacterSheet(document.querySelector('#tableCarac'), {
    force: 10,
    dexterite: 10,
    constitution: 10,
    intelligence: 10,
    sagesse: 10,
    charisme: 10,
    modForce: 0,
    modDexterite: 0,
    modConstitution: 0,
    modIntelligence: 0,
    modSagesse: 0,
    modCharisme: 0
});

isLoggedin();