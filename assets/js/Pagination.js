function Pagination(element, paginationId, pagesMax, pageName) {
    this.element = element;
    this.paginationId = paginationId;
    this.pagesMax = pagesMax;
    this.pageName = pageName;
    $(element).html("");
    numPage = pageName;
    pagesmax = pagesMax;
    pageNav = 2;
  
    let pagination = $(
      '<nav aria-label="Page navigation ' +
        paginationId +
        '" id="' +
        paginationId +
        '"></nav>'
    ).appendTo($(element));
    let paginationUl = $(
      '<ul class="' + paginationId + ' paginationUl"></ul>'
    ).appendTo($(pagination));
  
    let paginationPrev = $(
      '<li class="page-item"><button class="' +
        paginationId +
        ' page-link prev"><i class="fas fa-chevron-left"></i></button></li>'
    ).appendTo($(paginationUl));
  
    for (let i = numPage - pageNav; i < numPage; i++) {
      if (i > 0) {
        let leftPage = $(
          '<li class="page-item"><button class="' +
            paginationId +
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
        paginationId +
        '  page-link active" value="' +
        numPage +
        '">' +
        numPage +
        "</button></li>"
    ).appendTo($(paginationUl));
  
    for (let j = numPage + 1; j <= pagesMax; j++) {
      let rightPage = $(
        '<li class="page-item"><button class="' +
          paginationId +
          ' page-link but right" value=' +
          j +
          ">" +
          j +
          "</button></li>"
      );
      $(rightPage).appendTo($(paginationUl));
      if (j >= numPage + pageNav) {
        break;
      }
    }
  
    let paginationNext = $(
      '<li class="page-item"><button class="' +
        paginationId +
        ' page-link next"><i class="fas fa-chevron-right"></i></button></li>'
    ).appendTo(paginationUl);
   let test = $('.page-link.active').attr('value');
      $(paginationPrev).hide();
      if(pageName == 2) {
      $(paginationPrev).fadeIn(500);
      }else if(pageName > 2){
        $(paginationPrev).show();
      } 
  
    if (pageName >= pagesmax) {
      $(paginationNext).fadeOut(500);
    }
  
}
  