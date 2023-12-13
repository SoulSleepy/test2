import styles from './ErrorComponent.module.scss'

export const ErrorComponent = ({updateFn}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Произошла ошибка!</p>
            <button onClick={() => updateFn()} className={styles.btn}>Повторить запрос</button>
        </div>
    )
}