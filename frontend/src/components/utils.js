import { useState } from 'react';

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

export function useVisibleItems(items) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const moveBackward = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    return [
        items[prevIndex],
        items[currentIndex],
        items[nextIndex],
        moveForward,
        moveBackward,
];
}
