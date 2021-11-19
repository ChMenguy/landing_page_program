
import ImgAbout1 from '../assets/images/overhead.png'
import ImgAbout2 from '../assets/images/boxjump.png'
import Button from '../components/Button'
import Title from '../components/Title'

const advantage = [ {id : 1 , content : 'Vous pouvez programmez votre entrainement sur votre calendrier personnel, définir un rappel afin que vous puissiez planifier au mieux votre activité' },
                    {id : 2 , content : 'Pour chaque exercice, vous aurez une vidéos explicative qui vous présentera l\'objectif et les sensations recherchés par l\'exercice ainsi qu\'une démonstration technique' },
                    {id : 3 , content : 'Vous avez accès à la communauté de Cross-programs vous pourrez poser vos questions à nos coachs mais aussi échanger avec les autres membres de la communauté' }
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
                        <p>Cross-Programs est une plateforme qui propose des programmations pour tous les crossfiteurs qui veulent progresser quelque soit leurs niveaux. Que ce soit l'haltérophilie, la gymnastique ou encore le cardio, nos équipes mettent toutes leurs énergie pour que vous permettre d'atteindre vos objectifs</p>
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