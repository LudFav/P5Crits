<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html lang="fr">
	<head>
		<title><?= $title?></title>
		<meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="assets/css/main.css" rel="stylesheet"/>
		<link href="assets/css/bootstrap.css" rel="stylesheet">
		<link href="assets/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">
     <!-- Nav -->
     <nav id="nav">
            <ul class="links">
                <li class="active"><a href="accueil">Accueil</a></li>
                <li><a href="sommaire">Sommaire</a></li>
                <li><a href="profil">Profil</a></li>
                <li><a class="logout" id="logout">Déconnexion</a></li>
                <!--li a >adresse a remplir vers dernier article php-->
            </ul>
        </nav>
    <!--Content-->
    <?= $content ?>	
    	<!-- Footer -->
        <footer id="footer">
						
                        </footer>
                        <!-- Copyright -->
                        <div id="copyright">
                            <ul><li>&copy;CRITS - 2020</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
                        </div>
    
                </div>
    
            <!-- Scripts -->
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.scrollex.min.js"></script>
                <script src="assets/js/jquery.scrolly.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <!--<script src="assets/js/jquery-3.4.1.min.js"></script>-->
                <script src="assets/js/tether.min.js"></script>
                <script src="assets/js/bootstrap.js"></script>
                <script src="assets/js/Modal.js"></script>
                <script src="assets/js/Pagination.js"></script>
                <script src="assets/js/ajaxUser.js"></script>
                <script src="assets/js/ajax.js"></script>
                <script src="assets/js/main.js"></script>
        </body>
    </html>