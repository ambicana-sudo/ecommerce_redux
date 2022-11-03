import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return(
        <>
            <section id="error-section">
                <div className="container">
                    <div className="error-content">
                        <h1>404</h1>
                        <h3>Oppsss! page not found</h3>
                        <Link to="/home">back to home page</Link>
                    </div>
                </div>
            </section>
        </>
        
    )
}
export default ErrorPage