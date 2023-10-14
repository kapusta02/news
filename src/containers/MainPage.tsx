import { MoreInfo } from "../components/MoreInfo/MoreInfo"
import { LatestNews } from "../components/LatestNews/LatestNews"
import { TodayNews } from "../components/TodayNews/TodayNews"

export const MainPage = () => {
    return (
        <>
            <TodayNews />
            <LatestNews />
            <MoreInfo />
        </>
    )
}