import { useState } from 'react';
import Button from './Button';
import SubmitCard from './SubmitCard';

function RatingComponent() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRatingSelect = (rating) => {
        setSelectedRating(rating);
    };

    const handleSubmit = () => {
        if (selectedRating) {
            setSubmitted(true);
        }
    };

    const handleReset = () => {
        setSelectedRating(null);
        setSubmitted(false);
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-md max-w-sm mx-auto text-center">
            {!submitted ? (
                <>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 mb-4">
                        <span className="text-xl font-bold text-gray-900">⭐</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">How did we do?</h2>
                    <p className="text-gray-500 mb-6">
                        Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!
                    </p>
                    <div className="flex space-x-2 mb-6">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <Button
                                key={rating}
                                rating={rating}
                                isSelected={selectedRating === rating}
                                onSelect={handleRatingSelect}
                            />
                        ))}
                    </div>
                    <button
                        className={`w-full py-2 rounded-md text-gray-900 font-semibold ${selectedRating ? 'bg-orange-500 hover:bg-white' : 'bg-orange-500 cursor-not-allowed'}`}
                        onClick={handleSubmit}
                        disabled={!selectedRating}
                    >
                        Submit
                    </button>
                </>
            ) : (
                <SubmitCard rating={selectedRating} onReset={handleReset} />
            )}
        </div>
    );
}

export default RatingComponent;