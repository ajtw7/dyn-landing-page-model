const HeroSection = () => {

    const navList = ['Home', 'Our Services', 'Subscribe']

    return (
        <div className="hero-section">
            <nav>
                <ul>
                    {navList.map(listItem => {
                        return <li>{listItem}</li>
                    })}
                </ul>
            </nav>
            <h1>We Do Websites Right!</h1>
        </div>
    )
};

export default HeroSection;