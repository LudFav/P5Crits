
<form name="updateForm" action="" method="post" id="formEditBillet">

  <div class="form-group">
    <label for="titre" class="labelBillet"><b>Titre</b></label>
    <input type="text" name="titre" class="form-control" id="titreEditB" value="<?=$billet[0]->titre()?>" required>
  </div>

  <div class="form-group imagelinked">
  <button type="button" class="imgBilletBtn edit" data-toggle="modal" data-target="#imageBillet" style="width:auto;font-size:12px;">Lier une image au billet</button>
  <div class="imgInput edit">
    <label for="image liée" class="labelBillet">Image liée</label>
      <input type="hidden" type="text" name="image" class="form-control" id="imgB" value="<?=$billet[0]->image()?>">
      <div class="thumbnail">
        <img src="<?=$billet[0]->image()?>" class="imgToEdit">
      </div>
    </div>
  </div>

  <div class="form-group">
    <label for="contenu" class="labelBillet"><b>Contenu</b></label>
    <textarea class="form-control" name="contenu" id="textareaEditC" rows="3"><?=$billet[0]->contenu()?></textarea>
  </div>

  <input name="updateBillet" type="submit" value="valider" class="btn-success editBillet"/>
</form>
