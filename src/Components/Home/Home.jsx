import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getVerbs} from "../../redux/challenge-reducer";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVerbs())
    }, [])

    return(
        <section className="homepage">
            <span className="homepage__welcome">Welcome to</span>
            <h1 className="homepage__title">Irregular Verbs Challenge</h1>
            <p className="homepage__subtitle">
                Try yourself in this challenge for check your knowledge about irregular verbs
            </p>
            <hr/>
            <p className="homepage__faq">
                What to do? → enter three forms of verbs as many times in a row as you can.
            </p>
            <div className="homepage__controls">
                <Button variant="outlined" className="homepage__button" component={Link} to={'/competitive'}>Competitive mode</Button>
                <span className="homepage__buttons-divider">or</span>
                <Button variant="outlined" className="homepage__button" component={Link} to={'/learn'}>Learning mode</Button>
            </div>
        </section>
    )
}


export default Home