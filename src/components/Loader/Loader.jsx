import styles from './loader.module.scss'

export const Loader = ({ children, isLoading }) => {
    if (isLoading) {
        return (
            <div className={styles.wrap}>
                <div
                    className={styles.ellipsis}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
    return <>{children}</>
}
