class Modal {
    /**
     * @param {HTMLElement} element
     * @param {Object} options
     *  @param {string} id
     *  @param {string} titre
     *  @param {string} type
     *  @param {string} pseudonyme
     *  @param {string} motDePasse
     *  @param {string} message
    **/
    constructor(element, options) {
        this.element = element;
        this.options = {
            id: options.id,
            titre: options.titre,
            type: options.type,
            pseudonyme: options.pseudonyme,
            motDePasse: options.motDePasse,
            message: options.message
        }
        this.createModal();
    }
        createModal() {
           
           

            if(this.options.type == 'connexion'){
            this.modal = $('<form method="post" action="ControllerLogin.php" class="modal" tabindex="-1" role="dialog" aria-labelledby="'+this.options.titre+'" aria-hidden="true"></form>').appendTo(this.element);
            let modalId = this.options.id;
            this.modal.attr('id', modalId);
            this.modalDial = $('<div class="modal-dialog" role="document"></div>').appendTo(this.modal);
            this.modalContent = $('<div class="modal-content"></div>').appendTo(this.modalDial);
            this.modalHeader = $('<div class="modal-header"></div>').appendTo(this.modalContent);
            this.modalTitle = $('<h5 class="modal-title" id="'+this.options.titre+'">'+this.options.titre+'</h5>').appendTo(this.modalHeader);
            this.closeModal = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo(this.modalHeader);
            this.modalBody = $('<div class="modal-body"><h4 style="text-align:center; margin-bottom:15px;">'+this.options.message+'</h4></div>').appendTo(this.modalContent);
            this.modalFormName = $('<div class="md-form mb-5"></div>').appendTo(this.modalBody);
                    //PSEUDONYME
                    let iconePseudonyme = $('<i class="fa fa-user" aria-hidden="true"></i>').appendTo(this.modalFormName);
                    let inputPseudo = $('<input type="text" name="username" placeholder="pseudonyme" id="username" class="form-control validate" required>').appendTo(this.modalFormName);
                    this.options.pseudonyme = inputPseudo;
                    let labelPseudo = $('<label for="username" data-error="wrong" data-success="right"></label>').appendTo(this.modalFormName);
                    $(labelPseudo).addClass(modalId + '-lblpseudo');
            
                    //MOT DE PASSE
                    this.modalFormPass = $('<div class="md-form mb-4"></div>').appendTo(this.modalBody);
                    let iconeMdp = $('<i class="fa fa-unlock-alt" aria-hidden="true"></i>').appendTo(this.modalFormPass);
                    let inputMotDePasse = $('<input type="password" name="password" placeholder="mot de passe" id="password" class="form-control validate" required>').appendTo(this.modalFormPass);
                    this.options.motDePasse = inputMotDePasse;
                    let labelMotDePasse = $('<label for="password" data-error="wrong" data-success="right"></label>').appendTo(this.modalFormPass);
                    $(labelMotDePasse).addClass(modalId + '-lblMdp');

                    
                    //CREATION DIV et Button de modal, si local et session storage sont supporté on sauvegarde nom et prenom en local
                    this.modalFooter = $('<div class="modal-footer"></div>').appendTo(this.modalContent);
                    let validBtn = $('<button type="button" value="Connexion" class="btn btn-primary" id="'+modalId + '-validBtn'+'" >Valider</button>').appendTo($(this.modalFooter));
                    $(validBtn).on('click', function () {
                        localStorage.setItem("name", inputPseudo.val()); //savgrd le pseudo
                    })
                    let annulBtn = $('<button type="button" class="btn btn-secondary" data-dismiss="modal" id="'+modalId+'-cancelBtn">Annuler</button>').appendTo($(this.modalFooter));
            }

            if(this.options.type == 'confirmation'){
                this.modal = $('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="'+this.options.titre+'" aria-hidden="true"></div>').appendTo(this.element);
                let modalId = this.options.id;
                this.modal.attr('id', modalId);
                this.modalDial = $('<div class="modal-dialog" role="document"></div>').appendTo(this.modal);
                this.modalContent = $('<div class="modal-content"></div>').appendTo(this.modalDial);
                this.modalHeader = $('<div class="modal-header"></div>').appendTo(this.modalContent);
                this.modalTitle = $('<h5 class="modal-title" id="'+this.options.titre+'">'+this.options.titre+'</h5>').appendTo(this.modalHeader);
                this.closeModal = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo(this.modalHeader);
                this.modalBody = $('<div class="modal-body"><h4 style="text-align:center; margin-bottom:15px;">'+this.options.message+'</h4></div>').appendTo(this.modalContent);
                this.modalFooter = $('<div class="modal-footer"></div>').appendTo(this.modalContent);
                this.confirmBtn = $('<button type="button" class="btn btn-primary '+modalId+'-confirmBtn" data-dismiss="modal">OK</button>').appendTo(this.modalFooter);
                this.cancelBtn = $('<button type="button" class="btn btn-secondary '+modalId+'-cancelBtn" data-dismiss="modal">Annuler</button>').appendTo(this.modalFooter);
            }

            if(this.options.type == 'alert'){
                this.modal = $('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="'+this.options.titre+'" aria-hidden="true"></div>').appendTo(this.element);
                let modalId = this.options.id;
                this.modal.attr('id', modalId);
                this.modalDial = $('<div class="modal-dialog" role="document"></div>').appendTo(this.modal);
                this.modalContent = $('<div class="modal-content"></div>').appendTo(this.modalDial);
                this.modalHeader = $('<div class="modal-header"></div>').appendTo(this.modalContent);
                this.modalTitle = $('<h5 class="modal-title" id="'+this.options.titre+'">'+this.options.titre+'</h5>').appendTo(this.modalHeader);
                this.closeModal = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo(this.modalHeader);
                this.modalBody = $('<div class="modal-body"><h4 style="text-align:center; margin-bottom:15px;">'+this.options.message+'</h4></div>').appendTo(this.modalContent);
                this.modalFooter = $('<div class="modal-footer"></div>').appendTo(this.modalContent);
                this.confirmBtn = $('<button type="button" class="btn btn-primary '+modalId+'-confirmBtn" data-dismiss="modal">OK</button>').appendTo(this.modalFooter);
            }

        } 
}
