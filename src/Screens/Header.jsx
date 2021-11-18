import ImgHeader from '../assets/images/monteecorde.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'
import Title from '../components/Title'

function Header(){
    return(
        <div id= "home" className="flex mt-6 flex-wrap mr-4 mb-4">
            <div className=" w-full lg:w-1/2 mt-16 pl-16 mb-10 pt-6">
                <Title 
                    content = {`Reste en forme et deviens meilleur chaque jour `}
                    icon = {<FontAwesomeIcon icon={faMedal} className="text-primary"/>}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eveniet dolores saepe nam odit voluptates sint reiciendis blanditiis, quos laboriosam sunt esse perspiciatis deleniti necessitatibus temporibus quisquam cum architecto cumque.</p>
                <Button 
                    content="Nos programmes"
                />
            </div>
            <div className=" w-full lg:w-1/2 mb-5 pt-6 ">
                <div className=" mt-5 bg-primary rounded-full border-10 border-optional1 h-96 w-96 mx-auto">
                    <img src={ImgHeader} alt="corde" width="300px"/>
                </div>
                
            </div>
        </div>
       
    )
}

export default Header