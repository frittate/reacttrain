var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage (props){ //stateless functional component: a component written as a function without any state, so state > UI, without render()
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return( 
        <ul className='languages'>
                {languages.map(function(lang){
                    return (
                        <li
                        style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, lang)} 
                        key={lang}>
                            {lang}
                        </li>
                    ) //passing 'this' into the callback function at the end as 2nd argument
                })} 
            </ul>
            )
}

SelectLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

function RepoGrid (props) {
    return (
        <ul className='popular-list'>
            {props.repos.map(function(repo, index){
                <li key={repo.name} class='popular-item'>
                    <div className='popular-rank'>#{index + 1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img
                            className='avatar'
                            src={repo.owner.avatar_url}
                            alt={'Avatar for ' + repo.owner.login} />
                        </li>
                    </ul>
                </li>
            })}
        </ul>
    )
}

class Popular extends React.Component{
    constructor (props){ //establish initial state, available through this.state
            super(props);
            this.state = {
                selectedLanguage: 'All',
                repos: null,
            }
            this.updateLanguage = this.updateLanguage.bind(this); //always bind the this from the invoked context to the this.updateLanguage function
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }    

    updateLanguage(lang){
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null,
            }
        });

        api.fetchPopularRepos(lang)
        .then(function(repos){
           this.setState(function(){
               return {
                repos: repos
               }
           })
        }.bind(this));
    }

    render(){
        return(
            <div>
                <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage} /> 
                <RepoGrid repos={this.state.repos} />
                </div>
        )
    }
}

module.exports = Popular;