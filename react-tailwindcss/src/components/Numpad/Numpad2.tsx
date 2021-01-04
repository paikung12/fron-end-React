import { Grid } from "@material-ui/core"
import NumPadButton from './Numpadbutton'

const NumPadArray: number[] = [
    7, 8, 9, 4, 5, 6, 1, 2, 3,0
]


const NumPad2 = () => {

    return (
        <Grid container>
            {NumPadArray
                .map(num => <Grid md={4} key={num} spacing={2}>
                    <NumPadButton num={num} />
                </Grid>
                )
            }
        </Grid>
    )
}

export default NumPad2