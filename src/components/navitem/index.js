import { Link } from "gatsby";
import React from "react";

import * as styles from "./styles";

const NavItem = ({ arrow, page, rel }) => {
    return (
        <li className={styles.navItem}>
            <Link
                className={styles.navLink(rel)}
                to={page.fields.slug}
                rel={rel}
            >
                <span className={styles.navArrow(rel)}>{arrow}</span>{" "}
                <span>{page.frontmatter.title}</span>
            </Link>
        </li>
    );
};

export default NavItem;
