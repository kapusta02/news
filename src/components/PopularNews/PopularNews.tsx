import './PopularNews.css'
export const PopularNews = () => {
    return (
        <>
            <div className='container'>
                <h2>Latest news</h2>
                <div className='latest-news-block'>
                    <div>
                        <div>
                            <img
                                src="../src/img/LatestNews/animal.jpg"
                                alt="animal"
                                className='latest-news-block-img'
                            />
                            <div className='latest-news-block-info'>
                                <p className='latest-news-block-info-text-small'>Animal</p>
                                <p className='latest-news-block-info-text'>3 hours ago</p>
                            </div>
                            <h3 className='latest-news-block-header'>BONITOS Y MORTALES: Los animales peligrosos más adorables del planeta</h3>
                            <p className='latest-news-block-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam?</p>
                        </div>
                    </div>
                    <div className='latest-news-block'>
                        <div>
                            <img
                                src="../src/img/LatestNews/women.jpg"
                                alt="women"
                                className='latest-news-block-img'
                            />
                            <div className='latest-news-block-info'>
                                <p className='latest-news-block-info-text-small'>People</p>
                                <p className='latest-news-block-info-text'>1 hours ago</p>
                            </div>
                            <h3 className='latest-news-block-header'>Kate Hudson revela una estrategia efectiva para criar a sus hijos</h3>
                            <p className='latest-news-block-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam?</p>
                        </div>
                    </div>
                    <div className='latest-news-block'>
                        <div>
                            <img
                                src="../src/img/LatestNews/animal.jpg"
                                alt="animal"
                                className='latest-news-block-img'
                            />
                            <div className='latest-news-block-info'>
                                <p className='latest-news-block-info-text-small'>Animal</p>
                                <p className='latest-news-block-info-text'>2 hours ago</p>
                            </div>
                            <h3 className='latest-news-block-header'>Hombre sospechoso de doble asesinato detenido en Santiago</h3>
                            <p className='latest-news-block-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}