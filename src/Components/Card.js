
function Card(props) {
    return (
        <div className="card">

            <div className="card__socialName">
                <p>IMG</p>
                <p className="textColor-gray text-xs">{props.name}</p>
            </div>
            <div>
                <h1 className="text-xxl textColor-white">{props.numberFollowers}</h1>
                <h3 className="followers text-xl textColor-gray">FOLLOWERS</h3>
            </div>
            <div>
                <h3 className="textColor-green">{props.numberToday} Today</h3>
            </div>
            
        </div>
    );
}

export default Card;