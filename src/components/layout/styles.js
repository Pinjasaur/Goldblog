import { css } from "emotion";

import {
    lightGreen,
    lightBlue,
    latoRegular,
    openSansRegular,
    phoneMediumMin,
    phoneMediumMax,
} from "../../styleConstants";

export const layout = css({
    fontFamily: openSansRegular,
    margin: "auto",
    maxWidth: "calc(630px + 1rem)",
    padding: "0 1rem",
});

export const header = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1.5rem",
});

export const heading = css({
    background: `linear-gradient(to right, ${lightGreen} 0%, ${lightBlue} 100%)`,
    fontFamily: latoRegular,
    padding: "0.5rem",

    [phoneMediumMin]: {
        marginRight: "2rem",
    },
});

export const headingLink = css({
    color: "black",
    textDecoration: "none",
});

export const main = css({
    borderTop: "1px solid #ccc",
    flexGrow: 1,
    fontSize: "1.05rem",
    letterSpacing: "-0.01rem",
    lineHeight: "1.75rem",
    marginTop: "3rem",

    [phoneMediumMax]: {
        paddingTop: "1rem",
    },

    [phoneMediumMin]: {
        marginTop: "1.5rem",
    },
});
