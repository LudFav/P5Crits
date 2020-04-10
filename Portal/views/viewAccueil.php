<!-- Wrapper -->
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
                <!--li a >adresse a remplir vers dernier article php-->
            </ul>
        </nav>

    <!-- Main -->
    <div id="main">

<!-- Featured Post -->
    <article class="post featured">
		<header class="major">
            <div class="post-info" data-trf="<?=$billet[0]->id()?>"></div>
			<span class="date"><?= $date = $billet[0]->date(); $newDate = date('d/m/Y H:i', strtotime($date)); echo $newDate;?></span>
			<h2><?=$billet[0]->titre()?></h2>
			<?=$billet[0]->contenu_cut()?>
		</header>
		<a href="post&id=<?=$billet[0]->id()?>" class="image main"><img src="<?= $billet[0]->image() ?>" alt="image <?=$billet[0]->titre()?>" /></a>
		<ul class="actions special">
			<li><a href="post&id=<?=$billet[0]->id()?>" class="button large">Lire Article</a></li>
		</ul>
    </article>
</div>
