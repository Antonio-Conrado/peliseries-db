import { createContext, useRef } from "react";
import PropTypes from 'prop-types';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const containerRefTopRated = useRef(null)
    const containerRefPopular = useRef(null)
    const containerRefPopularSeries = useRef(null)
    const containerRefCast= useRef(null)
    
    const handleScroll = (scrollOffset, value) => {
        if(value === 'topRated'){
            const container = containerRefTopRated.current;
            if (container) {
                container.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }else if(value ==='popular'){
            const container = containerRefPopular.current;
            if (container) {
                container.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }else if(value ==='cast'){
            const container = containerRefCast.current;
            if (container) {
                container.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }
        else{
            const container = containerRefPopularSeries.current;
            if (container) {
                container.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }
        
    };

    return (
        <ScrollContext.Provider
            value={{
                containerRefTopRated,
                containerRefPopular,
                containerRefPopularSeries,
                containerRefCast,
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