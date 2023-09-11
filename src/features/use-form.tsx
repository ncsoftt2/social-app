import {useState} from "react";

export const UseForm = (initialValue:string) => {
    const [value,setValue] = useState(initialValue)

}


// const OwnHooksFunction = (params:string,maxLength: number,textError:string) => {
//     const [value,setValue] = useState(params)
//     const [error,setError] = useState<string | null>(null)
//     const onChange = (e:ChangeEvent<HTMLInputElement>) => {
//         const target = e.currentTarget.value
//         setValue(target)
//         if(target.length >= maxLength) {
//             setError(textError)
//         } else {
//             setError(null)
//         }
//     }
//     return {value,onChange,error}
// }
//
// export const App = () => {
//     const inputName = OwnHooksFunction('',10,'Максимальное количество символов в вашем имени 10 символов ')
//     const inputLocation = OwnHooksFunction('',15,'Максимальное количество символов в локации')
//     const inputLast = OwnHooksFunction('',5,'Просто ничего не придумал')
//     return (
//         <div>
//             <div>
//                 <input value={inputName.value} onChange={inputName.onChange}/>
//                 <div>{inputName.error}</div>
//             </div>
//             <div>
//                 <input value={inputLocation.value} onChange={inputLocation.onChange}/>
//                 <div>{inputLocation.error}</div>
//             </div>
//             <div>
//                 <input value={inputLast.value} onChange={inputLast.onChange}/>
//                 <div>{inputLast.error}</div>
//             </div>
//             <div>
//                 <textarea/>
//             </div>
//         </div>
//     )
// }
