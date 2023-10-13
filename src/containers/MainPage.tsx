import { PopularNews } from "../components/PopularNews/PopularNews"
import { TodayNews } from "../components/TodayNews/TodayNews"

export const MainPage = () => {
    return (
        <>
            <TodayNews />
            <PopularNews/>
        </>
    )
}