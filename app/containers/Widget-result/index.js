import React from 'react';
import img from '../../images/testcar.jpg'
import SingleResult from '../Single-result';
import './styles';
import bgImg from '../../images/whiteBg.png'

export default function WidgetResult(props) {
    const result = [];
    for(let i=0; i<props.resultAmount; i++) {
        result.push(<SingleResult key={i} innerWidth={props.innerWidth}/>)
    } 
    return (
        <div className='Widget-result'>
            <div className='result-column'>
                <p style={{ margin: '10px 0',color: '#a3a3a3', fontSize: '85%', textAlign: 'left' }}>Например,</p>
                <div className='result-content'>
                    {result.map((item, key)=>item)}
                </div>
            </div>
            <div className='result-more'>
                <p style={{ marginBottom: 10 }}>и ещё 234 авто</p>
            </div>
        </div>

    );
}
