import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import ImgAbout1 from '../assets/images/overhead.png'
import ImgAbout2 from '../assets/images/boxjump.png'
import Button from '../components/Button'
import Title from '../components/Title'

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
                        <Title 
                            content = "Qui sommes nous?"
                        /> 
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.</p>
                        <Button 
                            content="Let's go !"
                            justify = "flex justify-end"
                        />
                    </div>                  
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 pt-10 mb-8">
                    <Title 
                        content = "Vos avantages?"
                    />                   
                    {advantage.map(item =>(
                        <div className="flex opacity-30 hover:opacity-100 cursor-pointer mt-5 bg-gradient-to-b from-gray-200 to-white p-2 border-0 rounded-md">
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