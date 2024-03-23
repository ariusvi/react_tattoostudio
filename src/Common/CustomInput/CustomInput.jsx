import "./CustomInput.css"

export const CustomInput = ({className, type, name, value, onChangeFunction}) => {

    return (
        <input
            className={className}
            type={type}
            name={name}
            value={value}
            onChange={onChangeFunction}
        />
    )
}