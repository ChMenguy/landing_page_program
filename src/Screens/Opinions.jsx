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
                <div className="lg:w-1/2">
                    <h1>Test</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellat. Id sed alias quia, tempora laboriosam earum similique voluptate quas nihil eos perferendis culpa temporibus voluptas necessitatibus ratione eius eum!</p>
                </div>
                <div className="lg:w-1/2">
                    <img src={ImageOpinions} alt='imageopinons' />
                </div>
            </div>
        </div>
    )
}

export default Opinions