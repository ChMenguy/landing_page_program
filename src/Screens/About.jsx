import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import ImgAbout1 from '../assets/images/overhead.png'
import ImgAbout2 from '../assets/images/boxjump.png'

const advantage = [ {id : 1 , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.' },
                    {id : 2 , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.' },
                    {id : 3 , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.' }
                ]

function About(){
    return(
        <div>
            <div className="flex m-10 pt-20" id="about">
                <div className="flex  flex-wrap-reverse">
                    <div className="w-full lg:w-1/2">
                        <img src={ImgAbout1} alt="about" width="350px" className="mx-auto bg-optional1 rounded-full "/>
                    </div>
                    <div className="w-full lg:w-1/2 pt-10 mb-8">
                        <h1 className="text-center mx-auto font-extrabold text-4xl lg:text-5xl mb-8">Qui sommes nous?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.</p>
                        <div className="flex mt-5 justify-end">
                            <button className=" flex bg-primary p-5 text-lg text-secondary font-bold rounded-3xl justify-end">
                                Let's go 
                                <FontAwesomeIcon 
                                    icon={faArrowCircleRight}
                                    className="ml-3 pt-2 flex justify-end"
                                />
                            </button>
                        </div>
                    </div>                  
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 pt-10 mb-8">
                    <h1 className="text-center mx-auto font-extrabold text-4xl lg:text-5xl mb-8">Beaucoup d'avantages <br/>rien que pour vous</h1>
                    
                        {advantage.map(item =>(
                        <div className="flex opacity-30 hover:opacity-100 cursor-pointer mt-5 bg-gradient-to-b from-gray-200 to-secondary p-2 border-0 rounded-md">
                            <div className="w-2/12">
                                <div className=" bg-primary pt-1 rounded-full text-center text-secondary font-bold text-xl h-10 w-10 mx-auto">
                                    {item.id}
                                </div>                            
                            </div>
                            <div className="w-10/12">
                                {item.content}
                            </div>                     
                        </div>                           
                        ))}


                </div>                
                <div className="w-full lg:w-1/2">
                    <img src={ImgAbout2} alt="about" width="450px" className="lg:pt-28 mx-auto"/>
                </div>
            </div>
        </div>
    )
}

export default About