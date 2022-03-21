
import { FaSmileWink } from "@react-icons/all-files/fa/FaSmileWink";

const Footer = () => {
    return (
        <div data-testid="footer-component" className='w-full h-14 border-t'>
            <div className='containe h-full w-full mx-auto flex flex-col justify-center items-center'>
                <div className="flex justify-center text-xs">
                    <p>Design by the only fire coder&nbsp;</p>
                    <FaSmileWink  className=" text-gray-500"/>&nbsp;
                    <a className="" href="https://github.com/junicodes" target="__blank" title="Open junicodes github">
                         <strong className='text-pink-500'>{`<Junicodes />`}</strong>
                    </a>
                </div>
                <p className="text-xs">© 2022 scal.io™. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
 