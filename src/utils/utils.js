

export const typing = (verb, challenge, setChallenge) => {
    const typeSpeed = 150
    const untypeSpeed = 100
    let untypeFinish = false
    const type = () => {
        let index = 0
        let timerID = setInterval(() => {
            if (verb.length === challenge.length) {
                clearInterval(timerID);
                console.log("finish type")
            }
            setChallenge(verb.slice(0, index++))
        }, typeSpeed);
    }
    const untype = () => {
        return new Promise((resolve, reject) => {
            let text = challenge
            let timerID = setInterval(() => {
                if (text.length === 0) {
                    clearInterval(timerID);
                    untypeFinish = true
                    resolve()
                }
                text = text.slice(0, text.length - 1)
                setChallenge(prev => text)
            }, untypeSpeed)
        })
    }
    untype().then(() => {
        type()
    })
}

