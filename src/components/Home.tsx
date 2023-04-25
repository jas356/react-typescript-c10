import { useState } from "react"

interface homeProp {
    name: string,
    age: number
}

export default function Home({name, age}: homeProp) {
    const [counter, setCounter]: any = useState("1")

    return(
        <>
        home page {name} {age} {counter}
        </>
    )
}