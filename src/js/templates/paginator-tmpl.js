const paginatorTemplate = {
              page: '<a href="#" class="btn__pagination" title="Page {{page}}">{{page}}</a>',
              currentPage: '<strong class="btn__pagination btn__number--active" title="Current page">{{page}}</strong>',
              moveButton:
                '<a href="#" class="btn__pagination btn__arrow-{{type}}" title="Go to {{type}}">' +
                  '<div class="icon-arrow-{{type}}"></div>' +
                '</a>',
              disabledMoveButton:
                '<span class="btn__pagination btn__arrow-{{type}} btn__arrow--disabled">' +
                  '<div class="icon-arrow-{{type}}"></div>' +
                '</span>',
              moreButton:
                '<a href="#" class="btn__pagination btn__pagination--more">' +
                  '<span>...</span>' +
                '</a>'
            } 

export { paginatorTemplate }