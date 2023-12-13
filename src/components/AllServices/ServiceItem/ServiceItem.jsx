import { Link, useParams } from 'react-router-dom'
import styles from './ServiceItem.module.scss'
import { useLazyGetServiceItemQuery } from '../../../state/rtk/services.rtk'
import { useEffect } from 'react'
import { ErrorComponent } from '../../ErrorComponent/ErrorComponent'
import { Loader } from '../../Loader/Loader'
import { BackIcon } from '../../../helpers/icons/Icons'

export const ServiceItem = () => {
    const { id } = useParams()
    const [getServiceItem, { data, isError, isLoading }] =
        useLazyGetServiceItemQuery(id)
    const updateItem = () => {
        getServiceItem(id)
    }
    useEffect(() => {
        getServiceItem(id)
    }, [data])

    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.backBtn}>
                <BackIcon />
            </Link>
            <Loader isLoading={isLoading}>
                {!isError ? (
                    <div className={styles.item}>
                        <h1 className={styles.name}>
                            Наименование: {data?.name}
                        </h1>
                        <p className={styles.price}>Стоимость: {data?.price}</p>
                        <p className={styles.content}>
                            Зап.часть: {data?.content}
                        </p>
                    </div>
                ) : (
                    <ErrorComponent updateFn={updateItem} />
                )}
            </Loader>
        </div>
    )
}
