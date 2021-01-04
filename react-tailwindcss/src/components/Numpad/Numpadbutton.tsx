import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() =>({
    numberButton :{
        marginBottom: '24px',
        letterSpacing: '0px',
        height: '120px',
        width: '100%',
    },
}))

export interface NumpadbuttonProps {
    num: number
} 
const Numpadbutton = ({num}: NumpadbuttonProps ) => { 


    const classes = useStyles()
    return (
        <button className={classes.numberButton}> {num} </button>
    )
}

export default Numpadbutton