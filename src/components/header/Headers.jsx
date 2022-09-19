import React from 'react'
// import '.../styles.css'
// import styles from './Header.module.css'
class Headers extends React.Component {

    render(){
        return (
            <><header>
                <nav className="nav">
                    <div className="left">
                        <div className="logo_logo logo_light">EDYODA</div><br /><span className="header-italics">Stories</span>

                        <div className="header-dark">Explore Categories <i class="fa-solid fa-circle-chevron-down"></i></div>
                    </div>
                    <div className="right">
                        <div className="header-gray">
                            <p>EdYoda is free learning and knowledge<br />
                                sharing platform for techies</p>
                        </div>

                        <button className="header-btn">Go to main website</button>
                    </div>
                </nav>
                </header>
            </>
        );
    }
}
export default Headers;