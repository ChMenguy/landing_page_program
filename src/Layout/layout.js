import NavBar from "./navbar"

export default function Layout ({children}) {
    return(
        <div className="mt-3 container mx-auto"> 
            <NavBar />
            {children}
        </div>
       
    )
    
}