import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"

export default function Logo(){
    return(
        <div className="flex">
            <FontAwesomeIcon 
                icon={faDumbbell} 
                size= "4x"
                className="bg-primary p-3 rounded-lg text-secondary"
                transform ={{ rotate: 45 }}
            /> 
            <h1 className="font-bold text-3xl pl-3 lg:pt-4">Cross-Programs</h1>  
        </div>        
    )

}