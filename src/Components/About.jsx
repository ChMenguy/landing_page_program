import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import ImgAbout from '../assets/images/overhead.png'

function About(){
    return(
        <div className="flex m-10 pt-10" id="about">
            <div className="flex  flex-wrap-reverse">
                <div className="w-full lg:w-1/2">
                    <img src={ImgAbout} alt="about" width="350px" className="mx-auto bg-purple-300 rounded-full border-2 border-purple-700"/>
                </div>
                <div className="w-full lg:w-1/2 pt-10 mb-8">
                    <h1 className="text-center mx-auto font-extrabold text-5xl mb-8">Qui sommes nous?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.</p>
                    <div className="mt-5">
                   <button className=" bg-purple-500 p-5 text-lg text-white font-bold rounded-3xl">
                        Let's go 
                        <FontAwesomeIcon 
                            icon={faArrowCircleRight}
                            className="ml-3 pt-1 flex justify-end"
                        />
                   </button>
               </div>
                </div>                  
            </div>
       
        </div>
    )
}

export default About