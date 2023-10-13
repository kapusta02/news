import './TodayNews.css'
export const TodayNews = () => {
    return (
        <>
            <div className="container">
                <div className="today-news-block">
                    <img
                        src="../src/img/TodayNews/main-pic.jpg"
                        alt="main-pic"
                        className='today-news-block-img'
                    />
                    <div>
                        <div className='today-news-block-right'>
                            <img
                                src="../src/img/logo.png"
                                alt="photo"
                                className='header-block-img'
                            />
                            <p className='today-news-block-right-text'>News</p>
                            <p>12 minutes ago</p>
                        </div>
                        <h1 className='today-news-block-header'>Pensaban que una madre de 47 años era la novia de su hijo. Ella revela el secreto de su juventud</h1>
                        <p className='today-news-block-text'>Esta historia increíble se volvió rápidamente muy popular en Internet. Todo comenzó cuando Samuel David, de 22 años, le envió un mensaje a una chica que le gustaba, expresándole su deseo de conocerla. La chica notó que Samuel no estaba sola...</p>
                        <div className='today-news-block-right'>
                            <p className='today-news-block-right-undertext'>Movies</p>
                            <p className='today-news-block-right-undertext-second'>12 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}