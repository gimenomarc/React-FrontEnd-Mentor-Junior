function Header () {
    return (
        <div className="header">
            <div className="header__title">
                <h1 className="text-xxl textColor-white">Social Media Dashboard</h1>
                <h3 className="textColor-gray">Total Followers: 23,004</h3>
            </div>
            <div className="header__dark">
                <h3 className="textColor-gray">Dark Mode</h3>
                <h3>CLICK</h3>
            </div>
        </div>
    );
}

export default Header;