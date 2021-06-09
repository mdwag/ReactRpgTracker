import './InputArea.css';
import React, {useState} from 'react';

const InputArea = (props) => {
    const [formValue, setFormValue] = useState('');
    const [scoreValue, setScoreValue] = useState('');
    const changeScoreHandler = (event) => {
        setScoreValue(event.target.value);
    }
    const changeHandler = (event) => {
        setFormValue(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm(formValue, scoreValue);
        setFormValue('');
        setScoreValue('');
    }
    const sortHandler = () => {
        props.onSortList();
    }
    return (
        <div className='input-area'>
            <div>
                <h2>RPG Turn Tracker</h2>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                    <label for='list-input'>
                        Character Name:
                    </label>
                    </div>
                    <input id='list-input' type='text' onChange={changeHandler} value={formValue} required/>
                    <div className='score-input'>
                        <div>
                        <label for='score-input'>Initiative:</label>
                        </div>
                        <input type='number' required value={scoreValue} onChange={changeScoreHandler} id='score-input'></input>
                    
                    </div>
    
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default InputArea;