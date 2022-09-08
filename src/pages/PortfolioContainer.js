import React, {useState} from 'react';
import NavTabs from './pages/NavTabs';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

export default function PortfolioCotainer(){
    const [currentPage, setCurrentPage] = useState("Home");

    const renderpage = () => {
        if(currentPage === "Home"){
            return <Home/>;
        }
        
        if(currentPage === "Experience"){
            return <Experience/>;
        }
         
        if(currentPage === "Contact"){
            return <Contact/>;
        }
         
        if(currentPage === "Resume"){
            return <Resume/>;
        }
        if(currentPage === "AboutMe"){
            return <AboutMe/>;
        }
    }



const handlePageChange = (page) => setCurrentPage(page);


return(
     <div>
      
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderpage()}
    </div>
);
}