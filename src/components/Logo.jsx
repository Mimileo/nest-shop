const Logo = ({ src = "/logo.png", alt = "DigitalNest Logo", className = "logo h-10 w-10" }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={className} 
        />
    )
}

export default Logo;