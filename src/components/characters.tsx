import { FilterField } from "./filterField"
import { FilterName } from "./filterName"
import { PageName } from "./pageName"
import { Search } from "./searchForm"

export const Characters = () => {
    return(
        <>
            <PageName/>
            <Search />
            <FilterName/>
            <FilterField/>
        </>
    )
}