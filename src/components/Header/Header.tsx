import styles from './Header.module.scss';
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { HeaderProps } from './Interfaces';


const Header = ({headerText, heroText, heroTextAuthor}: HeaderProps) => {

    return (
        <div data-testid="header-component" className={`${styles.container} h-96 w-full flex justify-center items-center`}>
          <div>
            <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold drop-shadow-3xl text-shadow-xl p-5 rounded-full'>
              {headerText}
            </h1>
            <blockquote className='text-white text-md md:text-2xl w-1/2 mx-auto text-shadow-xl'>  
              <span data-testid="hero-text">{heroText}</span><br></br><br></br>
              <strong data-testid="hero-text-author" className='text-pink-500'>{heroTextAuthor}</strong>
            </blockquote>
            <div className='flex justify-center mt-8 cursor-pointer'>
                 <FaArrowDown className="animate-bounce text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
    )
}

export default Header;
 