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
      <li class="active"><a href="" id="login" data-toggle="modal" data-target="#connexion">Connexion</a></li>
    </ul>
  </nav>

<!-- Main -->
    <div id="main">

<!-- Formulaire d'inscription -->
<form name="registerForm" action="inscription" method="post" id="formRegister">
  <div class="form-group">
    <label for="username" class="labelName"><b>Pseudonyme</b></label>
    <input type="text" placeholder="Entrez votre pseudonyme" name="username" class="form-control" id="registerName" required>

    <label for="email" class="labelEmail"><b>Email</b></label>
    <input type="text" placeholder="Entrez votre Email" name="email" class="form-control" id="registerEmail" required>

    <label for="psw"><b>Mot de passe</b></label>
    <input type="password" placeholder="Entrez votre mot de passe" name="psw" class="form-control" id="registerPassword" required>

    <label for="psw-repeat"><b>Confirmation du mot de passe</b></label>
    <input type="password" placeholder="Confirmez votre mot de passe" name="psw-repeat" class="form-control" id="registerPassword-repeat" required>
    <hr>
    <button type="submit" class="registerBtn">S'Enregistrer</button>
  </div>
</form>

</div>