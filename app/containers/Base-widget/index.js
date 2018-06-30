import React, { Component } from 'react';
import WidgetCalendar from '../Calandar';
import DateInput from '../Date-input';
import moment from 'moment';
import bgImg from '../../images/carbg.jpg';
import './styles';
import WidgetHeader from '../Widget-header';
import WidgetInfo from '../Widget-info';
import WidgetResult from '../Widget-result';
import CheckboxesGear from '../Checkboxes-gear';
import LocationInput from '../Location-input';
import { FindValueSubscriber } from 'rxjs/operator/find';

const style = {
  bgImg: {
    backgroundImage: "url(" + bgImg + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '40% 0%',
    backgroundSize: '1400px' + '628px,'
  }
}

class BaseMedium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Date(),
      to: new Date().setDate(new Date().getDate() + 2),
      isCalendarVisisble: false,
      isCalendarActive: false,
      isLocationInputActive: false,
      showResult: false,
      innerWidth: window.innerWidth,
      resultAmount: 1,
      smallest: false,
      gearBox: true,
      selectedCountry: '',
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    if (innerWidth <= 199) {
      this.setState({
        smallest: true,
        gearBox: false
      })
    } else if (innerWidth <= 370) {
      this.setState({
        smallest: false,
        gearBox: true,
        resultAmount: 1
      })
    } else if (innerWidth <= 560) {
      this.setState({
        resultAmount: 2
      })
    } else if (innerWidth <= 940) {
      this.setState({
        resultAmount: 3
      })
    } else if (innerWidth >= 1280 || innerWidth <= 1280) {
      this.setState({
        resultAmount: 5
      })
    }
  }

  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  handleResize(windowSize, event) {
    // console.log(window.innerWidth)
    let innerWidth = this.state.innerWidth;
    if (innerWidth <= 199) {
      this.setState({
        smallest: true,
        gearBox: false
      })
    } else if (innerWidth <= 370) {
      this.setState({
        smallest: false,
        gearBox: true,
        resultAmount: 1
      })
    } else if (innerWidth <= 560) {
      this.setState({
        resultAmount: 2
      })
    } else if (innerWidth <= 940) {
      this.setState({
        resultAmount: 3
      })
    } else if (innerWidth >= 1280 || innerWidth <= 1280) {
      this.setState({
        resultAmount: 5
      })
    }

    this.setState({ innerWidth: window.innerWidth })

  }

  changeDate(date) {

    if (date.length > 0) {
      let from = date.split(' ')[0];
      let to = date.split(' ')[1];

      let monthFrom = from.split('.')[1] || 1;
      let dayFrom = from.split('.')[0] || 1;
      let yearFrom = from.split('.')[2] || new Date().getFullYear();

      let monthTo = to.split('.')[1];
      let dayTo = to.split('.')[0];
      let yearTo = to.split('.')[2];

      console.log(monthTo, dayTo, yearTo);

      this.setState({
        from: '' + monthFrom + ' ' + dayFrom + ' ' + yearFrom,
        to: '' + monthTo + ' ' + dayTo + ' ' + yearTo
      })

      // else if(isNaN(this.state.to)){
      //     this.setState({
      //       to: new Date().setDate(new Date().getDate() + 2)
      //     })
      // }
      console.log(this.state.to);

    }
    // }
  }

  foo(value) {
    this.setState({
      from: value[0],
      to: value[1]
    })
  }

  setCalendarVisibleToFalse() {
    this.setState({
      isCalendarVisisble: false
    })
  }

  changeCalendarToTrue() {
    // console.log('s')
    this.setState({
      // from: new Date(),
      // to: new Date().setDate(new Date().getDate() + 2),
      isCalendarActive: true
    })
  }

  changeCalendarToFalse() {
    this.setState({
      showResult: false,
      isCalendarActive: false,
      isCalendarVisisble: true
    })
  }

  changeInputActive() {
    this.setState({
      isLocationInputActive: !this.state.isLocationInputActive
    })
  }

  onValueInputLocationChange(selectedCountry) {
    console.log(selectedCountry)
    this.setState({
      selectedCountry
    })
  }

  render() {
    return (
      <div
        className={this.props.class}
        style={this.props.showBgImg ? style.bgImg : null || this.props.darkTheme ? { background: '#444444' } : null}
      >
        <div
          ref={ref => { this.modal = ref }}
          className={this.state.isCalendarVisisble ? 'visible' : 'invisible'}
        ></div>

        <WidgetHeader smallest={this.state.smallest} darkTheme={this.props.darkTheme} innerWidth={this.state.innerWidth} />
        <div className='options'>
          <div className='filter-inputs'>
            <div ref={ref => { this.selectRef = ref }}>
              <LocationInput
                selectedCountry={this.state.selectedCountry}
                changeInputActive={this.changeInputActive.bind(this)}
                onValueInputLocationChange={this.onValueInputLocationChange.bind(this)}
              />
            {
              this.state.isLocationInputActive &&
              <div className='receive-return-container'>
                <p>
                  <span style={{ color: '#4edba3', marginRight: '3px' }}>Получение</span><span style={{ marginRight: '3px' }}>и</span><span style={{ borderBottom: '3px solid #4edba3' }}>возврат</span>
                </p>
              </div>
            }
            </div>

            <DateInput changeDate={this.changeDate.bind(this)} from={this.state.from} to={this.state.to}
              isCalendarActive={this.state.isCalendarActive}
              changeCalendarToFalse={this.changeCalendarToFalse.bind(this)}
            />

            {this.state.innerWidth >= 560 ?
              <button className='srh-btn' onClick={() => this.setState({ isCalendarVisisble: false, showResult: true })}>Найти</button>
              : null}
          </div>
          {
            this.state.isCalendarVisisble
            &&
            <WidgetCalendar foo={this.foo.bind(this)} from={this.state.from} to={this.state.to} isCalendarActive={this.state.isCalendarActive}
              changeCalendarToTrue={this.changeCalendarToTrue.bind(this)}
              changeCalendarToFalse={this.changeCalendarToFalse.bind(this)}
              setCalendarVisibleToFalse={this.setCalendarVisibleToFalse.bind(this)}
              modal={this.modal}
              innerWidth={this.state.innerWidth}
            />
          }
          {/* <WidgetCalendar foo={this.foo.bind(this)} from={this.state.from} to={this.state.to} isCalendarActive={this.state.isCalendarActive}
            changeCalendarToTrue={this.changeCalendarToTrue.bind(this)}
            changeCalendarToFalse={this.changeCalendarToFalse.bind(this)} /> */}
          {this.state.gearBox && <CheckboxesGear class={this.props.class} darkTheme={this.props.darkTheme} />}
          {this.state.innerWidth < 560 ?
            <button className='srh-btn' onClick={() => this.setState({ isCalendarVisisble: false, showResult: true })}>Найти</button>
            : null}
          {this.state.showResult && <WidgetResult innerWidth={this.state.innerWidth} resultAmount={this.state.resultAmount} />}
          {!this.state.smallest && <WidgetInfo />}
        </div>
      </div>
    );
  }
}

export default BaseMedium;