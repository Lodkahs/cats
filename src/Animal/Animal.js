import React, {Component} from 'react';
import './Animal.css';

class Animal extends Component{

    isSelected = false;
    constructor(props){
        super(props);
        this.state = {defaultClass: 'animal row'};
    }

    addSelected = () => {
        this.isSelected = !this.isSelected;

        if (this.isSelected) {
            this.props.select(this.props.index);
            let a = this.state.defaultClass + ' selected';
            this.setState({defaultClass: a});
        } else {
            this.setState({defaultClass: 'animal row'});
            this.props.deselect(this.props.index);
        }

    };

    render() {
        return (
            <div onClick={this.addSelected} className={this.state.defaultClass}>
                <div className='col-md-8 col-sm-8'>
                    <img src={this.props.imageUrl} alt="1"/>
                </div>
                <div className='col-md-4 col-sm-4'>
                    <p>Его зовут {this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Animal;