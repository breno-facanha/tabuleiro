interface propsTabuleiro {
    inverso?: string
}

export default function Tabuleiro(props: propsTabuleiro){
    console.log(props.inverso)
    return (
        <div className={`
        flex flex-row-${props.inverso} justify-center items-center
        `}>
            <div className="h-24 w-24 bg-white"></div>
            <div className="h-24 w-24 bg-black"></div>
            <div className="h-24 w-24 bg-white"></div>
            <div className="h-24 w-24 bg-black"></div>
            <div className="h-24 w-24 bg-white"></div>
            <div className="h-24 w-24 bg-black"></div>
            <div className="h-24 w-24 bg-white"></div>
            <div className="h-24 w-24 bg-black"></div>
        </div>
    )
}