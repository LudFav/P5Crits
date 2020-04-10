class Pagination{
  /**
     * @param {HTMLElement} element
     * @param {int} pagesMax (Nombre entier de pages maximum)
     * @param {int} pageName (Nombre entier, numéro de page )
     * @param {Object} options
     *  @param {string} paginationId (Selecteur id de la pagination)
     *  @param {int} pageNav (Nombre de numéros de pages visibles a gauche et a droite du numéro de la page actuelle)
    **/
  constructor(element, pagesMax, pageName, options) {
    this.element = element;
    this.pagesMax = pagesMax;
    this.pageName = pageName;
    this.options = {
      paginationId: options.paginationId,
      pageNav: options.pageNav
    }
    $(element).html("");
    this.showPagination();
  }
       
  showPagination(){
    let numPage = this.pageName;
    let pagesmax = this.pagesMax;
    let pagination = $(
      '<nav aria-label="Page navigation ' +
        this.options.paginationId +
        '" id="' +
        this.options.paginationId +
        '"></nav>'
    ).appendTo($(this.element));
    let paginationUl = $(
      '<ul class="' + this.options.paginationId + ' paginationUl"></ul>'
    ).appendTo($(pagination));
  
    let paginationPrev = $(
      '<li class="page-item"><button type="button" class="' +
        this.options.paginationId +
        ' page-link prev"><i class="fas fa-chevron-left"></i></button></li>'
    ).appendTo($(paginationUl));
  
    for (let i = numPage - this.options.pageNav; i < numPage; i++) {
      if (i > 0) {
        let leftPage = $(
          '<li class="page-item"><button type="button" class="' +
            this.options.paginationId +
            ' page-link but left" value=' +
            i +
            ">" +
            i +
            "</button></li>"
        );
        $(leftPage).appendTo($(paginationUl));
      }
    }
  
    let currentPage = $(
      '<li class="page-item current "><button class="' +
        this.options.paginationId +
        '  page-link active" value="' +
        numPage +
        '">' +
        numPage +
        "</button></li>"
    ).appendTo($(paginationUl));
  
    for (let j = numPage + 1; j <= pagesmax; j++) {
      let rightPage = $(
        '<li class="page-item"><button type="button" class="' +
          this.options.paginationId +
          ' page-link but right" value=' +
          j +
          ">" +
          j +
          "</button></li>"
      );
      $(rightPage).appendTo($(paginationUl));
      if (j >= numPage + this.options.pageNav) {
        break;
      }
    }
  
    let paginationNext = $(
      '<li class="page-item"><button type="button" class="' +
        this.options.paginationId +
        ' page-link next"><i class="fas fa-chevron-right"></i></button></li>'
    ).appendTo(paginationUl);
   let test = $('.page-link.active').attr('value');
      $(paginationPrev).hide();
      if(numPage == 2) {
      $(paginationPrev).fadeIn(500);
      }else if(numPage > 2){
        $(paginationPrev).show();
      } 
  
    if (numPage >= pagesmax) {
      $(paginationNext).fadeOut(500);
    }
  }
}
  