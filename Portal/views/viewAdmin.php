<!--BILLET-->
<div class="container-fluid" style="padding-top:20px;">
    <div class="row">

        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item active" id="billetLink">
                        <a class="nav-link" href="#">
                            <span class="glyphicon glyphicon-book"></span> Billets
                        </a>
                    </li>
                    <li class="nav-item active" id="docLibraryLink">
                        <a class="nav-link" href="#">
                            Mediathèque
                        </a>
                    </li>
                    <li class="nav-item" id="signalComLink">
                        <a class="nav-link" href="#">
                            Commentaires Signalés
                        </a>
                    </li>
                    <li class="nav-item" id="modComLink">
                        <a class="nav-link" href="#">
                            Commentaires Modérés
                        </a>
                    </li>

                </ul>
            </div>
        </nav>

        <div class="billetAdmin col-md-9 ml-sm-auto col-lg-10 px-4">

            <div class="table-wrapper" id="billet-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6" id="billetTableTitre">
                            <h2>Billets</h2>
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
                            <h2>Mediathèque</h2>
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
                            <div class="col">
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
                            
                            <div class="col">
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
                                <h2>Commentaires Signalés</h2>
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
                                <h2>Commentaires Modérés</h2>
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