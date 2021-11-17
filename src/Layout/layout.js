import NavBar from "./navbar"

export default function Layout ({children}) {
    return(
        <div className="flex-1 mt-10 mb-9 px-10"> 
            <NavBar />
            {children}
        </div>
       
    )
    
}