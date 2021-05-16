export const styles = theme => ({
    MuiFormControlLabelRoot: {
        display: 'none !important',
    },
    roleItem: {
        height: 50,
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 30,
        boxShadow: '0px 4px 16px 0px rgb(125 125 125 / 8%)',

        '&:hover': {
            boxShadow: '0px 4px 16px 0px rgb(125 125 125 / 30%)',
        },

        '& img': {
            width: 15,
            height: 15,
        },
    },

    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 20px',
    },

    name: {
        flexBasis: '20%',
    },

    downUpBtn: {
        flexBasis: '75%',

        '& $nam': {
            transform: 'rotate(180deg)'
        }
    },

    toggleBtn: {
        flexBasis: '10%',
        display: 'flex',
        justifyContent: 'flex-end',

        '& input': {
            position: 'relative',
            appearance: 'none',
            outline: 'none',
            width: '50px',
            height: '30px',
            backgroundColor: '#fff',
            border: '1px solid #D9DADC',
            borderRadius: '50px',
            boxShadow: 'inset -20px 0 0 0 #ffffff',
            transitionDuration: '200ms'
        },

        '& input:after': {
            content: '""',
            position: 'absolute',
            top: '1px',
            left: '1px',
            width: '26px',
            height: '26px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            boxShadow: '2px 4px 6px rgba(0,0,0,0.2)'
        },
        '& input:checked': {
            boxShadow: 'inset 20px 0 0 0 #86c0ff',
            borderColor: '#007aff',


        },
        '& input:checked:after': {
            left: '20px',
            boxShadow: '-2px 4px 3px rgba(0,0,0,0.05)',
            backgroundColor: '#007aff'
        }
    },
    container: {
        display: "flex"
    },
    paper: {
        margin: theme.spacing(1)
    },
    displayNone: {
        display: 'none',
    }

    // list: {
    //     maxHeight: '0',
    //     transition: 'max-height 0.15s ease-out',
    //     overflow: 'hidden',
    //     background: '#d5d5d5'
    // }
})