<!--BILLET-->
<div class="container-fluid" style="padding-top:20px;">
    <div class="row admin-menu">

        <nav class="subNavBar">
            
                <ul class="subNavBar-nav">
                    <li class="subLogo">
                      <a href="#" class="nav-link">
                      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                      <span class="link-text subLogo-text">Administration</span>    
                      </a>
                    </li>
                    <li class="subNav-item active" id="billetLink">
                        <a class="subNav-link" href="#">
                        <i class="fa fa-book" aria-hidden="true"></i>
                            <span class="link-text">Billets</span>
                        </a>
                    </li>
                    <li class="subNav-item" id="docLibraryLink">
                        <a class="subNav-link" href="#">
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                           <span class="link-text">Mediathèque</span>
                        </a>
                    </li>
                    <li class="subNav-item" id="signalComLink">
                        <a class="subNav-link" href="#">
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="link-text">Commentaires Signalés</span> 
                        </a>
                    </li>
                    <li class="subNav-item" id="modComLink">
                        <a class="subNav-link" href="#">
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                        <span class="link-text">Commentaires Modérés</span> 
                        </a>
                    </li>

                </ul>
           
        </nav>

        <div class="billetAdmin col-md-9 mx-auto col-lg-10 px-4">

            <div class="table-wrapper" id="billet-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6" id="billetTableTitre">
                            <h3>Billets</h3>
                        </div>
                        <div class="col-sm-6">
                            <a href="addbillet" class="btn btn-success"><i class="fa fa-plus"
                                    aria-hidden="true"></i><span><strong>Nouveau Billet</strong></span></a>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-hover" id='tableBillet'>
                        <thead>
                            <tr>
                                <th class="tdId">ID</th>
                                <th class="tdAuteur">Auteur</th>
                                <th class="tdTitre">Titre</th>
                                <th class="tdImg">Image</th>
                                <th class="tdDate">Date</th>
                                <th style="text-align:center;">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyBillet">
                        </tbody>
                    </table>
                </div>
                <div id='paginationAdminBillet'>
                </div>
            </div>
            <!--BIBLIOTHEQUE DOC-->
            <div class="table-wrapper" id="docLib-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6" id="docLibraryTableTitre">
                            <h3>Mediathèque</h3>
                        </div>
                        <div class="col-sm-6">
                            <button class="btn btn-success" id="addDocFile" data-toggle="modal"
                                data-target="#docFileModal"><i class="fa fa-plus"
                                    aria-hidden="true"></i><span><strong>Nouveau Fichier</strong></span></button>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">

                    <div class="container">
                        <div class="row">
                            <div class=" docTable col">
                                <h5>Documents PDF</h5>
                                <table class="table table-striped table-hover" id='tableDocLib'>
                                    <thead>
                                        <tr>
                                            <th class="tdName">Nom</th>
                                            <th style="text-align:center;">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyDocLibrary">
                                    </tbody>
                                </table>
                                <div id='paginationAdminDoc'>
                            </div>
                            </div>
                            
                            <div class="imgTable col">
                                <h5>Images</h5>
                                <table class="table table-striped table-hover" id='tableImgLib'>
                                    <thead>
                                        <tr>
                                            <th class="tdThmb">Thmbnail</th>
                                            <th class="tdName">Nom</th>
                                            <th style="text-align:center;">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyImgLibrary">
                                    </tbody>
                                </table>
                                <div id='paginationAdminImg'>
                    </div>
                            </div>
                            
                        </div>

                    </div>
                   
                </div>
            </div>
                <!--COMMENTAIRE SIGNALÉ-->
                <div class="table-wrapper" id="signalCom-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6" id="commentTableTitre">
                                <h3>Commentaires Signalés</h3>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-hover" id='tableComments'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Titre du Billet Commenté</th>
                                    <th>Auteur</th>
                                    <th>Contenu</th>
                                    <th>Date</th>
                                    <th style="text-align:center;">Actions</th>
                                </tr>
                            </thead>
                            <tbody id='tbodyComment'>
                            </tbody>
                        </table>
                    </div>
                    <div id='paginationComSign'>
                    </div>
                </div>
                <!--COMMENTAIRE MODERÉ-->
                <div class="table-wrapper" id="modCom-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6" id="moderedCommentTableTitre">
                                <h3>Commentaires Modérés</h3>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-hover" id='moderedCommentsTable'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Titre du Billet Commenté</th>
                                    <th>Auteur</th>
                                    <th>Contenu</th>
                                    <th>Date</th>
                                    <th style="text-align:center;">Actions</th>
                                </tr>
                            </thead>
                            <tbody id='tbodyCommentModere'>
                            </tbody>
                        </table>
                    </div>
                    <div id='paginationComMod'>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
</body>

</html>