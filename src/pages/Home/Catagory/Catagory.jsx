import React from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const {id} = useParams()
    return (
        <div>
            <p>This is Category {id}</p>
        </div>
    );
};

export default Catagory;