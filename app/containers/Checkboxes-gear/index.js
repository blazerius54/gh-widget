import React, { Component } from 'react';
import './style.js';
import styled, { css } from 'styled-components'

const radioBtns = [{ label: 'Любая', value: 'any' }, { label: 'Автомат', value: 'auto' }, { label: 'Ручная', value: 'manual' }]

class CheckboxesGear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }
    
    render() {
        const btnShadow = this.props.darkTheme ? { boxShadow: 'inset 0px 0px 0px 3px gray, 0px 0px 0px 3px #77d69c' } : { boxShadow: 'inset 0px 0px 0px 3px #fafafa, 0px 0px 0px 3px #77d69c' }
        return (
            <div>
                <p style={{width: '85%',margin: '10px 0 10px 0', color: '#a3a3a3', fontSize: '85%', textAlign: 'left'}}>Коробка передач: </p>
                <div className='gearboxes-container' >
                    {
                        radioBtns.map((item, index) => {
                            return (
                                <div onClick={() => this.setState({ active: index })} key={index}
                                className='single-gear'>
                                    {
                                        this.state.active === index ?
                                            <button className='round-btn active-btn ' 
                                            style={btnShadow}>
                                            </button> :
                                            <button className='round-btn'></button>
                                    }
                                    <label>{item.label}</label>
                                </div>
                            )
                        })
                    }
                    {/* <div style={{borderRadius: '100%', width: '20px', height: '20px', background: 'black'}}></div> */}
                </div>
            </div>


        );
    }
}

export default CheckboxesGear;