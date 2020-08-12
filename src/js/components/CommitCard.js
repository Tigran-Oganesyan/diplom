import DateChanger from '../utils/DateChanger';  
export default class CommitCard {
    constructor(date, imageUrl, name, email, text) {
        this.date = date;
        this.imageUrl = imageUrl;
        this.name = name;
        this.email = email;
        this.text = text;
    }

    createCard() {
        const commitCard = document.createElement('div');
        commitCard.classList.add('swiper-slide');

        const dateChanger = new DateChanger(this.date);
        const dateObj = dateChanger.dateFormation();
        const dateFormated = dateObj.dayFormated + ' ' + dateObj.monthFormated.firstType + ', ' + dateObj.yearFormated;

        const template = 
            `<p class="swiper-date">${dateFormated}</p>
            <div class="swiper-slide-container">
                <img class="swiper-image" src="${this.imageUrl}">
                <div class="swiper-content-row">
                    <p class="swiper-name">${this.name}</p>
                    <p class="swiper-email">${this.email}</p>  
                </div>
            </div>
            <p class="swiper-paragraph">${this.text}`;

        commitCard.insertAdjacentHTML('afterBegin', template);

        return commitCard;
    }
}