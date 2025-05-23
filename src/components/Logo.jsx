import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Logo = ({ src = logo, alt = "DigitalNest Logo", className = "logo h-10 w-10" }) => {
    return (<>
       <Link to="/">
            <img 
                src={src} 
                alt={alt} 
                loading="lazy"
                className={className} 
            />
       </Link>
    
    
    </>
       
    )
}

export default Logo;