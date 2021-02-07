import React from 'react'


const Spinner: React.FC = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="spinner-border d-flex justify-content-center m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;