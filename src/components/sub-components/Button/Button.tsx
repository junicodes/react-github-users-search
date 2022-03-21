import { ButtonProps } from './Interfaces'


const Button = ({ btnText, disabled, className, onTriggerFunction}: ButtonProps) => {

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, ...other: any) => {
        return onTriggerFunction(e, other)
    }

    return (
        <button
            onClick={(e) => handleBtnClick(e, 'last')}
            disabled={disabled}
            type="button"
            className={className}
            >
            {btnText}
        </button>
    )
}

export default Button;
 