
export const Episodes = () => {

    const option = [];

    for(let i = 1; i < 52; i++){
        option.push(<option key={i} value={i}>Episode - {i}</option>)
    }
    return(
        <div>
         <div>
            <h2 className="text-center text-4xl font-semibold  text-gray-800 mt-4">Episodes name :<span></span></h2>
            <p className="text-center text-xl font-semibold  text-gray-800 mt-4">Air Date: <span></span></p>
         </div>
         <div>
            <h3 className="text-center text-2xl font-semibold  text-gray-800 mt-4">Pick Episode</h3>
         </div>
         <div>
            <select className=" flex justify-center h-9 w-96 rounded-lg drop-shadow-xl border border- border-blue-400 pl-5 focus:border border-border-blue-500 ml-48"> {option}</select>
         </div>
        </div>
    )
}