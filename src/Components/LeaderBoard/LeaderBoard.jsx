import {Button, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useContext} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../index";
import firebase from "firebase";
import {useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";

const LeaderBoard = () => {

    let username = localStorage.getItem('challenge_name')
    let cachedScore = localStorage.getItem('totalScore')

    let result = useSelector(state => state.result)

    const {firestore} = useContext(Context)
    const [users, loading] = useCollectionData(
        firestore.collection('leaderboard').orderBy('totalScore', 'desc')
    )

    const onSubmit = async (value) => {
        if (username) {
            await firestore.collection('leaderboard').doc(username).update({
                name: username,
                totalScore: result.totalScore,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        } else {
            localStorage.setItem('challenge_name', value.name)
            await firestore.collection('leaderboard').doc(value.name).set({
                name: value.name,
                totalScore: +result.totalScore,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

    }

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit
    })

    if (loading) {
        return <Loader/>
    }


    return(
        <div className="leaderboard">
            <div className="leaderboard__header">
                <span className="leaderboard__user-total">{result.totalScore}</span>
                <p className="leaderboard__question">
                    Do you want submit your total score to leaderboard?
                </p>
                <form onSubmit={formik.handleSubmit} className="leaderboard-controls">
                    <TextField
                        onChange={formik.handleChange}
                        inputProps={{
                            readOnly: !!username
                        }}
                        value={username ? username : formik.values.name}
                        name={'name'}
                        type={'name'}
                        variant={'outlined'}
                        label={'Your name'}
                    />
                    <Button disabled={parseFloat(cachedScore) >= result.totalScore} type={'submit'} variant={'contained'}>Submit</Button>
                </form>
            </div>
            <div className="leaderboard__footer">
                <h1 className="leaderboard__title">Leaderboard</h1>
                <div className="leaderboard__table-wrapper">
                    <table className="leaderboard__table">
                        <thead className={'leaderboard__table-head'}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody className={'leaderboard__table-body'}>
                        {users.map((user, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.totalScore}</td>
                                    <td>{new Date(user.createdAt?.seconds*1000).toDateString()}</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="results__controls">
                <Button className={'results__control'} variant={'outlined'} component={Link} to={'/competitive'}>Play
                    again</Button>
                <Button className={'results__control'} variant={'outlined'} component={Link} to={'/learn'}>Learn
                    verbs</Button>
            </div>
        </div>
    )
}


export default LeaderBoard