import {Pagination} from "@mui/material"
import {FC} from "react"

type PropsType = {
    totalUsers: number
    pageSize: number
    changePage: (n: number,) => void
    currentPage: number
}

export const Paginator: FC<PropsType> = ({pageSize, totalUsers}) => {
    const pagesCount = Math.ceil(totalUsers / pageSize)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return <Pagination count={pagesCount}/>
}

//
// {pages.map(el => <span key={el}
//                        onClick={() => changePage(el)}>{el}</span>).slice(0, 50)}