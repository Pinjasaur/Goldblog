import { css } from "emotion";

export const navList = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none",
    padding: 0,
});

export const article = css({
    margin: 0,
    padding: 0,
});

export const info = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
});

export const download = css({
    display: "flex",
    alignItems: "center",
});

export const downloadMessage = css({
    fontWeight: 'normal',
    marginRight: "-0.5rem",
    padding: "0 0.5rem",
    transition: '350ms margin',

    '&:focus': {
        marginLeft: '0.5rem',
    },
});
