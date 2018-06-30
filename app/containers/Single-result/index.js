import React from 'react';
import img from '../../images/testcar.jpg'
import bgImg from '../../images/whiteBg.png'

const style = {
    bgImg: {
        backgroundImage: "url(" + bgImg + ")",
        backgroundRepeat: 'no-repeat',
    }
}

const rubble = String.fromCharCode(8381);

export default function SingleResult(props) {
    return (
        <div className='single-result-item' style={props.innerWidth >= 370? {background: 'white'} : style.bgImg}>
            <img src={img} alt='car' />
            <div>
                <p className='car-name'>Lada Granta, 2017</p>
                <p style={{ marginBottom: '0' }}>1.5 AT, бензин</p>
                <div className='result-cost'>
                    <p className='main-cost'>5 000 {rubble}</p>
                    <div className='cost-small'>
                        <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '90%'}}>1 500</span> <span>1 300 {rubble} в день</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
