import { Link } from "react-router-dom";

//components
import ScrollLeft from "./ScrollNavigation/ScrollLeft";
import ScrollRight from "./ScrollNavigation/ScrollRight";
import Billboard from "./Billboard";
import useScroll from "../hooks/useScroll";

const Carousel = ({name, title, data, link}) => {
    const {containerRefs } = useScroll();

    return (
        
        <section className="container mx-auto mt-2 relative">
            <ScrollRight
                value={name}
            />
            <ScrollLeft
                value={name}
            />
            <div className="flex justify-center mb-2 ">
                <div className="bg-green-400  w-1 mr-2"></div>
                <Link
                    className="text-white block text-center font-bold text-2xl  hover:cursor-pointer"
                    to={'/peliculas-populares'}
                >{title}</Link>
            </div>

            <div
                ref={containerRefs[name]}
                className="my-2 mx-9 p-2 h-auto section flex flex-row gap-3"
            >

                {data.map(info => (
                    <Billboard
                        key={info.id}
                        dataBillboard={info}
                        link = {link}
                    />
                ))}
            </div>
        </section>
    );
};
export default Carousel;