import cancel from "../assets/svg/cancel.svg"
import burger from "../assets/svg/hamburger.svg"
import { useSelector, useDispatch } from "react-redux";
import   {  toggleDivVisibility, reduceNavWidth } from "../redux/features/Slice-implementation/navSlice"
import { RootState } from "../redux/app/store";

export function Navbar() {

    const isDivVisible = useSelector((state: RootState) => state.visibility.isDivVisible);
    const divheight = useSelector((state: RootState) => state.visibility.divHeight)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleDivVisibility());
        dispatch(reduceNavWidth(isDivVisible ? 16 : 52))
    };

    return(
        <>
            <div className={`bg-gray-100 h-${divheight} text-gray-600`}>
                <div className="justify-center ">
                    <div className="flex justify-around">
                        <h2 className="text-xl pr-20 font-semibold text-black mt-6">Ricky & Morty <span className="text-blue-600">WiKi</span></h2>
                        <img src={isDivVisible ? cancel : burger} alt="close-icon" className="h-7 mt-6"  onClick={handleClick}/>
                    </div>
                     {isDivVisible && <div className="pl-20 ml-8 mt-7 text-lg">
                        <a ><h3 className="m-2 ">Characters</h3></a>
                        <a><h3 className="m-2">Episode</h3></a>
                        <a><h3 className="m-2">Location</h3></a>
                    </div>}
                </div>
            </div>
        </>
    );
}