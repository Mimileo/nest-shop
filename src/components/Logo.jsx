import { Link } from 'react-router-dom';

const Logo = ({  alt = "DigitalNest Logo", className = "logo h-10 w-10" }) => {
    return (<>
       <Link to="/">
            <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt={alt} 
                loading="lazy"
                className={className} 
            />
       </Link>
    
    
    </>
       
    )
}

export default Logo;