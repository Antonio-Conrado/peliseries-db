import React, { createContext, useRef } from "react";
import PropTypes from 'prop-types';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const containerRefs = {
        topRated: useRef(null),
        popular: useRef(null),
        popularSeries: useRef(null),
        cast: useRef(null),
    };

    const handleScroll = (scrollOffset, value) => {
        console.log(value)
        const containerRef = containerRefs[value].current;
        console.log(value)
        if (containerRef) {
            containerRef.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <ScrollContext.Provider
            value={{
                containerRefs,
                handleScroll
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

ScrollProvider.propTypes = {
    children: PropTypes.element
};

export default ScrollContext;
export { ScrollProvider };
