import Logo from "../components/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare,
         faInstagram,
         faTwitter,
         faYoutube,
         faTelegramPlane} from "@fortawesome/free-brands-svg-icons"
import Title from "../components/Title"

const icons = [{icon : faFacebookSquare , adress : 'https://www.facebook.com/'}, 
                {icon : faInstagram, adress : 'https://www.instagram.com/'}, 
                {icon :faTwitter, adress:'https://twitter.com/'}, 
                {icon : faYoutube, adress : 'https://youtube.com/'}]


function Footer(){
    return(
        <div className="mt-20 flex flex-wrap">
            <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex justify-center text-center">
                    <Logo />
                </div>
                <div className="flex justify-center text-center mt-5">
                    {icons.map(item=>( 
                    <a href={item.adress}>
                        <div className="mx-3 bg-primary rounded-full w-10 h-10 pt-2">                         
                            <FontAwesomeIcon icon={item.icon} className="text-secondary text-2xl"/>        
                        </div>
                    </a>
                    ))}                       
                </div>
                 
            </div>
            <div className="lg:w-1/2 text-center mt-5 lg:mt-0">
                <h1 className="font-bold text-2xl pt-5">Une question? Contactez-nous</h1>
                <form action="POST" className="flex justify-center mt-8">
                    <input className="border border-primary p-1 rounded-l-md" type="email"></input>
                    <div className = "text-secondary bg-primary px-4 rounded-r-md">
                        <button type="submit"><FontAwesomeIcon icon={faTelegramPlane} className="pt-2 text-2xl" /></button> 
                    </div>                    
                </form>

                
            </div>
        </div>
    )
}

export default Footer