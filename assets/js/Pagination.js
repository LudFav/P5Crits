class Pagination{

  constructor(element, paginationId, pagesMax, pageName) {
    this.element = element;
    this.paginationId = paginationId;
    this.pagesMax = pagesMax;
    this.pageName = pageName;
    $(element).html("");
    
    this.showPagination();
  }
       
    
  
  showPagination(){
    this.pageNav = 2;
    let numPage = this.pageName;
    let pagesmax = this.pagesMax;
    let pagination = $(
      '<nav aria-label="Page navigation ' +
        this.paginationId +
        '" id="' +
        this.paginationId +
        '"></nav>'
    ).appendTo($(this.element));
    let paginationUl = $(
      '<ul class="' + this.paginationId + ' paginationUl"></ul>'
    ).appendTo($(pagination));
  
    let paginationPrev = $(
      '<li class="page-item"><button type="button" class="' +
        this.paginationId +
        ' page-link prev"><i class="fas fa-chevron-left"></i></button></li>'
    ).appendTo($(paginationUl));
  
    for (let i = numPage - this.pageNav; i < numPage; i++) {
      if (i > 0) {
        let leftPage = $(
          '<li class="page-item"><button type="button" class="' +
            this.paginationId +
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
        this.paginationId +
        '  page-link active" value="' +
        numPage +
        '">' +
        numPage +
        "</button></li>"
    ).appendTo($(paginationUl));
  
    for (let j = numPage + 1; j <= pagesmax; j++) {
      let rightPage = $(
        '<li class="page-item"><button type="button" class="' +
          this.paginationId +
          ' page-link but right" value=' +
          j +
          ">" +
          j +
          "</button></li>"
      );
      $(rightPage).appendTo($(paginationUl));
      if (j >= numPage + this.pageNav) {
        break;
      }
    }
  
    let paginationNext = $(
      '<li class="page-item"><button type="button" class="' +
        this.paginationId +
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
  