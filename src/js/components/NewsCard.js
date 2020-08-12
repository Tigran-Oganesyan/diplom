import DateChanger from '../utils/DateChanger';
export default class NewsCard {
    constructor(imageUrl, date, title, paragraph, source, sourceLink) {
        this.imageUrl = imageUrl;
        this.date = date;
        this.title = title;
        this.paragraph = paragraph;
        this.source = source;
        this.sourceLink = sourceLink
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('cards__item');

        const dateChanger = new DateChanger(this.date);
        const dateObj = dateChanger.dateFormation();
        const dateFormated = dateObj.dayFormated + ' ' + dateObj.monthFormated.firstType + ', ' + dateObj.yearFormated

        const text = this.paragraph.replace(/<\/*\w+>/gm, '');

        const template = 
            `<img class="cards__image" src="${this.imageUrl}">
            <div class="cards__content-row">
                <p class="cards__item-date">${dateFormated}</p>
                <h2 class="cards__item-title">${this.title}</h2>
                <p class="cards__item-paragraph">${text}</p>
                <a class="cards__item-source" href="${this.sourceLink}">${this.source}</a>
            </div>`;

        card.insertAdjacentHTML('afterBegin', template);

        return card
    }

}