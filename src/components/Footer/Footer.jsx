import styles from "./Footer.module.css";

const Footer = () => {
    return <footer id={styles.footer}>
        <p>The source of audio samples is <a href="https://mc2method.org/white-noise/" target="_blank"
                                             rel="noreferrer">mc2method.org</a>.
            Images are from <a href="https://unsplash.com" target="_blank" rel="noreferrer">unsplash.com</a>.
        </p>
        <p>
            &copy; {new Date().getFullYear()} Cyril Gavala
        </p>
    </footer>
};

export default Footer;