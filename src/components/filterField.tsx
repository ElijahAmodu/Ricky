import arrowUp from "../assets/svg/arrowUp.svg"

export const FilterField = () => {
    
    return(
        <>
            <div className="">
                <div className="">
                    <a><p className="flex justify-center mt-5 underline text-blue-500 mb-2">Clear Filters</p></a>
                </div>
                <div className=" border-2 rounded-md w-10/12 mx-auto">
                    <div className="flex justify-between text-blue-400 bg-blue-100 h-12">
                        <p className="pt-3 pl-5">Status</p>
                        <img src={arrowUp} alt="icon" className="m-3  w-5 h-5 fill-blue-400 " />
                    </div>
                </div>
                <div className="flex justify-around text-blue-400 w-10/12 mx-auto mt-2 mb-4">
                    <button className="border-2 border-blue-400 rounded-md p-2">Alive</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Dead</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Unknown</button>
                </div>

                <div className=" border-2 rounded-md w-10/12 mx-auto">
                    <div className="flex justify-between h-12">
                        <p className="pt-3 pl-5">Species</p>
                        <img src={arrowUp} alt="icon" className="m-3  w-5 h-5 fill-blue-400 " />
                    </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-2 text-blue-400 w-10/12 mx-auto mt-2 mb-4">
                    <button className="border-2 border-blue-400 rounded-md p-1">Human</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Alien</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Humanoid</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Poopybutthole</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Mythological</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Unknown</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Animal</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Disease</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Robot</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Cronenberg</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Planet</button>
                </div>

                <div className=" border-2 rounded-md w-10/12 mx-auto">
                    <div className="flex justify-between h-12">
                        <p className="pt-3 pl-5">Gender</p>
                        <img src={arrowUp} alt="icon" className="m-3  w-5 h-5 fill-blue-400 " />
                    </div>
                </div>
                <div className="flex justify-around text-blue-400 w-10/12 mx-auto mt-2 mb-4">
                    <button className="border-2 border-blue-400 rounded-md p-2">Female</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Male</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">genderless</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Unknown</button>
                </div>
            </div>
        </>
    )
}