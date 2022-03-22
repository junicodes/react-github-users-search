import { ButtonProps } from './Interfaces'


const Button = ({ btnText, disabled, variant, onTriggerFunction}: ButtonProps) => {

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, ...other: any) => {
        return onTriggerFunction(e, other)
    }

    return (
        <button
            onClick={(e) => handleBtnClick(e, 'last')}
            disabled={disabled}
            type="button"
            className={variant}
            >
            {btnText}
        </button>
    )
}

export default Button;
 