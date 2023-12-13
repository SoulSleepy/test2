import { Link } from 'react-router-dom'
import styles from './AllServices.module.scss'
import { useLazyGetServicesQuery } from '../../state/rtk/services.rtk'
import { ErrorComponent } from '../ErrorComponent/ErrorComponent'
import { Loader } from '../Loader/Loader'
import { useEffect } from 'react'

export const AllServices = () => {
    const [getServices, { data, isError, isLoading }] =
        useLazyGetServicesQuery()

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Список услуг:</h1>
            <Loader isLoading={isLoading}>
                {!isError ? (
                    data?.filter((item) => item.name).map((item) => {
                        return ( 
                            <Link
                                className={styles.service}
                                key={item.id}
                                to={`/${item.id}/details`}
                            >
                                {item.name}
                            </Link>
                        )
                    })
                ) : (
                    <ErrorComponent updateFn={getServices} />
                )}
            </Loader>
        </div>
    )
}
