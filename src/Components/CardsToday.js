function CardsToday(props){
    return(
        <div className="cardToday">
            <div className="firstColumn text-x">
                <h4>{props.tipo}</h4>
                <h2 >{props.number}</h2>
            </div>
            <div className="secondColumn">
                <h2>IMG</h2>
                <h4 className="text-xs">{props.percent}</h4>
            </div>
        </div>
    );
}

export default CardsToday;