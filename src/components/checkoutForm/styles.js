import { makeStyles }  from '@material-ui/core'

export default makeStyles((theme) => ({
    appbar:{
        position:"relative",

    },
    layout: {
        with: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600+ theme.spacing(2) * 2 )]:{
            width:600,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600+ theme.spacing(2) * 2 )]:{
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(6),
        }
    },
    stepper:{
        padding: theme.spacing (3,0,3),

    },
    buttons: {
        disay:"flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    }
}))