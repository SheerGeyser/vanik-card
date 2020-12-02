import './card.scss'

export const Card = ({ title, description, conditions, imageUrl, infoLink, sort }) => {
    console.log(conditions);
    return (
        <div className='card-wrapper'>
            <h1>{title}</h1>
            <ul>
                {conditions.map(i => <li>{i}</li>)}
            </ul>
            <button>Подробнее</button>
        </div>
    )
}
