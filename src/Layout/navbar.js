import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"

const menu = [{title : 'Accueil', link : 'home'}, 
            {title : 'A propos', link : 'about'},
            {title : 'Programmes', link :'programs'},
            {title : 'Avis', link : 'opinions'},
            {title : 'Contact' , link : 'contact'}]

export default function NavBar() {
    const [hidden, setHidden] = useState(true)
    

    return(
        <div className="flex justify-between ">
            <div>
                <FontAwesomeIcon 
                    icon={faDumbbell} 
                    color="white"
                    size= "4x"
                    className="bg-purple-500 p-3 rounded-lg"
                    transform ={{ rotate: 45 }}
                />
                <h1></h1>
            </div> 
            
            <div className="hidden md:hidden lg:block">
                <ul className="flex text-gray-500 cursor-pointer">
                    {menu.map(item =>(
                        <a href={`#${item.link}`}>
                        <li className="m-4 hover:text-purple-500 hover:underline">{item.title}</li>
                        </a>
                    ))}
                    <li className="mx-3 px-9 font-bold text-purple-500 border-2 border-purple-500 rounded-3xl p-4 hover:bg-purple-500 hover:text-white">Login</li>
                </ul>
            </div>
            <div className="block md:block lg:hidden">
                {
                    hidden ? 
                        <FontAwesomeIcon 
                            icon={faBars}
                            className = "cursor-pointer pt-4 text-purple-500"
                            size="3x"
                            onClick ={(()=>{setHidden(!hidden)})}
                        />
                        :
                        <div className="mt-4 top-0 right-0 absolute bg-white p-8 rounded-b-lg h-screen">
                            <ul className="flex flex-col text-gray-500 cursor-pointer">                            
                                <FontAwesomeIcon
                                    icon={faWindowClose}
                                    className="pt-4 cursor-pointer text-purple-500 text-center"
                                    size='3x'
                                    onClick ={(()=>{setHidden(!hidden)})}
                                /> 
                                {menu.map(item =>(         
                                    <li className="m-4 hover:text-purple-500">{item.title}</li>          
                                ))}
                                <li className="mx-3 px-9 font-bold text-purple-500 border-2 border-purple-500 rounded-3xl p-4 hover:bg-purple-500 hover:text-white">Login</li>
                            </ul>  
                        </div>
                }
            </div>
        </div>

    )
}