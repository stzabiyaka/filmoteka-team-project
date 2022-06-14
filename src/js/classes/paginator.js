export default class Paginator {
        totalPages;
        page;
    constructor () {
        this.totalPages = 1;
        this.page = 1;
        this.paginationIndicator = null;
    }

    showPagination ({ page = 1, totalPages = 1 }) {
        this.page = page;
        this.totalPages = totalPages;
        if (this.totalPages === 1) {
            return;
        }

        if (this.totalPages <= 5) {
            this.paginationIndicator = this.#calculateCurrentDisplay(this.totalPages).fill().map((element, i) => i + 1);
            console.log(this.paginationIndicator);
        }
        
        
        


        
    }

    #calculateCurrentDisplay (size) {
        return this.paginationIndicator = new Array(size);
    }
}