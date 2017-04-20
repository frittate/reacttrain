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
                    ) //passing 'this' into the callback function at the end as 2nd argument, not necessary when stateless functional component
                })} 
            </ul>
            )
}

function Page (props) {
    var pages = [10,30,100];
    return (
   
        
        <ul className='languages'>
            {pages.map(function(page){
                    return (
                        <li
                        style={page === props.perPage ? {color: '#0000ff'} : null}
                        onClick={props.onSelect.bind(null, page)}
                        className='paginator' 
                        key={page}>
                            {page}
                        </li>
                    ) //passing 'this' into the callback function at the end as 2nd argument, not necessary when stateless functional component
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
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'><a href={repo.html_url} target='_blank'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li className='bolded'>{repo.name}</li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li></a>
            </ul>
          </li>
        )
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
                perPage: 10,
            }
            this.updateLanguage = this.updateLanguage.bind(this);
            this.updatePerPage = this.updatePerPage.bind(this); //always bind the this from the invoked context to the this.updateLanguage function
    }

    componentDidMount(){
        //debugger;
        this.updateLanguage(this.state.selectedLanguage);
        this.updatePerPage(this.state.perPage);
    }    

    updateLanguage(lang){
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null,
            }
        });

    api.fetchPopularRepos(lang, this.state.perPage)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos,
          }
        });
      }.bind(this));
    }

    updatePerPage(page){
        this.setState(function(){
            return {
                perPage: page,
                repos: null,
            }
        });
    
    api.fetchPopularRepos(this.state.selectedLanguage, page)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos,
          }
        });
      }.bind(this));
    }


    render(){
        return(
            
            <div>
                <Page 
                perPage={this.state.perPage}
                onSelect={this.updatePerPage} />

                <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage} /> 

                {!this.state.repos
                ? <p>Loading {this.state.perPage} {this.state.selectedLanguage} Repos for you!</p>
                : <RepoGrid repos={this.state.repos} />}
            </div>
        )
    }
}

module.exports = Popular;