import './Header.css'
export const Header = () => {
    return (
        <>
            <div className="container">
                <nav className='header-block'>
                    <ul className='header-block-nav'>
                        <li className='header-block-nav-logo'>Buletin</li>
                        <li className='header-block-nav-item'>Stories</li>
                        <li className='header-block-nav-item'>Creator</li>
                        <li className='header-block-nav-item'>Community</li>
                        <li className='header-block-nav-item'>Subscribe</li>
                    </ul>
                    <img
                        src="../src/img/logo.png"
                        alt="photo"
                        className='header-block-img'
                    />
                </nav>
            </div>
        </>
    )
}