import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function MessageListItem({name, message}) {
    const {push}=useRouter()
    const handleGoToChatItem=()=>{
        push('/')
    }

    return (
        <div className={styles.MessageList}>
            <img src='user.jpg' alt='유저 사진'
            />
            <button
                onClick={handleGoToChatItem}>
                    <div className={styles.Text}>
                        <div className={styles.Name}>{name}</div>
                        <div className={styles.Message}>{message}</div>
                    </div>
            </button>
        </div>
    );
}