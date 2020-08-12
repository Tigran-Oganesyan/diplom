export default class DataStorage {
    vanishOldData() {
        localStorage.clear()
    }

    uploadData(articles) {
        localStorage.newsArray = JSON.stringify(articles);
    }

    uploadKeyWord(word) {
        localStorage.keyWord = word 
    }

    uploadCounter(counter) {
        localStorage.counter = counter;
    }
}