

export const Search = () => {
    
    return(
        <>
            <div className="flex justify-around  -space-x-80 mt-5 ">
                <input type="text" placeholder="Search for characters" className="h-11 w-80 rounded-lg drop-shadow-xl border border- border-blue-400 pl-5 focus:border border-border-blue-500"/>
                <button className="bg-blue-500 text-white h-11 px-4 rounded-md drop-shadow-xl mr-10 hover:bg-blue-600">Search</button>
            </div>
        </>
    )
}