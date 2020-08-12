export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNews(keyWord) {
        console.log(keyWord);
        return fetch(`${this.options.baseUrl}q=${keyWord}&from=${this.options.date}&sortBy=popularity&apiKey=8f5128d73f4b4e0a9042ba96122b3a9f&pageSize=100&language=ru`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status)
            }

            return res.json()
        })
    }
}