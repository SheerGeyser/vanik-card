import { Card } from '../../components/card'
import { LilCard } from '../../components/lilCard'
import data from '../../j.json'
import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <h1>{data.site.screen.title}</h1>
                    <h3>{data.site.screen.subtitle}</h3>
                </div>
            </header>

            <div className="section-wrapper">
                <div className="container">
                    <section className='topCard'>
                        <h3>Топ кредитных карт</h3>
                        <h5>с самыми благоприятными условиями</h5>
                        <div className='topCard-wrapper'>
                            {
                                data.site.cards.filter(i => i.top === true).map(i => <Card
                                    title={i.title}
                                    description={i.description}
                                    conditions={i.conditions}
                                    imageUrl={i.imageUrl}
                                    infoLink={i.infoLink}
                                    sort={i.sort}
                                />)
                            }
                        </div>
                    </section>
                </div>
            </div>

            <section className='listCard'>
                <div className="container">
                    <h3>Все карты</h3>
                    <div className='listCard-wrapper grid'>
                        {
                            data.site.cards.filter(i => i.sort === 2).map(i => <LilCard
                                title={i.title}
                                description={i.description}
                                conditions={i.conditions}
                                imageUrl={i.imageUrl}
                                infoLink={i.infoLink}
                                sort={i.sort}
                            />)
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
