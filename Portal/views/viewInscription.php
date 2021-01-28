<form name="registerForm" action="register" method="post" id="formRegister">
  <div class="form-group">
    <label for="username" class="labelName"><b>Pseudonyme</b></label>
    <input type="text" placeholder="Entrez votre pseudonyme" name="username" class="form-control" id="registerName" value="<?=$user[0]->name()?>" required>

    <label for="email" class="labelEmail"><b>Email</b></label>
    <input type="text" placeholder="Entrez votre Email" name="email" class="form-control" id="registerEmail"  value="<?=$user[0]->email()?>" required>

    <label for="psw"><b>Mot de passe</b></label>
    <input type="password" placeholder="Entrez votre mot de passe" name="psw" class="form-control" id="registerPassword"  value="<?=$user[0]->passeword()?>" required>

    <label for="psw-repeat"><b>Confirmation de mot de passe</b></label>
    <input type="password" placeholder="Confirmation de mot de passe" name="psw-repeat" class="form-control" id="registerPassword-repeat" required>
    <hr>
    <button type="submit" class="registerBtn">S'Enregistrer</button>
  </div>
</form>