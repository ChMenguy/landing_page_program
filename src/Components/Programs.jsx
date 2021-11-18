import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy, faHeartbeat , faRunning , faDumbbell, faSkating, faChild, faWalking } from "@fortawesome/free-solid-svg-icons"

const programs = [  {icon : faHeartbeat, title : 'HIIT', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faRunning, title : 'Cardio', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faDumbbell, title : 'Haltérophilie', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faChild, title : 'Gymnastique', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faSkating, title : 'Proprioception', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                    {icon : faWalking, title : 'Mobilité', content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                ]




function Programs(){
    return(
        <div id="programs">
            <h1 className=" text-center mx-auto font-extrabold text-4xl lg:text-5xl mb-8">Nos Programmes <FontAwesomeIcon icon = {faTrophy} className="text-purple-500" /></h1>
            <div className="flex flex-wrap text-center">
                {programs.map(item=>(
                    <div className="w-1/3 flex">
                        <div className="w-1/4"> 
                            <FontAwesomeIcon icon={item.icon} />       
                        </div>
                        <div className="w-3/4">
                            <h2>{item.title}</h2>    
                            <p>{item.content}</p>
                        </div>                        
                    </div>
                ))}                
            </div>

        </div>
    )
}

export default Programs