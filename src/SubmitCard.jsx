import React from 'react';
import ratingImage from './assets/rating-image.png';

const SubmitCard = ({ rating, onReset }) => {
    return (
        <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-md max-w-sm mx-auto text-center">
            <img src={ratingImage} alt="Rating" className="w-24 h-20 mb-4" /> 
            <h2 className="text-2xl font-bold text-orange-600 mb-4">You selected {rating} out of 5</h2>
            <p className="text-2x1 font-bold text-gray-100 mb-2">Thank you!</p>
            <p className="text-gray-300 mb-6"> We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!</p>
            <button
                className="w-full py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600"
                onClick={onReset}
            >
                Go Back
            </button>
        </div>
    );
};

export default SubmitCard;
