<!-- Wrapper -->
<div id="wrapper">

<!-- Header -->
<header id="header">
            <a href="accueil" class="logo"><img src='assets/images/Critstest.png' alt="logo"></a>
</header>

<!-- Nav -->
  <nav id="nav">
    <ul class="links">
      <li><a href=accueil>Accueil</a></li>
      <li><a href="sommaire">Sommaire</a></li>
      <li><a href="" id="login" data-toggle="modal" data-target="#connexion">Connexion</a></li>
    </ul>
  </nav>

<!-- Main -->
  <div id="main">

    <!-- Post -->
      <section class="post post-info"  data-trf="<?=$billet[0]->id()?>">
        <header class="major">
          <span class="date"><?php $date = $billet[0]->date(); $newDate = date('d/m/Y H:i', strtotime($date)); echo $newDate; ?></span>
          <h1><?=$billet[0]->titre()?></h1>
        </header>
        <div class="image main"><img src="<?=$billet[0]->image()?>" alt="" /></div>
        <?=$billet[0]->contenu()?>
      </section>

  
<!-- Section Commentaire -->
<section class="comment-section">
  <div class="container">

    <div class="row justify-content-center">

      <div class="col-lg-8 col-md-12">
      <h4><b>Commentaires</b></h4>
        <div class="comment-form">
          <form action="#" method="post" id="formCommentaire">
            <div class="row">

              <div class="col-sm-6">
                <input type="text" aria-required="true" name="auteur" class="form-control"
                  placeholder="Nom" aria-invalid="true" id="auteur" required >
              </div>
              <div class="col-sm-12">
                <textarea name="contenu" rows="2" class="text-area-messge form-control"
                  placeholder="votre commentaire" id="contenu" aria-invalid="true" required></textarea >
              </div>
              <div class="col-sm-12">
                <button class="submit-btn" type="submit" id="form-submit" name="addCommentaire"><b>Envoyer Commentaire</b></button>
              </div>

            </div>
          </form>
        </div><!--comment-form-->
        <div id="showComments"></div>
        <div id='paginationFrontCom'></div>
      </div><!--col-lg-8 col-md-12-->
    </div><!--row-->    
  </div><!-- .container -->
</section><!-- .section commentaire-->
</div>
