import {Button, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import React from "react";
import {Redirect} from "react-router-dom"
import EndPage from "../../EndPage/EndPage";

const LearnFrom = ({onSubmit, setStatus, isSubmit, errors, generateVerb, setErrors, setIsSubmit, isTyping}) => {

    console.log('ChallengeForm render')

    const formik = useFormik({
        initialValues: {
            infinitive: '',
            past: '',
            pastParticiple: ''
        },
        onSubmit
    })

    const handleSwitchStep = () => {
        formik.resetForm()
        setErrors({
            infinitive: '',
            past: '',
            pastParticiple: '',
        })
        setStatus('default')
        setIsSubmit(false)
        generateVerb()
    }

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="challenge__input-group">
                <TextField
                    InputProps={{
                        readOnly: isSubmit,
                    }}
                    className={'challenge__input'}
                    variant={'outlined'}
                    label={'Infinitive'}
                    type="text"
                    name="infinitive"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.infinitive}
                />
                {formik.errors.infinitive && formik.touched.infinitive && formik.errors.infinitive}
                <TextField
                    InputProps={{
                        readOnly: isSubmit,
                    }}
                    error={!!errors.past}
                    className={'challenge__input'}
                    variant={'outlined'}
                    label={'2-nd form'}
                    type="text"
                    name="past"
                    helperText={errors.past}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.past}
                />
                {formik.errors.past && formik.touched.past && formik.errors.past}
                <TextField
                    InputProps={{
                        readOnly: isSubmit,
                    }}
                    error={!!errors.pastParticiple}
                    className={'challenge__input'}
                    variant={'outlined'}
                    label={'3-rd form'}
                    type="text"
                    name="pastParticiple"
                    helperText={errors.pastParticiple}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pastParticiple}
                />
                {formik.errors.pastParticiple && formik.touched.pastParticiple && formik.errors.pastParticiple}
            </div>
            <div className="challenge__button-group">
                <Button disabled={isSubmit || isTyping} fullWidth className={'challenge__button'} variant={'contained'} color={'primary'}
                        type="submit">
                    Submit
                </Button>
                <Button onClick={handleSwitchStep} disabled={!isSubmit} fullWidth className={'challenge__button'} variant={'contained'} color={'secondary'}>
                    Next
                </Button>
            </div>
        </form>
    )
}


export default LearnFrom