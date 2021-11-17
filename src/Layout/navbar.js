import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    const [hidden, setHidden] = useState(true)

    return(
        <div className="flex justify-between mx-5 mt-3">
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
                    <li className="m-4 hover:text-purple-500">Accueil</li>
                    <li className="m-4 hover:text-purple-500">Programme</li>
                    <li className="m-4 hover:text-purple-500">Blog</li>
                    <li className="m-4 mx-3 hover:text-purple-500">Contact</li>
                    <li className="mx-3 px-9 text-purple-500 border-2 border-purple-500 rounded-3xl p-4 hover:bg-purple-500 hover:text-white">Login</li>
                </ul>
            </div>
            <div className="block md:block lg:hidden">
                {
                    hidden ? 
                        <FontAwesomeIcon 
                            icon={faBars}
                            className = "cursor-pointer pt-4"
                            size="3x"
                            onClick ={(()=>{setHidden(!hidden)})}
                        />
                        :
                        <FontAwesomeIcon
                            icon={faWindowClose}
                            className="pt-4 cursor-pointer"
                            size='3x'
                            onClick ={(()=>{setHidden(!hidden)})}
                        />   
                }
            </div>
        </div>

    )
}