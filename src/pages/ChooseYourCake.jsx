import '../styles/ChooseYourCake.css'
import data from '../cakeData.js'
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
        <main className='container'>
            {cakeElements}
        </main>
        
    )
} 
   