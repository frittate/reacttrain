var React = require('react');
var Link = require('react-router-dom').Link;
var EventView = require('./EventView');

class ShowEventList extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            events: [1],
        } 
        this.onAdd = this.onAdd.bind(this);     
    }

    onAdd(){
            this.setState({
                events: this.state.events.push(this.state.events.length+1)
            })
            console.log(this.state.events);
        }

 render(){
     return(
         <div>
             {this.state.events.map(function(eventId){
                 return (
                 <EventView key={eventId} />
                 )
             })}
             <div>
                <button className='btn btn-add' onClick={this.onAdd}>Add new</button>
             </div>
        </div>
    )
 }
}

module.exports = ShowEventList;


//Array hat nur das Default-Element namens Add New
//bei click wird ein neues statisches Element der Liste hinzugefügt, Liste wird +1 ausgegeben
//Add rutscht auf den neuen Platz