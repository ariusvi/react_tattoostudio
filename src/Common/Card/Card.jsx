
export const Card = ({id , serviceName, description}) => {

    return (
        <div className="cardDesign" >
            <div>{id}</div>
            <div>{serviceName}</div>
            <div>{description}</div>
        </div>
    )
}