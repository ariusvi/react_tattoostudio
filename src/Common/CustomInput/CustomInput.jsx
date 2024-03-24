import "./CustomInput.css"

export const CustomInput = ({className, type, name, value, placeholder, functionChange, disabled, onBlurFunction}) => {

    return (
        <input 
            className={className}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={functionChange}
            disabled={disabled}
            onBlur={onBlurFunction}
        />
    )
}