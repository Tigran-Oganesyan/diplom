import {newsApi, newsCardList, dataStorage} from '../../index'

export default class SearchForm {
    constructor(form, root, search, section, error) {
        this.form = form;
        this.root = root;
        this.search = search;
        this.section = section;
        this.error = error;
        this.formInput = this.form.querySelector('.search__input');
        this.form
            .addEventListener('submit', this.callApi.bind(this));   
            
    }
    
    callApi() {
        event.preventDefault();
        const keyWord = this.formInput.value;
        this.error.style.display = "none";
        this.root.style.display = "none";
        this.section.style.display = "block";
        this.search.style.display = "flex";
        newsApi.getNews(keyWord)
            .then(res => 
                {
                    if (res.articles.length > 0) {
                        dataStorage.vanishOldData();
                        dataStorage.uploadKeyWord(keyWord)
                        dataStorage.uploadData(res.articles);
                    }
                    newsCardList.addListCard(res.articles);
                })
            .catch(err => console.log(err))
    }

    preloadKeyWord(keyWord) {
        this.formInput.value = keyWord
    }
}