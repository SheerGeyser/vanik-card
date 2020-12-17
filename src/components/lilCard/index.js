import './lilCard.scss'

export const LilCard = ({
    title,
    description,
    conditions,
    imageUrl,
    infoLink,
    sort }) => {
    return (
        <div>
            <div className='lil-card-wrapper'>
                <h1>{title}</h1>
                <ul>
                    {conditions.map(i => <li>{i}</li>)}
                </ul>
            </div>
            <button className='lilCard-button'>Подробнее</button>
        </div>
    )
}
