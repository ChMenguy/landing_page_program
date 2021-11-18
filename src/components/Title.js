export default function Title({content,icon}){
    return(
        <h1 className=" text-center mx-auto font-extrabold text-4xl lg:text-5xl mb-8">{content}{icon}</h1>
    )
}