var axios = require('axios');

module.exports = {
    fetchPopularRepos: function (language, perPage) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories&page=1&per_page=' + perPage); //github API

        return axios.get(encodedURI)
        .then(function (response) {
            return response.data.items;
        })
    }
}

