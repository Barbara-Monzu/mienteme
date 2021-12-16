import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es'
import moment from 'moment'
import "./Calendar.css";
import DatesService from "../../services/dates.service"
// import en from 'react-big-calendar/lib/localizers/date-fns/en-ES';

const datesService = new DatesService()
const localizer = momentLocalizer(moment)

moment.locale('en-ES');


class MyCalendar extends Component {

    // moment().format('L');    // 12/16/2021


    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Paseo por el Retiro"
            }
        ],
        selectedDate: undefined,

    };

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //       cal_events: [
    //         //State is updated via componentDidMount
    //       ],
    //     }

    //   }

    //   convertDate = (date) => {
    //     return moment.utc(date).toDate()
    //   }

    //   componentDidMount() {


    //     axios.get('http://localhost:3001/events')
    //       .then(response => {
    //         console.log(response.data);
    //         let appointments = response.data;

    //         for (let i = 0; i < appointments.length; i++) {

    //           appointments[i].start = this.convertDate(appointments[i].start)
    //           appointments[i].end = this.convertDate(appointments[i].end)

    //         }

    //         this.setState({
    //           cal_events:appointments
    //         })

    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }



    // (
    //     slotInfo: {
    //       start: Date,
    //       end: Date,
    //       slots: Array<Date>,
    //       action: "select" | "click" | "doubleClick",
    //       bounds: ?{ // For "select" action
    //         x: number,
    //         y: number,
    //         top: number,
    //         right: number,
    //         left: number,
    //         bottom: number,
    //       },
    //       box: ?{ // For "click" or "doubleClick" actions
    //         clientX: number,
    //         clientY: number,
    //         x: number,
    //         y: number,
    //       },
    //     }
    //   ) => any


    render() {
        return (
            <div className="calendar">
                <Calendar
                    selectable
                    localizer={localizer}
                    culture="es-ES"
                    events={this.state.events}
                    onNavigate={date => {
                        this.setState({ selectedDate: date })
                    }}
                    // locale={en}
                    startAccessor="start"
                    defaultDate={new Date()}
                    defaultView="month"
                    endAccessor="end"
                    views={['month']}
                    selectable="true"
                    onClickDay={(item) => {
                        console.log(" VIENDO EL CALENDARIO", item)
                    }}
                    onClickEvent={(item) => {
                        console.log(" VIENDO EL CALENDARIO, ON CLICK eVENET", item)
                    }}
                    style={{ height: "70vh", width: "70vw", margin: "auto", border: "rgba(255, 172, 201, 0.8)", cursor: "pointer" }}

                />
            </div>
        )
    }
}


export default MyCalendar