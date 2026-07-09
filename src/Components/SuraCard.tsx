
function SuraCard({ name, number, onClick, isActive }: { name: string; number: number; onClick: () => void; isActive: boolean }) {
    return (
        <div className={`bg-gray-700
             hover:bg-gray-900
              transition
               duration-300 
               text-white
                p-4 m-2 
                rounded-lg
                 shadow-md
                  hover:shadow-lg  
                   duration-300 
                   cursor-pointer
            ${isActive ? "bg-gray-900 border-4 border-green-500 shadow-lg shadow-green-500/40" : "bg-gray-700 hover:bg-gray-900"}  `}
            onClick={onClick}>
            <h2>{number}. 📖 {name}</h2>
        </div>
    )
}

export default SuraCard