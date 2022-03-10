export class Word {
    id: number;
    content: string;
    searched: number;
    showResults: boolean;
    showCaseSensitive: boolean;
    showFullWord: boolean;
    showAllFilter: boolean;


    constructor(
        id: number = 0,
        content: string = '',
        searched: number = 0,
        showResults: boolean = false,
        showCaseSensitive: boolean = false,
        showFullWord: boolean = false,
        showAllFilter: boolean = false
    ) {
        this.id = id;
        this.content = content;
        this.searched = searched;
        this.showResults = showResults;
        this.showCaseSensitive = showCaseSensitive;
        this.showFullWord = showFullWord;
        this.showAllFilter = showAllFilter;
    }
}
