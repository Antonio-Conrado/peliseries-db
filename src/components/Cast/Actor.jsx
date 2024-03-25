const Actor = ({ actor }) => {
    const{profile_path, original_name}  = actor;
    return (
        <div className=" flex-shrink-0 rounded-lg w-40">
                <>
                    <div className="relative w-40">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="img actor"
                            className="rounded-lg h-52 relative w-full"
                        />
                        
                    </div>
                    <h3 className="text-center  text-white text-lg py-2 font-bold">{original_name}</h3>
                </>
        </div>
    );
};
export default Actor;