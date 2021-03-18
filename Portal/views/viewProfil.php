<!-- Wrapper -->
<div id="wrapper">

<!-- Header -->
<header id="header">
            <a href="accueil" class="logo"><img src='assets/images/Critstest.png' alt="logo"></a>
</header>

<!-- Nav -->
  <nav id="nav">
    <ul class="links">
        <li><a href="accueil">Accueil</a></li>
        <li><a href="sommaire">Sommaire</a></li>
        <li class="active"><a href="profil">Profil</a></li>
        <li><a class="logout" id="logout">Déconnexion</a></li>
    </ul>
  </nav>

<!-- Main -->
  <div id="main">
      <!-- Posts -->
    <h2>Profil Utilisateur</h2>
    <section class="post post-info">
        <header class="major">
          <h1>Profil Utilisateur</h1>
        </header>
        <div class="username">Pseudonyme : <?=$user[0]->username()?></div>
        <?=$user[0]->contenu()?>
      </section>

    </div>