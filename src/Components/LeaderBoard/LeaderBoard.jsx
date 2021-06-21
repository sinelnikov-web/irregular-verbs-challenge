

const LeaderBoard = () => {
    return(
        <div className="leaderboard">
            <h1 className="leaderboard__title">Leaderboard</h1>
            <div className="leaderboard__list">
                <div className="leaderboard__item">
                    <img src="http://placehold.it/150x150" alt="" className="leaderboard__photo"/>
                    <div className="leaderboard__score-block">
                        <span className="leaderboard__score">
                            Total score: 10
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LeaderBoard