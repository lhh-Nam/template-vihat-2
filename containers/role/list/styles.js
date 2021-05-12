import { borderRadiuses, fontFamilys, fontSizes, textColors, colors, boxShadows, baseHeights } from '../../../assets/styles/Theme';

export const styles = theme => ({

    wrapper: {
        width: '80%',
        overflow: 'auto',
        margin: 'auto',
    },

    table: {
        borderCollapse: "collapse",
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
            borderRight: "1px dashed #ddd",
        },

        "& th:hover": {
            background: "#ddd",
        },

        "& tbody tr:hover": {
            background: "#F0F8FD",
            transform: "scale(1,1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: "pointer"
        },


    },
});