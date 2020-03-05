<?php
spl_autoload_register(function($class){
    require_once($_SERVER["DOCUMENT_ROOT"]. '/P4Blog/models/'.$class.'.php');
});

$_commentManager;
$_commentManager = new CommentManager;

$entiteParPage= 5;
$pageComMod= isset($_POST['pageComMod'])? $_POST['pageComMod'] : 1; 
$commentaireModeres = $_commentManager->getModeredComments($pageComMod, $entiteParPage);
$comModPages = $_commentManager->getComModPagesMax($entiteParPage);

if(isset($_POST['action']) && $_POST['action']=='showCommentModered'){
    $moderedCommentOutput=''; 
    
   
    foreach ($commentaireModeres as $commentaireModere){
        $moderedCommentOutput.='<tr class="moderedCommentRow' .$commentaireModere->id(). '">';
        $moderedCommentOutput.='<td>' .$commentaireModere->id(). '</td>';
        $moderedCommentOutput.='<td>' .$commentaireModere->auteur(). '</td>';
        $moderedCommentOutput.='<td>' .$commentaireModere->contenu(). '</td>';
        $moderedCommentOutput.='<td>' .$commentaireModere->date(). '</td>';
        $moderedCommentOutput.='<td class="commentActionTd">';       
        $moderedCommentOutput.='<button class="unmodereComBtn" value="' .$commentaireModere->id(). '" data-toggle="modal" data-target ="#unmodereComModal" ><i class="fa fa-commenting unmod" aria-hidden="true"></i></button>';
        $moderedCommentOutput.='<button class="deleteModComBtn" value="' .$commentaireModere->id(). '" data-toggle="modal" data-target ="#deleteModComModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $moderedCommentOutput.='</td>';
        $moderedCommentOutput.='</tr>';
    }
    $data['moderedCommentOutput'] = $moderedCommentOutput;
    $data['pageComMod'] = $pageComMod;
    $data['maxPagesComMod'] = $comModPages;
    $responseComMod = json_encode($data);
    exit($responseComMod);
}

if(isset($_POST['action']) && $_POST['action']=='unmodere'){
    $unModereComment = $_commentManager->unmodereComment($_POST['unmodere']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteModCom'){
    $deleteComment = $_commentManager->deleteComment($_POST['deleteCom']);
}
?>
