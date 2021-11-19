import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import Logo from "../components/Logo"

const menu = [{title : 'Accueil', link : '#home'}, 
            {title : 'A propos', link : '#about'},
            {title : 'Programmes', link :'#programs'},
            {title : 'Avis', link : '#opinions'},
            {title : 'Contact' , link : '#contact'}]

export default function NavBar() {
    const [hidden, setHidden] = useState(true)
    

    return(
        <div className="flex justify-between ">
                <Logo />
            <div className="hidden md:hidden lg:block">
                <ul className="flex text-gray-500 cursor-pointer">
                    {menu.map(item =>(
                        <a href={item.link}>
                        <li className="m-4 hover:text-primary hover:underline">{item.title}</li>
                        </a>
                    ))}
                    <li className="mx-3 px-9 font-bold text-primary border-2 border-primary rounded-3xl p-4 hover:bg-primary hover:text-secondary">Login</li>
                </ul>
            </div>
            <div className="block md:block lg:hidden">
                {
                    hidden ? 
                        <FontAwesomeIcon 
                            icon={faBars}
                            className = "cursor-pointer pt-4 text-primary"
                            size="3x"
                            onClick ={(()=>{setHidden(!hidden)})}
                        />
                        :
                        <div className="mt-4 top-0 right-0 absolute bg-secondary p-8 rounded-b-lg h-screen">
                            <ul className="flex flex-col text-gray-500 cursor-pointer">                            
                                <FontAwesomeIcon
                                    icon={faWindowClose}
                                    className="pt-4 cursor-pointer text-primary text-center"
                                    size='3x'
                                    onClick ={(()=>{setHidden(!hidden)})}
                                /> 
                                {menu.map(item =>(         
                                    <li className="m-4 hover:text-primary">{item.title}</li>          
                                ))}
                                <li className="mx-3 px-9 font-bold text-primary border-2 border-primary rounded-3xl p-4 hover:bg-primary hover:text-secondary">Login</li>
                            </ul>  
                        </div>
                }
            </div>
        </div>

    )
}