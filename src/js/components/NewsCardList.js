import NewsCard from './NewsCard';
import { dataStorage } from '../../index';

export default class NewsCardList {
    constructor(container, root, search, error, cardsButton, section) {
        this.container = container;
        this.root = root;
        this.search = search;
        this.error = error;
        this.cardsButton = cardsButton;
        this.section = section
        this.cardsButton
            .addEventListener('click', () => this.addPreloadedListCard(JSON.parse(localStorage.newsArray)));
        this.counter = 0;
    }
    
    addCard(imageUrl, date, title, paragraph, source, sourceLink) {
        const newsCard = new NewsCard(imageUrl, date, title, paragraph, source, sourceLink);
        const element = newsCard.createCard();
        this.container.appendChild(element);
    }

    addListCard(list) {
        this.container.innerHTML = '';
        this.cardsButton.style.display = 'flex';
        const listSliced = list.slice(0, 3);
        if ((list.length <= 3 & list.length > 0) || (listSliced.length <= 2 & listSliced.length > 0)) {
            for (const data of listSliced) {
                this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name, data.url);
            };
            this.error.style.display = "none";
            this.search.style.display = "none";
            this.root.style.display = "block";
            this.cardsButton.style.display = 'none';
            this.counter = 0;
            dataStorage.uploadCounter(this.counter)
        } else if (listSliced.length > 0) {
            for (const data of listSliced) {
                this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name, data.url);
            };
            this.error.style.display = "none";
            this.search.style.display = "none";
            this.root.style.display = "block";
            this.counter = 0;
            dataStorage.uploadCounter(this.counter)
        } else {
            this.search.style.display = "none";
            this.error.style.display = "flex";
        };
    }

    addPreloadedListCard(list) {
        const listSliced = list.slice(3 + this.counter * 3,6 + this.counter * 3);
        if (list.length <= 3 || listSliced.length <= 2) {
            for (const data of listSliced) {
                this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name, data.url);
            };
            this.cardsButton.style.display = 'none';
            this.counter++
            dataStorage.uploadCounter(this.counter)
        } else if (listSliced.length > 0) {
            for (const data of listSliced) {
                this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name, data.url);
            };
            this.counter++
            dataStorage.uploadCounter(this.counter)
        } else {
            this.cardsButton.style.display = 'none';
        }
    }

    addListCardFromLocalStorage(localStorageList, localStorageCounter) {
        const listSliced = localStorageList.slice(0,3 + localStorageCounter * 3);
        for (const data of listSliced) {
            this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name, data.url);
        };
        this.root.style.display = "block";
        this.section.style.display = "block";     
        if (localStorageList.length == listSliced.length) {
            this.cardsButton.style.display = 'none';
        }
    }
}