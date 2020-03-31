<!-- Wrapper -->
<div id="wrapper" class="fade-in">

    <!-- Intro -->
        <div id="intro">
            <a href="index.html" class="logo"><img src='assets/images/Crits.svg'></a>
            <p>Bienvenue sur le portail de Crits, une application en developpement vous permettant de jouer en ligne a des jeux de role papier, pour le moment voyez ce portail tel un devblog.</p>
            <ul class="actions">
                <li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
        </div>

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo"><img src='assets/images/Crits.svg'></a>
        </header>

    <!-- Nav -->
        <nav id="nav">
            <ul class="links">
                <li class="active"><a href="accueil">Accueil</a></li>
                <!--li a >adresse a remplir vers dernier article php-->
            </ul>
        </nav>

    <!-- Main -->
    <div id="main">

<!-- Featured Post -->
    <article class="post featured">
		<header class="major">
            <div class="post-info" data-trf="<?=$billet[0]->id()?>"></div>
			<span class="date"><?=$billet[0]->date()?></span>
			<h2><?=$billet[0]->titre()?></h2></br>
			<?=$billet[0]->contenu_cut()?>
		</header>
		<a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
		<ul class="actions special">
			<li><a href="<?=$billet->id()?>" class="button large">Lire Article</a></li>
		</ul>
    </article>

