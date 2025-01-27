import React, { useEffect } from "react";

import Seo from "../seo";
import * as styles from "./styles";

const BlogBody = ({ post }) => {
    const { date, description, download, image, keywords, title } =
        post.frontmatter;

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("./makeGifsPausable").then((makeGifsPausable) =>
                makeGifsPausable.default()
            );
        }
    }, []);

    return (
        <>
            <Seo
                description={description || post.excerpt}
                image={image ? `/images/${image.base || image}` : undefined}
                keywords={keywords}
                title={title}
            />

            <article css={styles.article}>
                <header>
                    <h1>{title}</h1>
                    <p css={styles.info}>
                        <span>{date}</span>
                        {download && (
                            <span css={styles.download}>
                                <span aria-label="download icon" role="img">
                                    {" "}
                                    💾{" "}
                                </span>{" "}
                                <a
                                    href={download}
                                    rel="noopener noreferrer"
                                    css={styles.downloadMessage}
                                    target="_blank"
                                >
                                    Download the slides here!
                                </a>
                            </span>
                        )}
                    </p>
                </header>
                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    css={styles.section}
                />
            </article>
        </>
    );
};

export default BlogBody;
