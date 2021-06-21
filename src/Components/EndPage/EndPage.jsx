import {
    Box, Button,
    Collapse,
    IconButton, Paper,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const EndPage = ({setStatus}) => {

    useEffect(() => {
        setStatus('default')
    }, [])

    let result = useSelector(state => state.result)
    console.log(result.mistakesList)
    return(
        <div className={'results'}>
            <h1 className="results__title">Congratulations! You complete challenge!</h1>
            <span className="results__score">Your score: {result.score}</span>
            <span className="results__score">Your total score: {result.totalScore}</span>
            <div className="results__mistakes">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={'center'} colSpan={2}>Your mistakes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(result.mistakesList).map((key, index) => <Row key={index} verb={key} mistake={result.mistakesList[key]}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="results__controls">
                <Button className={'results__control'} variant={'outlined'} component={Link} to={'/competitive'}>Play again</Button>
                <Button className={'results__control'} variant={'outlined'} component={Link} to={'/learn'}>Learn verbs</Button>
            </div>
        </div>
    )
}

function Row({verb, mistake}) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell onClick={() => setOpen(!open)} component="th" scope="row" align={'center'}>
                    <IconButton aria-label="expand row" size="small">
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {verb}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                {verb}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Your answer</TableCell>
                                        <TableCell>Right answer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            {mistake.userInfinitive}
                                        </TableCell>
                                        <TableCell>
                                            {mistake.infinitive}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {mistake.userPast}
                                        </TableCell>
                                        <TableCell>
                                            {mistake.past}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {mistake.userPastParticiple}
                                        </TableCell>
                                        <TableCell>
                                            {mistake.pastParticiple}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default EndPage