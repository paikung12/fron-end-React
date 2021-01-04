import { Card, createStyles, makeStyles } from "@material-ui/core"
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: 60,
      textAlign: 'center'
    },
    passwordText: {
        fontSize: '24px',
    }
  }),
);

const ShowPassword = () => {
    const classes  = useStyles()
    return (
        <Card className={classes.root}>
            <p className={classes.passwordText}>*****</p> 
        </Card>
    )
}


export default ShowPassword