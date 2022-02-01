import styles from './OfferModal.module.scss'
import cs from 'classnames'


export const OfferModal = ({setOfferModal,offerModal}) =>{
    return(
        <>
        <div className={offerModal ? cs(styles.modal,styles.active) : styles.modal } onClick={() => {
            setOfferModal(false)

        }
        }>
        <div className={offerModal ? cs(styles.content,styles.content_active) : styles.content} onClick={e => e.stopPropagation()}>
            <div className={styles.exit} onClick={() => setOfferModal(false)}><img src="/Modal/exit.svg" alt=""/> </div>
            <div> </div>
            <div className={styles.title}>Заявка принята! </div>
        <div className={styles.description}> Наши менеджеры скоро свяжутся с вами.</div>
        <div className={styles.thanks}>Спасибо, что выбрали нас! </div>

        </div>
        </div>
        </>
    )
}