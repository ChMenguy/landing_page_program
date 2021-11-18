import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight , faTrophy, faHeartbeat , faRunning , faDumbbell, faSkating, faChild, faWalking } from "@fortawesome/free-solid-svg-icons"

const programs = [  {icon : faHeartbeat, title : 'HIIT', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faRunning, title : 'Cardio', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faDumbbell, title : 'Haltérophilie', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faChild, title : 'Gymnastique', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faSkating, title : 'Renforcement', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faWalking, title : 'Mobilité', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                ]


function Programs(){
    return(
        <div id="programs">
            <h1 className=" text-center mx-auto font-extrabold text-4xl lg:text-5xl mb-8">Challenge toi! <FontAwesomeIcon icon = {faTrophy} className="text-primary" /></h1>
            <div className="flex flex-wrap text-center mt-10">
                {programs.map(item=>(
                    <div className="w-1/2 flex-wrap lg:w-1/3 flex mb-14 ">
                        <div className="w-1/4 pt-3 "> 
                            <div className="bg-primary rounded-full w-12 h-12 mx-auto pt-2 text-secondary" >
                                <FontAwesomeIcon icon={item.icon} size="2x" />
                            </div>         
                        </div>
                        <div className="w-3/4">
                            <h2 className="font-bold text-2xl">{item.title}</h2>    
                            <p className="text-left text-gray-500">{item.content}</p>
                        </div>                        
                    </div>
                ))}                   
            </div>
            <div className="flex justify-center mb-10">
                <button className=" flex bg-primary p-5 text-lg text-secondary font-bold rounded-3xl justify-end">
                        Commencez maintenant 
                        <FontAwesomeIcon 
                            icon={faArrowCircleRight}
                            className="ml-3 pt-2 flex justify-end"
                        />
                </button>
            </div>
        </div>
    )
}

export default Programs