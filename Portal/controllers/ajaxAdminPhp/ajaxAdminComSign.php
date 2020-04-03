<?php
use CritsPortal\models\CommentManager;
use CritsPortal\models\BilletManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/CommentManager.php');
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/BilletManager.php');
$_commentManager;
$_billetManager;
$_commentManager = new CommentManager;
$_billetManager = new BilletManager;

$entiteParPage = 4;
$nbreEntitesParPage=$entiteParPage;
$pageComSign= isset($_POST['pageComSign'])? $_POST['pageComSign'] : 1; 
$commentaires = $_commentManager->getSignaledComments($pageComSign, $entiteParPage);

$comSignpages = $_commentManager->getComSignPageMax($nbreEntitesParPage);

if(isset($_POST['action']) && $_POST['action']=='showCommentSignaled'){       
    $commentOutput='';
    foreach ($commentaires as $commentaire){
        $id = $commentaire->billetId();
        $billets = $_billetManager->getBillet($id);
        $contenuComplet = $commentaire->contenu();
        $contenuExtrais = substr($contenuComplet, 0,50)."&hellip;";
        $commentOutput.='<tr class="signaledCommentRow' .$commentaire->id(). '">';
        $commentOutput.='<td>' .$commentaire->id(). '</td>';
        foreach($billets as $billet){
        $commentOutput.='<td><a href=post&id=' .$billet->id(). '>' .$billet->titre(). '<a></td>';
        }
        $commentOutput.='<td>' .$commentaire->auteur(). '</td>';
        $commentOutput.='<td>' .$contenuExtrais. '</td>';
        $commentOutput.='<td>' .$commentaire->date(). '</td>';
        $commentOutput.='<td class="commentActionTd">';       
        $commentOutput.='<button class="admin-btn unsignalComBtn" value="' .$commentaire->id(). '" data-toggle="modal" data-target ="#unsignalComModal"><i class="fa fa-comment-o" aria-hidden="true"></i></button>';
        $commentOutput.='<button class="admin-btn modereComBtn" value="' .$commentaire->id(). '" data-toggle="modal" data-target ="#modereComModal" ><i class="fa fa-commenting" aria-hidden="true"></i></button>';
        $commentOutput.='<button class="admin-btn deleteComBtn" value="' .$commentaire->id(). '" data-toggle="modal" data-target ="#deleteComModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $commentOutput.='</td>';
        $commentOutput.='</tr>';
    }
    $data['commentOutput'] = $commentOutput;
    $data['pageComSign'] = $pageComSign;
    $data['maxComSignPages'] = $comSignpages;
    $responseComSign = json_encode($data);
    exit($responseComSign);
}

if(isset($_POST['action']) && $_POST['action']=='unsignal'){
    $unSignalComment = $_commentManager->unsignaleComment($_POST['comToUnsignal']); 
}
if(isset($_POST['action']) && $_POST['action']=='moderer'){
    $modereComment = $_commentManager->modereComment($_POST['modere']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteComment'){
    $idToDel = $_POST['deleteCom'];
    $deleteComment = $_commentManager->deleteComment($idToDel);
}
?>
