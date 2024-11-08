function Button({ rating, isSelected, onSelect }) {
    return (
        <button
            className={`w-12 h-12 rounded-full font-semibold ${isSelected ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'
                } transition duration-200 ease-in-out`}
            onClick={() => onSelect(rating)}
        >
            {rating}
        </button>
    );
}

export default Button;
