import arrowUp from "../assets/svg/arrowUp.svg"
import arrowDown from "../assets/svg/arrowDown.svg"
import { useSelector, useDispatch } from "react-redux";
import   {  toggleDivVisibility, reduceNavWidth } from "../redux/features/Slice-implementation/statusSlice"
import   {  speciesVisibility, speciesNavWidth } from "../redux/features/Slice-implementation/speciesSlice"
import   {  genderVisibility, genderNavWidth } from "../redux/features/Slice-implementation/genderSlice"
import { RootState } from "../redux/app/store";

export const FilterField = () => {

    const statusVisible = useSelector((state: RootState) => state.statusFilter.isDivVisible);
    const statusheight = useSelector((state: RootState) => state.statusFilter.divHeight);

    const speciesVisible = useSelector((state: RootState) => state.speciesFilter.isDivVisible);
    const speciesheight = useSelector((state: RootState) => state.speciesFilter.divHeight);

    const genderVisible = useSelector((state: RootState) => state.genderFilter.isDivVisible);
    const genderheight = useSelector((state: RootState) => state.genderFilter.divHeight);

    const dispatch = useDispatch();

    const statusHandleClick = () => {
        dispatch(toggleDivVisibility());
        dispatch(reduceNavWidth(statusVisible ? 2 : 5))
    };

    const speciesHandleClick = () => {
        dispatch(speciesVisibility());
        dispatch(speciesNavWidth(speciesVisible ? 2 : 5))
    };

    const genderHandleClick = () => {
        dispatch(genderVisibility());
        dispatch(genderNavWidth(genderVisible ? 2 : 5))
    };
    
    return(
        <>
            <div className="">
                <div className="">
                    <a><p className="flex justify-center mt-5 underline text-blue-500 mb-2">Clear Filters</p></a>
                </div>
                <div className=" border-2 rounded-md w-10/12 mx-auto">
                    <div className="flex justify-between text-blue-400 bg-blue-100 h-12 hover: cursor-pointer" onClick={statusHandleClick}>
                        <p className="pt-3 pl-5">Status</p>
                        <img src={statusVisible ? arrowUp  : arrowDown} alt="icon" className={`m-3  w-5 h-${statusheight} fill-blue-400`} />
                    </div>
                </div>
                {statusVisible && <div className="flex justify-around text-blue-400 w-10/12 mx-auto mt-2 mb-4">
                    <button className="border-2 border-blue-400 rounded-md p-2">Alive</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Dead</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Unknown</button>
                </div>}

                <div className=" border-2 rounded-md w-10/12 mx-auto" onClick={speciesHandleClick}>
                    <div className="flex justify-between h-12 hover: cursor-pointer">
                        <p className="pt-3 pl-5">Species</p>
                        <img src={speciesVisible ? arrowUp  : arrowDown} alt="icon" className={`m-3  w-5 h-${speciesheight} fill-blue-400`}  />
                    </div>
                </div>
                {speciesVisible && <div className="grid grid-rows-3 grid-flow-col gap-2 text-blue-400 w-10/12 mx-auto mt-2 mb-4">
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
                </div>}

                <div className=" border-2 rounded-md w-10/12 mx-auto" onClick={genderHandleClick}>
                    <div className="flex justify-between h-12 hover: cursor-pointer">
                        <p className="pt-3 pl-5">Gender</p>
                        <img src={genderVisible ? arrowUp  : arrowDown} alt="icon" className= {`m-3  w-5 h-${genderheight} fill-blue-400`}  />
                    </div>
                </div>
                {genderVisible && <div className="flex justify-around text-blue-400 w-10/12 mx-auto mt-2 mb-4">
                    <button className="border-2 border-blue-400 rounded-md p-2">Female</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Male</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">genderless</button>
                    <button className="border-2 border-blue-400 rounded-md p-2">Unknown</button>
                </div>}
            </div>
        </>
    )
}