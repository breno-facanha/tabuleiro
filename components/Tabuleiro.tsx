interface propsTabuleiro {
    inverso?: string
}

export default function Tabuleiro(props: propsTabuleiro){
    console.log(props.inverso)
    return (
        <>
        <div>
            <div className={`hidden sm:flex
            flex ${props.inverso} justify-center items-center
            `}>
                <div className="h-20 w-20 bg-white"></div>
                <div className="h-20 w-20 bg-black"></div>
                <div className="h-20 w-20 bg-white"></div>
                <div className="h-20 w-20 bg-black"></div>
                <div className="h-20 w-20 bg-white"></div>
                <div className="h-20 w-20 bg-black"></div>
                <div className="h-20 w-20 bg-white"></div>
                <div className="h-20 w-20 bg-black"></div>
            </div>
        </div>
        <div className="">

        <div className={`sm:hidden
        flex ${props.inverso} justify-center items-center
        `}>
            <div className="h-10 w-10 bg-white"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-white"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-white"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-white"></div>
            <div className="h-10 w-10 bg-black"></div>
        </div>
        </div>
       
        </>
    )
}