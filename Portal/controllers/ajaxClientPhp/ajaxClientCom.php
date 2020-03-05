<?php
spl_autoload_register(function($class){
    require_once($_SERVER["DOCUMENT_ROOT"]. '/P4Blog/models/'.$class.'.php');
});

$_commentManager;
$_commentManager = new CommentManager;

$entiteParPage = 3;
$pageComAccueil = isset($_POST['pageCom']) && is_numeric($_POST['pageCom'])?$_POST['pageCom'] : 1;
$billetId = isset($_POST['billetId']) && is_numeric($_POST['billetId'])?$_POST['billetId'] : NULL;
$commentaires = $_commentManager->getComments($billetId, $pageComAccueil, $entiteParPage);
$pages = $_commentManager->getPageMax($entiteParPage, $billetId);

if(isset($_POST['action'])&& $_POST['action']=='showComment'){
  $commentairesOutput = '';
  foreach ($commentaires as $commentaire){ 

    $commentairesOutput.= '<div class="comments-area">';

    $commentairesOutput.=    '<div class="comment">';
          if($commentaire->modere()==1){
          $commentairesOutput.= '<div class="comment-info" value=' .$commentaire->id(). '>';
          $commentairesOutput.= '<div class="middle-area" value=' .$commentaire->modere(). '>';
          $commentairesOutput.= '<h6 class="commentName"><b><strong>La modération</strong></b></h6>';
          $commentairesOutput.= '<h6 class="commentDate">' .$commentaire->date(). '</h6>';
          $commentairesOutput.= '</div>';
          $commentairesOutput.= '</div><!-- comment-info -->';
          $commentairesOutput.= '<p><i>Commentaire censuré par la modération</i></p>';
          $commentairesOutput.= '</div><!-- comment -->';
          $commentairesOutput.= '</div>';
        } else {    
            $commentairesOutput.= '<div class="comment-info" value=' .$commentaire->id(). '>';
            $commentairesOutput.= '<div class="middle-area" value=' .$commentaire->modere(). '>';
            $commentairesOutput.= '<h6 class="commentName"><b>' .$commentaire->auteur(). '</b></h6>';
            $commentairesOutput.= '<h6 class="commentDate">' .$commentaire->date(). '</h6>';
            $commentairesOutput.= '</div>';
            $commentairesOutput.= '</div><!-- comment-info -->';
            $commentairesOutput.= '<p>' .$commentaire->contenu(). '</p>';
            $commentairesOutput.= '<div class="right-area">';
            $commentairesOutput.= '<button  class="signalbtn" value=' .$commentaire->id().' ><b>Signaler</b></button>';
            $commentairesOutput.= '</div>';
            $commentairesOutput.= '</div><!-- comment -->';
            $commentairesOutput.= '</div>';
        }   
    }
    $data['commentairesOutput'] = $commentairesOutput;
    $data['pageComFront'] = $pageComAccueil;
    $data['maxPagesComFront'] = $pages;
    $responseComFront = json_encode($data);
    exit($responseComFront);
}


if(isset($_POST['action']) && $_POST['action']=='insertCom'){
    $data = array(
        'billetId' =>  $_POST['billetId'],
        'auteur' => htmlspecialchars($_POST['auteur']),
        'contenu' => htmlspecialchars($_POST['contenu'])
    );           
    $createCommentaires = $_commentManager->createComment($data, $_POST['billetId']);
    exit;
}

if(isset($_POST['action']) && $_POST['action']=='signalCom'){
    $signaleCom = $_commentManager->signaleComment($_POST['idSignal']);   
}
