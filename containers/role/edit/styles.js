export const styles = theme => ({
    roleEdit: {
        overflowX: 'auto',
    },

    heading: {
        display: 'block',
        width: '100%',
        height: 200,
        //backgroundColor: 'rgb(87, 191, 219)',
    },

    // fixed: {
    //     'position': 'fixed',
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: 'rgb(87, 191, 219)',
    //     zIndex: 10,
    // },

    main: {
        position: 'relative',
        top: '-50px',
        width: '80%',
        margin: 'auto',
    },

    inputColor: {
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 10,
        boxShadow: '0px 4px 16px 0px rgb(125 125 125 / 8%)',
    },

    container: {
        display: 'flex',
        padding: 20,
    },

    inputArea: {
        flexBasis: '50%',
    },

    inputItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        paddingBottom: 30,

        '& label': {
            paddingBottom: 8,
        },

        '& input, & textarea': {
            border: 'none',
            borderRadius: 10,
            padding: "10px 20px",
            resize: 'none',

            boxShadow: '0px 4px 16px 0px rgb(125 125 125 / 8%)',
            '&:focus, &:hover': {
                outline: "none",
                boxShadow: '0px 4px 16px 0px rgb(125 125 125 / 20%)',
            }
        }
    },

    colorArea: {
        flexBasis: '50%',
    },

    group: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 10,
    },

    color: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'blue',
        marginRight: 10,
        marginBottom: 10,
    }


})