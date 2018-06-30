import React from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import './styles';
import planeImg from '../../images/flight.svg';

let City = [
    { value: 'Черногория', label: 'Черногория' },
    { value: 'Германия', label: 'Германия', airport: true },
    { value: 'США', label: 'США' },
    { value: 'Уругвай', label: 'Уругвай' },
    { value: 'Бразилия', label: 'Бразилия' },
    { value: 'Китай', label: 'Китай' },
  ]


 function locationOptionRenderer(option) {
    return (
      <div
        className='option-label'
        onClick={() => selectValue(City)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <label style={{cursor: 'pointer',}}>
          {option.label}
        </label>
        {option.airport && <img style={{ maxWidth: '20px' }} src={planeImg} alt="plans" />}
      </div>
    )
  }
  
export default function LocationInput(props) {
    return (

       <div>
            <Select
                className='SelectNpm'
                placeholder='Поиск места'
                name="form-field-name"
                value={props.selectedCountry}
                onChange={(selectedCountry)=>props.onValueInputLocationChange(selectedCountry)}
                clearable={false}
           
                options={City}
                optionRenderer={locationOptionRenderer}
           
                style={{ cursor: 'pointer', border: 'none', borderRadius: '3px', margin: '0px', minHeight: '50px', paddingTop: '8px', borderRadius: '3px', caretColor: '#4edba3' }}
                menuContainerStyle={{ boxSizing: 'contentBox', minHeight: '115px', width: '219px', padding: '10px 0', marginTop: '60px', zIndex: 1010, border: 'none', overflow: 'hidden'}}
                menuStyle={{ minHeight: '110px', width: '219px', padding: '10px 0', marginTop: '-5px', zIndex: 1010 }}
           
                onOpen={() => props.changeInputActive()}
                onClose={() => props.changeInputActive()}
            />
            
       </div>
        
    );
}