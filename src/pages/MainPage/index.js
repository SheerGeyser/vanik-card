import data from '../../j.json'
import './MainPage.scss'

export const MainPage = () => {
    return (
        <header>
            <h1>{data.site.screen.title}</h1>
            <h3>{data.site.screen.subtitle}</h3>
        </header>
    )
}
