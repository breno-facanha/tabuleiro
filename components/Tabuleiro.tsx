interface propsTabuleiro {
    inverso: string
}

export default function Tabuleiro(props: propsTabuleiro){
    return (
        <div className={`
        flex flex-${props.inverso} justify-center items-center
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