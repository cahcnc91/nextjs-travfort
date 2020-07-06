import styles from "./whatsapp-button.module.css";

const WhatsappButton = () => {
    return (
        <a href="https://wa.me/5511996019288" target="_blank">
            <img src="images/whatsapp-logo.svg" alt="Whatsapp logo" className={styles.whatsappButton}/>
        </a>
        
    )
}
export default WhatsappButton;