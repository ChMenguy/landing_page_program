import ImgHeader from '../assets/images/monteecorde.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div id= "home" className="flex mt-6 flex-wrap mr-4 mb-4">
            <div className=" w-full lg:w-1/2 mt-16 pl-16 mb-10">
               <h1 className="font-bold text-5xl ">Reste en forme et </h1> 
               <h1 className="font-bold text-5xl mt-4">deviens meilleur</h1>
               <h1 className="font-bold text-5xl mt-4 mb-10">
                    chaque jour 
                    <FontAwesomeIcon 
                        icon={faMedal} 
                        className="text-primary"
                    />
                </h1>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eveniet dolores saepe nam odit voluptates sint reiciendis blanditiis, quos laboriosam sunt esse perspiciatis deleniti necessitatibus temporibus quisquam cum architecto cumque.</p>
               <div className="mt-5">
                   <button className=" bg-primary p-5 text-lg text-secondary font-bold rounded-3xl">
                        Nos Programmes 
                        <FontAwesomeIcon 
                            icon={faArrowCircleRight}
                            className="ml-3 pt-1"
                        />
                   </button>
               </div>
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