
<form action="addbillet" method="post" id="formAddBillet">
  <div class="form-group">
    <label for="auteur" class="labelBillet"><b>Auteur</b></label>
    <input type="text" name="auteur" class="form-control" id="auteurB" value="Jean Forteroche" size="35" required>
  </div>

  <div class="form-group">
    <label for="titre" class="labelBillet"><b>Titre</b></label>
    <input type="text" name="titre" class="form-control" id="titreB" placeholder="titre" required>
  </div>

  <div class="form-group">
    <label for="contenu" class="labelBillet"><b>Contenu</b></label>
    <textarea class="form-control" name="contenu" id="textareaB" rows="3"></textarea>
  </div>

  <input name="add" type="submit" value="valider" class="btn-success addBillet"/>
</form>

