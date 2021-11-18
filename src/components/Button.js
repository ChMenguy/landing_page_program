import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

export default function Button({content , justify}){
    return(
        <div className= {`mt-5 ${justify}`} >
            <button className=" bg-primary p-5 text-lg text-secondary font-bold rounded-3xl">
                {content} 
             <FontAwesomeIcon 
                 icon={faArrowCircleRight}
                 className="ml-3 pt-1"
             />
            </button>
        </div>
    )
}