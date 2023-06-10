// import { Card } from "antd"
import { FilterField } from "./filterField"
import { FilterName } from "./filterName"
import { PageName } from "./pageName"
import { Search } from "./searchForm"
import Card from "./characterCard"


export const Characters = () => {
    return(
        <>
            <PageName/>
            <Search />
            <FilterName/>
            <FilterField/>
            <Card/>
        </>
    )
}