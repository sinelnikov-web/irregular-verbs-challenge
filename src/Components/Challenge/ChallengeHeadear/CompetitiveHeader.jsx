import React, {useEffect, useState} from "react";
import heartImage from "../../../assets/images/heart.png"
import EndPage from "../../EndPage/EndPage";


const ChallengeHeader = React.memo(({currentVerb, score, life, setIsTyping}) => {

    const [isUntyped, setIsUntyped] = useState(false)

    const [challenge, setChallenge] = useState('Okay, here we go!!!')
    const [cursor, setCursor] = useState(false)
    const [showCursor, setShowCursor] = useState(false)

    const untype = () => {
        let text = currentVerb.infinitive
        setTimeout(() => {
            text = text.slice(0, challenge.length + 1)
            setChallenge(text.trim())
        }, 100)
    }

    const type = () => {
        let text = challenge
        setTimeout(() => {
            text = text.slice(0, text.length - 1)
            setChallenge(text)
            if (challenge.length === 0) {
                setIsUntyped(true)
                setChallenge(String(' '))
            }
        }, 100)
    }

    useEffect(() => {
        if (!isUntyped && currentVerb.infinitive !== challenge) {
            setIsTyping(true)
            type()
        } else if (isUntyped && currentVerb.infinitive !== challenge) {
            untype()
        } else {
            setIsTyping(false)
            setIsUntyped(false)
        }
        if (!cursor) {
            setCursor(true)
            setInterval(() => {
                setShowCursor(prev => !prev)
            }, 1000)
        }
    }, [currentVerb, challenge])

    return(
        <div className="challenge__block">
            <span className="challenge__lives">{life.map(l => <img className={'challenge__heart'} src={heartImage} alt={life.length}/>)}</span>
            <span className="challenge__score">score: {score}</span>
            <h1 className="challenge__verb">
                {challenge}<span className={'challenge__cursor'}>{showCursor ? "|" : <>&nbsp;</>}</span>
            </h1>
        </div>
    )
})

export default ChallengeHeader