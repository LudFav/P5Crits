<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title><?= $title?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link href="assets/css/main.css" rel="stylesheet"/>
		<link href="assets/css/bootstrap.css" rel="stylesheet">
		<link href="assets/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">
    <div id="wrapper" class="fade-in">

<!-- Intro -->
<div class="bg"></div>
    <div id="intro">
        <a href="accueil" class="logo"><img src='assets/images/Critstest.png' alt="logo"></a>
        <p>Bienvenue sur le portail de Crits, une application en développement vous permettant de jouer en ligne a des jeux de rôle papier, pour le moment voyez ce portail tel un devblog.</p>
        <ul class="actions">
            <li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
    </div>

<!-- Header -->
    <header id="header">
        <a href="accueil" class="logo"><img src='assets/images/Critstest.png' alt="logo"></a>
    </header>

<!-- Nav -->

 <nav id="nav">
        <ul class="links">
            <li class="active"><a href="accueil">Accueil</a></li>
            <li><a href="sommaire">Sommaire</a></li>
            <li><a href="profil">Profil</a></li>
            <li><a href="" id="login" data-toggle="modal" data-target="#connexion">Connexion</a></li>
        </ul>
</nav>

    <!--Content-->
    <?= $content ?>
    	<!-- Footer -->
        <footer id="footer">

                        </footer>
                        <div class="container">
                            <ul class="menu admin">
                                <li><a href="admin" class="fas fa-feather-alt" id="admin"> Administration</a></li>
                                <li><a href="accueil" class="fas fa-book" id="retourSommaire"> Accueil du site</a></li>
                            </ul>
                        </div>
                    <!-- Copyright -->
                        <div id="copyright">
                            <ul><li>&copy;CRITS - 2020</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
                        </div>

                </div>

            <!-- Scripts -->
                <script>window.onload = function() { document.body.classList.remove('is-preload'); }
                	window.ontouchmove = function() { return false; }
                	window.onorientationchange = function() { document.body.scrollTop = 0; }
                </script>
                <script src="assets/js/jquery-3.4.1.min.js"></script>
                <script src="assets/js/tether.min.js"></script>
                <script src="assets/js/bootstrap.js"></script>
                <script src="assets/js/tinymce/tinymce.min.js"></script>
                <script> tinymce.init({
                  selector: '#textareaB, #textareaC, #textareaEditC',  // change this value according to your HTML
                  plugin: 'a_tinymce_plugin',
                  a_plugin_option: true,
                  content_style: 'body{font-family:book antiqua;}',
                  a_configuration_option: 400,
                  setup: function (editor) {
                	editor.on('change', function (e) {
                	tinymce.triggerSave();
                	});
                }
                });
                </script>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.scrollex.min.js"></script>
                <script src="assets/js/jquery.scrolly.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                <script src="assets/js/tether.min.js"></script>
                <script src="assets/js/bootstrap.js"></script>
                <script src="assets/js/Modal.js"></script>
                <script src="assets/js/Pagination.js"></script>
                <script src="assets/js/adminBillet.js"></script>
                <script src="assets/js/adminComMod.js"></script>
                <script src="assets/js/adminComSign.js"></script>
                <script src="assets/js/adminMedia.js"></script>
                <script src="assets/js/adminAjoutImage.js"></script>
                <script src="assets/js/armor.js"></script>
                <script src="assets/js/CharacterSheet.js"></script>
                <script src="assets/js/ajaxAdmin.js"></script>
                <script src="assets/js/ajaxUser.js"></script>
                <script src="assets/js/ajax.js"></script>
                <script src="assets/js/main.js"></script>
        </body>
    </html>