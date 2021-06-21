import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateVerbs} from "../../redux/challenge-reducer";
import ChallengeHeader from "./ChallengeHeadear/CompetitiveHeader";
import CompetitiveFrom from "./ChallengeForm/CompetitiveFrom";
import {updateResult} from "../../redux/result-reducer";
import {Redirect} from "react-router-dom";

const Competitive = React.memo((props) => {

    let verbsList = useSelector(state => state.challenge.verbs)

    verbsList = verbsList.length === 0 ? JSON.parse(localStorage.getItem('verbs')) : verbsList
    const [mistakesList, setMistakesList] = useState()
    const [life, setLife] = useState([1, 1, 1, 1, 1, 1])
    const [score, setScore] = useState(0)
    const [isTyping, setIsTyping] = useState(true)
    const [currentVerb, setCurrentVerb] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    let [errors, setErrors] = useState({
        infinitive: '',
        past: '',
        pastParticiple: ''
    })

    const dispatch = useDispatch()

    const generateVerb = () => {
        let index = Math.floor(Math.random() * verbsList.length)
        setCurrentVerb(verbsList[index])
        let newVerbsList = [...verbsList]
        newVerbsList.splice(index, 1)
        dispatch(updateVerbs(newVerbsList))
    }

    const handleSubmit = (values) => {
        let errorsCount = 0
        setIsSubmit(true)
        Object.keys(values).map(key => {
            if (currentVerb[key].toLowerCase().trim() !== values[key].toLowerCase().trim()) {
                errorsCount++
                setMistakesList(prev => {
                    return {
                        ...prev,
                        [currentVerb.infinitive]: {
                            infinitive: currentVerb.infinitive,
                            past: currentVerb.past,
                            pastParticiple: currentVerb.pastParticiple,
                            userInfinitive: values.infinitive,
                            userPast: values.past,
                            userPastParticiple: values.pastParticiple,
                        }
                    }
                })
                setErrors(prev => {
                    return {
                        ...prev,
                        [key]: currentVerb[key]
                    }
                })
            }
        })
        if (errorsCount === 0) {
            props.setStatus('success')
            setScore(prev => prev + 1)
        } else if (errorsCount === 1) {
            props.setStatus('mistake')
            setLife(prev => prev.slice(0, prev.length - 1))
            setScore(prev => prev + 0.5)
        } else {
            setLife(prev => prev.slice(0, prev.length - 2))
            props.setStatus('wrong')
        }
    }

    useEffect(() => {
        generateVerb()
    }, [])


    if (life.length === 0) {
        let data = {
            mistakesList,
            score
        }
        dispatch(updateResult(data))
        return <Redirect to={'/result'} />
    }

    return (
        <section className="challenge">
            <ChallengeHeader
                setIsTyping={setIsTyping}
                currentVerb={currentVerb}
                score={score}
                life={life}
                mistakesList={mistakesList}
            />
            <CompetitiveFrom
                isTyping={isTyping}
                setStatus={props.setStatus}
                onSubmit={handleSubmit}
                generateVerb={generateVerb}
                errors={errors}
                isSubmit={isSubmit}
                setErrors={setErrors}
                setIsSubmit={setIsSubmit}
                life={life}
            />
        </section>
    )
})



export default Competitive