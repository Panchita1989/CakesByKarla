import '../styles/ChooseYourCake.css'
import data from '../data/cakeData.js'
import CakeCard from '../components/CakeCard'


export default function ChooseYourCake() {
    const cakeElements = data.map(cake => {
        return(
            <CakeCard
                key={cake.id}
                img={cake.img}
                name={cake.name}
                description={cake.description}
                price={cake.price}
            />
        )
    })
    return(
        <main className='px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Choose Your Cake</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cakeElements}
            </div>
        </main>
        
    )
} 
   