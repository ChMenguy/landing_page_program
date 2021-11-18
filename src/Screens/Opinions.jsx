import Title from "../components/Title"

import ImageOpinions from '../assets/images/corde.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGrinHearts} from "@fortawesome/free-solid-svg-icons"

function Opinions(){
    return(
        <div id="opinions" className="mt-9">
            <Title 
                content="Ils nous ont fait confiance"
                icon = {<FontAwesomeIcon icon={faGrinHearts} className=" text-primary"/>}
            />
            <div className = "flex flex-1 flex-wrap-reverse w-4/5 bg-gradient-to-b from-optional1 to-primary mx-auto rounded-2xl">
                <div className="lg:w-1/2 p-5">
                    <h1 className=" text-center text-2xl text-secondary font-bold lg:pt-32 ">John Doe</h1>
                    <p className="italic text-center text-secondary">"Super programmation qui m'a permis d'exploser tous mes records"</p>
                </div>
                <div className="lg:w-1/2">
                    <img src={ImageOpinions} alt='imageopinons' />
                </div>
            </div>
        </div>
    )
}

export default Opinions