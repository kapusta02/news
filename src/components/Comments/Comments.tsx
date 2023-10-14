import './Comments.css'
export const Comments = () => {
    return (
        <>
            <div className='container'>
                <h2>Comments</h2>
                <div className='comments-block'>
                    <div className='comments-block-item'>
                        <img
                            src="../src/img/Comments/comments-person-1.png"
                            alt="person"
                            className='comments-block-item-img'
                        />
                        <h3>Claudia Espinosa</h3>
                        <p>Quizás la gente no pensaría que es la novia de su hijo si no posara en la foto como si lo fuera.</p>
                        <p className='comments-block-item-date'>10.10.2023</p>
                    </div>
                    <div className='comments-block-item'>
                        <img
                            src="../src/img/Comments/comments-person-2.jpeg"
                            alt="person"
                            className='comments-block-item-img'
                        />
                        <h3>Claudia Espinosa</h3>
                        <p>Quizás la gente no pensaría que es la novia de su hijo si no posara en la foto como si lo fuera.</p>
                        <p className='comments-block-item-date'>10.10.2023</p>
                    </div>
                    <div className='comments-block-item'>
                        <img
                            src="../src/img/Comments/comments-person-3.jpeg"
                            alt="person"
                            className='comments-block-item-img'
                        />
                        <h3>Claudia Espinosa</h3>
                        <p>Quizás la gente no pensaría que es la novia de su hijo si no posara en la foto como si lo fuera.</p>
                        <p className='comments-block-item-date'>10.10.2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}