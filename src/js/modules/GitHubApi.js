export default class GitHubApi {
    constructor(options) {
        this.options = options;
    }
    
    getCommits() {
        return fetch(`${this.options.baseUrl}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status)
            }

            return res.json()
        })
    }
}