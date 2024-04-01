import "./CardAppointments.css"

export const cardAppointments = ({dateAppointment, service_id}) => {

    return (
        <div className="cardAppointmentsDesign">
            <div>{dateAppointment}</div>
            <div>{service_id}</div>
        </div>
    )
}