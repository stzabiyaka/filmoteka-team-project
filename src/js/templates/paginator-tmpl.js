const paginatorTemplate = {
              page: '<a href="#" class="btn__pagination">{{page}}</a>',
              currentPage: '<strong class="btn__pagination btn__number--active">{{page}}</strong>',
              moveButton:
                '<a href="#" class="btn__pagination btn__arrow">' +
                  '<div class="icon-arrow-{{type}}"></div>' +
                '</a>',
              disabledMoveButton:
                '<span class="btn__pagination btn__arrow btn__arrow--disabled">' +
                  '<div class="icon-arrow-{{type}}"></div>' +
                '</span>',
              moreButton:
                '<a href="#" class="btn__pagination btn__pagination--more">' +
                  '<span>...</span>' +
                '</a>'
            } 

export { paginatorTemplate }