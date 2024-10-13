import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <Link to={'https://wa.me/qr/YNU3OVYCTBUMH1'}><IoLogoWhatsapp/></Link>
            <Link to={'https://www.instagram.com/sakibprodhan_00/'}><FaInstagram/></Link>
            <Link to={'https://www.facebook.com/sakib.prodhan.3994/'}><FaFacebook/></Link>
        </div>
    );
};

export default Contact;