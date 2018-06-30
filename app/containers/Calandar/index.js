import React, { Component } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import './style';

class WidgetCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Date(),
      to: new Date().setDate(new Date().getDate() + 14),
      // activeMonth: new Date().getMonth() + 1
      activeMonth: '8'
    }
  }

  componentWillMount() {
    this.setState({
      from: this.props.from,
      to: this.props.to,
      activeMonth: new Date(this.state.from).getMonth() + 1
    })
  }

  handleScroll() {
    this.setState({
      activeMonth: this.state.activeMonth + 1
    })
    // console.log(this.state)
  }

  closeModal(e) {
    if (e.target === this.props.modal) {
      // this.props.changeCalendarToTrue();
      this.props.setCalendarVisibleToFalse();

      // console.log('click')
    }
    // console.log(e.target)
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModal.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeModal.bind(this));
  }

  render() {
    // console.log(new Date(this.props.to), 'props')
    return (
      <div className='Base-calendar'
        onWheel={(e) => {
          this.props.changeCalendarToTrue();
          if (e.deltaY > 0) {
            this.setState({ activeMonth: this.state.activeMonth + 1 })
          } else if (e.deltaY < 0) {
            this.setState({ activeMonth: this.state.activeMonth - 1 })
          }
          // this.props.changeCalendarToFalse();

        }}
        style={{ left: this.props.takeRight }}
      >
        <div style={{ display: 'flex', borderRadius: '3px', overflow: 'hidden' }}>
          <Calendar

            activeStartDate={new Date(this.state.activeMonth + ',01,2018')}
            // value={[new Date(this.props.from), new Date(this.props.to)]}

            minDate={new Date()}
            selectRange={true}
            isOpen={true}
            required={true}
            selectRange={true}
            onChange={(value) => {
              this.props.foo(value)
              this.setState({
                from: value[0],
                to: value[1]
              })
            }}
          // showNavigation={false}
          />
          {
            this.props.innerWidth >= 560 &&
            <Calendar

              activeStartDate={new Date((this.state.activeMonth + 1) + ',01,2018')}
              // value={[new Date(this.props.from), new Date(this.props.to)]}
              minDate={new Date()}
              selectRange={true}
              isOpen={true}
              required={true}
              selectRange={true}
              onChange={(value) => {
                this.props.foo(value)
                this.setState({
                  from: value[0],
                  to: value[1]
                })
              }}
            // showNavigation={false}
            />
          }
        </div>

        {/* {
          this.props.isCalendarActive ?
              <Calendar
                
                activeStartDate={new Date(this.state.activeMonth + ',01,2018')}
                // value={[new Date(this.props.from), new Date(this.props.to)]}
              
                minDate={new Date()}
                selectRange={true}
                isOpen={true}
                required={true}
                selectRange={true}
                onChange={(value) => {
                  this.props.foo(value)
                  this.setState({
                    from: value[0],
                    to: value[1]
                  })
                }}
              // showNavigation={false}
              />
            :
            <Calendar

              // activeStartDate={new Date(this.state.activeMonth+'-01-2018')}
              value={[new Date(this.props.from), new Date(this.props.to)]}
              minDate={new Date()}
              selectRange={true}
              isOpen={true}
              required={true}
              selectRange={true}
            // onChange={(value) => {
            //   this.props.foo(value)
            //   this.setState({
            //     from: value[0],
            //     to: value[1]
            //   })
            // }}
            // showNavigation={false}
            />
        } */}
      </div>
    );
  }
}

export default WidgetCalendar;