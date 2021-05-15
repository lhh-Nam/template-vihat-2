import { red } from '@material-ui/core/colors';
import { borderRadiuses, fontFamilys, fontSizes, textColors, colors, boxShadows, baseHeights } from '../../../assets/styles/Theme';

export const styles = theme => ({

    wrapper: {
        width: '80%',
        overflow: 'auto',
        margin: 'auto',
    },

    table: {
        borderCollapse: "collapse",
        borderSpacing: 0,
        width: "100%",
        marginTop: 10,


        "& td": {
            //border: "1px solid #ddd",
            padding: "15px 8px"
        },

        // "& tr:nth-child(even)": {
        //     backgroundColor: "#f2f2f2"
        // },

        "& th": {
            padding: "12px 8px",
            textAlign: "left",
            //backgroundColor: "#6c7ae0",
            //color: "white"
            borderRight: "1px dashed gray",

            "& div": {
                width: "auto",
                height: "auto",
                minHeight: "20px",
                minWidth: "20px"
            }
        },



        "& th:hover": {
            background: "#ddd",
        },

        "& tbody tr:hover": {

        },
    },

    resize: {
        resize: 'horizontal',
        width: '100%',
        overflow: 'auto',
        height: '100%',
        display: "block"
    },

    /////////////////////////////////////////

    tablee: {
        padding: 10,
    },

    heading: {
        display: 'flex',
        paddingLeft: '80px',


    },

    headingItem: {
        width: 100,
        flex: '1 0 auto',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingLeft: 8,
        //flexBasis: '20%',
        //borderRight: "1px dashed gray",

        '&:hover p': {
            background: '#e3e3e3',
        },

        '& p': {
            borderRight: '1px dashed #ddd'
        }
    },

    bodyRow: {
        display: 'flex',
        marginBottom: 10,

        '&:hover': {
            background: "#F0F8FD",
            transform: "scale(1,1)",
            borderRadius: '0 10px 10px 0',
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",

            '& $visible, $test': {
                visibility: 'visible'
            }
        }

    },

    test: {
        top: "50%",
        left: "50%",
        margin: "0",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        visibility: 'hidden',
    },

    rowColor: {
        flexBasis: 80,
        position: 'relative',
    },

    rowInfo: {
        display: 'flex',
        flex: 1,
    },

    infoItem: {
        width: 100,
        flex: '1 0 auto',
        paddingLeft: 8,

        '& p': {
            width: '100%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        }
    },

    visible: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        visibility: 'hidden',

        '& p': {
            color: '#267aff',
        },

        '& img': {
            width: 20,
            height: 20,
            paddingLeft: 10,
        }
    }
});



