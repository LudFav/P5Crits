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
        ' page-link prev">Previous</button></li>'
    ).appendTo($(paginationUl));
  
    for (let i = numPage - pageNav; i < numPage; i++) {
      if (i > 0) {
        let leftPage = $(
          '<li class="page-item"><a class="' +
            paginationId +
            ' page-link but left" value=' +
            i +
            ">" +
            i +
            "</a></li>"
        );
        $(leftPage).appendTo($(paginationUl));
      }
    }
  
    let currentPage = $(
      '<li class="page-item current"><p class="' +
        paginationId +
        '  page-link active" value="' +
        numPage +
        '">' +
        numPage +
        "</p></li>"
    ).appendTo($(paginationUl));
  
    for (let j = numPage + 1; j <= pagesMax; j++) {
      let rightPage = $(
        '<li class="page-item"><a class="' +
          paginationId +
          ' page-link but right" value=' +
          j +
          ">" +
          j +
          "</a></li>"
      );
      $(rightPage).appendTo($(paginationUl));
      if (j >= numPage + pageNav) {
        break;
      }
    }
  
    let paginationNext = $(
      '<li class="page-item"><button class="' +
        paginationId +
        ' page-link next">Next</button></li>'
    ).appendTo(paginationUl);
  
    $(paginationPrev).hide();
    if (pageName > 1) {
      $(paginationPrev).show();
    } else {
      $(paginationPrev).hide();
    }
  
    if (pageName >= pagesmax) {
      $(paginationNext).hide();
    } else {
      $(paginationNext).show();
    }
  
}
  