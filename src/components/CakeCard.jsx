export default function CakeCard(props) {
    return(
       <>
        <article className= 'cakeCard'>
            <img src={props.img.src} alt={props.img.alt} />
            <div className='cakeInfo'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>         
            <form>
                <label>
                    Quantity
                    <select name="value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                <button type="submit">Add to Cart</button>
            </form>
        </article>
    </>
    )

}