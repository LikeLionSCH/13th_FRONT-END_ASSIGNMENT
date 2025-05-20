import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Friend({name}) {
    const {push}=useRouter()
    const handleGoToChatItem=()=>{
        push('/')
    }

    return (
        <div className={styles.FriendsList} onClick={handleGoToChatItem}>
            <img src='user.jpg' alt='유저 사진'/>
            <div className={styles.FriendName}>{name}</div>
        </div>
    );
}