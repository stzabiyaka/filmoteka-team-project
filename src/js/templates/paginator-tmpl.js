const paginatorTemplate = {
              page: '<a href="#" class="btn__pagination">{{page}}</a>',
              currentPage: '<strong class="btn__pagination btn__number--active">{{page}}</strong>',
              moveButton:
                '<a href="#" class="btn__pagination btn__arrow-{{type}}">' +
                  '<div class="icon-arrow-{{type}}"></div>' +
                '</a>',

                // moveButton: type => {
                //   let template = '';
              
                //   if (type === 'first') {
                //     template = '<a href="#" class="btn__pagination btn__arrow">' +
                //       '<div>1</div>' +
                //       '</a>';
                //   }
                //   if (type === 'last') {
                //     template = '<a href="#" class="btn__pagination btn__arrow">' +
                //       '<div>1000</div>' +
                //       '</a>';
                //   }
                //   if (type === 'next') {
                //     template = '<a href="#" class="btn__pagination btn__arrow"></a>' +
                //       '<div class="icon-arrow-next"></div>' +
                //       '</a>';
                //   }
                //   if (type === 'prev') {
                //     template = '<a href="#" class="btn__pagination btn__arrow"></a>' +
                //       '<div class="icon-arrow-prev"></div>' +
                //       '</a>';
                //   }
              
                //   return template;
                // },
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