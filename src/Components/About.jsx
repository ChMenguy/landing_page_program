import ImgAbout from '../assets/images/overhead.png'

function About(){
    return(
        <div className="flex" id="about">
            <div className="w-full lg:w-1/2">
                <img src={ImgAbout} alt="about" srcset="" />
            </div>
            <div className="w-full lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel omnis consectetur ipsum inventore facilis, possimus magnam nesciunt, illo exercitationem ea neque quos accusamus sint hic voluptatum! Explicabo, quis molestias.
            </div>         
        </div>
    )
}

export default About