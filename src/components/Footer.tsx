import styles from "./Footer.module.css";
import React from "react";

interface Props {
    //empty
}

export const Footer: React.FC<Props> = () => {
    return <footer className={styles.footer}>
        <p>The source of audio samples is
            <a href="components/Footer"
               target="_blank"
               rel="noreferrer">mc2method.org
            </a>.
            Images are from
            <a href="https://unsplash.com"
               target="_blank"
               rel="noreferrer">unsplash.com
            </a>.
        </p>
        <p>
            &copy; {new Date().getFullYear()} Cyril Gavala
        </p>
    </footer>
};