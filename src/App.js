import React, {Component} from 'react';
import './App.css';
import Animal from './Animal/Animal.js';

const userData = require('./test.json');
let cats = [];

class App extends Component {

    showAnimalId = () => {
        if (cats.length) {
            alert(cats);
        } else {
            alert('Вы не выбрали котиков :(');
        }
    };

    catSelected = (id) => {
        cats.push(id);
    };

    catDeselected = (id) => {
        cats = cats.filter( el => el !== id);
    };

    render() {
        return (
            <div className='col-md-4 main offset-md-4'>
                {userData.map((value, index) => {
                    return <Animal select={this.catSelected} deselect={this.catDeselected} key={index}
                                   imageUrl={value.imageUrl} name={value.name} index={value.id}/>
                })}
                <button className='submit' onClick={this.showAnimalId}>Show animal id</button>
            </div>
        )
    }
}

export default App;
