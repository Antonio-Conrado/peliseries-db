import useScroll from "../../hooks/useScroll";
import PropTypes from 'prop-types';

const ScrollRight = ({value}) => {
    const { handleScroll } = useScroll();
    return (
        <div className="absolute inset-y-0 right-0 hidden sm:flex  items-center justify-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="rightarrow rightarrowindex arrowbtn bi-chevron-right bg-gray-800 opacity-50 w-10 h-10 rounded-full relative right hover:cursor-pointer "
                viewBox="0 0 16 16"
                stroke="#fff"
                onClick={() => handleScroll(340, value)}
            >
                <path fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </div>
    );
};
ScrollRight.propTypes={
    value : PropTypes.string.isRequired
};
export default ScrollRight;