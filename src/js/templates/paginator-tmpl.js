const paginatorTemplate = {
              page: '<a href="#" class="btn__pagination">{{page}}</a>',
              currentPage: '<strong class="btn__pagination btn__number--active">{{page}}</strong>',
              moveButton:
                '<a href="#" class="btn__pagination btn__arrow custom-{{type}}>' +
                  '<span class="arrow-{{type}}">{{type}}</span>' +
                '</a>',
              disabledMoveButton:
                '<span class="btn__pagination btn__arrow btn__arrow--disabled tui-{{type}}">' +
                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
              moreButton:
                '<a href="#" btn__pagination tui-{{type}}-is-ellip">' +
                  '<span class="tui-ico-ellip">...</span>' +
                '</a>'
            } 

export { paginatorTemplate }