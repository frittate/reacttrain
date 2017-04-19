var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component{
    render(){
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return( 
        <ul className='languages'>
                {languages.map(function(lang){
                    return (
                        <li
                        style={lang === this.props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={this.props.onSelect.bind(null, lang)} 
                        key={lang}>
                            {lang}
                        </li>
                    ) //passing 'this' into the callback function at the end as 2nd argument
                },this)} 
            </ul>
            )
    }
}

SelectLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,

}

class Popular extends React.Component{
    constructor (props){ //establish initial state, available through this.state
            super(props);
            this.state = {
                selectedLanguage: 'All',
            }
            this.updateLanguage = this.updateLanguage.bind(this); //always bind the this from the invoked context to the this.updateLanguage function
        }

    updateLanguage(lang){
        this.setState(function () {
            return {
                selectedLanguage: lang,
            }
        })
    }

    render(){
        return(
            <div>
                <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage} />
                </div>
        )
    }
}

module.exports = Popular;