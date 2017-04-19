var axios = require('axios');

module.exports = {
    fetchPopularRepos: function (language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>100+language:'+ language + '&sort=stars&order=desc&type=Repositories&page=1&per_page=50'); //github API

        return axios.get(encodedURI)
        .then(function (response) {
            return response.data.items;
        })
    }
}

