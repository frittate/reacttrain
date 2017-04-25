var React = require('react');

function EventView(props){
        return(
            <div className="home-container">
                <form className='eventForm'>
                    <div className="head">
                        <input type='submit' value='Erstellen' className='btn-submit' />
                        <Name />
                    </div>
                    <Time />
                    <Type />
                    <Cost />
                    <Options />
                    <Comments />
                    <Image />
                    <Participants />
                </form>
            </div>
           
        )
}

function Name(props){
    return(
        <div className='formInputField'>
            <label>Gib deinem Event einen Namen</label><br />
            <input type='text' 
            value='value' 
            className='textInput' 
            placeholder='Gib deinem Event einen Namen' />
        </div>
    )
}

function Time(props){
    return(
        <div className='formInputField'>
            <label>Gib eine Zeit an</label><br />
            <input type='text' 
            value='value' 
            className='textInput' 
            placeholder='Platzhalter für Zeit' />
        </div>
    )
}

function Type(props){
    return(
        <div className='formInputField'>
            <label>Bestellen oder kochen</label><br />
            <input type='radio' 
            name='type' 
            className='radioInput' 
            value='bestellen' checked /> Bestellen <br />
            <input type='radio' 
            name='type' 
            className='radioInput' 
            value='kochen' checked /> Selbst kochen <br />
        </div>
    )
}

function Cost(props){
    return(
        <div className='formInputField half-width'>
            <label>Kosten</label><br />
            <input type='number'
            name='cost' 
            min='0' max='100' 
            className='numberInput' 
            value='2' /><p>Euro</p>
        </div>
    )
}

function Options(props){
    return(
        <div className='formInputField'>
            <label>Optionen</label><br />
            <input type='checkbox'
            name='option1' 
            className='optionInput' 
            value='vegetarisch' /> Vegetarisch <br />
            <input type='checkbox'
            name='option2' 
            className='optionInput' 
            value='vegan' /> Vegan <br />
            <input type='checkbox'
            name='option3' 
            className='optionInput' 
            value='nuts' /> Mit Nüssen <br />
            <input type='checkbox'
            name='option4' 
            className='optionInput' 
            value='scharf' /> Scharf <br />
        </div>
    )
}

function Comments(props){
    return(
        <div className='formInputField'>
            <label>Kommentare und Extrawünsche</label><br />
            <textarea value='input' className='textInput'/>
        </div>
    )
}

function Image(props){
    return(
        <div className='formInputField'>
            <label>Gib die URL zu einem Bild an</label><br />
            <input type='text' 
            value='value' 
            className='textInput' 
            placeholder='Gib deinem Event einen Namen' />
        </div>
    )
}

function Participants(props){
    return(
        <div className='formInputField'>
            <label>Wer nimmt alles teil?</label><br />
            <input type='text' 
            value='value' 
            className='textInput' 
            placeholder='Teilnehmer' />
        </div>
    )
}

module.exports = EventView;
