import styles from '../css/button.module.css'

function Button({ type }) {

    return (
        <button className={`${styles.button} ${styles[type]}`}>{type}</button>
    );
}

export default Button;