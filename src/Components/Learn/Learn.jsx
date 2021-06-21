import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateVerbs} from "../../redux/challenge-reducer";
import {updateResult} from "../../redux/result-reducer";
import {Redirect} from "react-router-dom";
import LearnHeader from "./LearnHeader/LearnHeader";
import LearnForm from "./LearnForm/LearnForm";
import {Button} from "@material-ui/core";

const Learn = React.memo((props) => {

    let verbsList = useSelector(state => state.challenge.verbs)

    verbsList = verbsList.length === 0 ? JSON.parse(localStorage.getItem('verbs')) : verbsList
    const [isTyping, setIsTyping] = useState(true)
    const [isStop, setIsStop] = useState(false)
    const [mistakesList, setMistakesList] = useState()
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
        } else if (errorsCount === 1) {
            props.setStatus('mistake')
        } else {
            props.setStatus('wrong')
        }
    }

    useEffect(() => {
        generateVerb()
    }, [])

    if (isStop) {
        let data = {
            mistakesList,
            score: 0
        }
        dispatch(updateResult(data))
        return <Redirect to={'/result'} />
    }

    return (
        <section className="challenge">
            <LearnHeader
                setIsTyping={setIsTyping}
                currentVerb={currentVerb}
            />
            <LearnForm
                isTyping={isTyping}
                setStatus={props.setStatus}
                onSubmit={handleSubmit}
                generateVerb={generateVerb}
                errors={errors}
                isSubmit={isSubmit}
                setErrors={setErrors}
                setIsSubmit={setIsSubmit}
            />
            <div className="challenge__controls">
                <Button onClick={() => setIsStop(true)} className="challenge__stop" variant={'outlined'}>Stop</Button>
            </div>
        </section>
    )
})



export default Learn