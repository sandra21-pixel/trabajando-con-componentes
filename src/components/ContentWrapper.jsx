import React from 'react';
import TopBar from './TopBar.jsx';
import ContentRowTop from './ContentRowTop.jsx';
import Footer from './Footer.jsx';
import Tabla from './Tabla.jsx';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Tabla/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;