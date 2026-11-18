import styles from '../css/profileCard.module.css'
import anonymous from '../assets/anonymous.jpg'
import Button from './Button';

function ProfileCard({item}) {
    return (
        <div className={styles.profileCard}>
            <img src={anonymous} alt='Daniel Cohen'/>
            <h3>{item.name}</h3>
            <p>{item.about_me}</p>
            <Button type={item.type}/>
        </div>
    );
}

export default ProfileCard;