import { useEffect, useState } from 'react';
import './card.scss'

export const Card = ({ title, description, conditions, imageUrl, infoLink, sort }) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }
    }, [])

    return (
        <>
            {
                width > 768
                    ? (<div className='card-wrapper' style={{ background: `#fff url('${imageUrl}')  center left no-repeat` }}>
                        <h1>{title}</h1>
                        <ul>
                            {conditions.map(i => <li>{i}</li>)}
                        </ul>
                        <button>Подробнее</button>
                    </div>)
                    : (<div className='card-wrapper' style={{ background: `#fff` }}>
                        <h1>{title}</h1>
                        <ul>
                            {conditions.map(i => <li>{i}</li>)}
                        </ul>
                        <button>Подробнее</button>
                    </div>)
            }
        </>
    )
}
