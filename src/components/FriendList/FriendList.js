import PropTypes from 'prop-types';
import style from './FriendList.module.css';

function FriendList({ friends }) {
   return (
      <ul className={style.friendList}>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={style.item}>
               <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
         ))}
      </ul>
   );
};

function FriendListItem({ avatar, name, isOnline }) {
   return (
      <>
         <span className={isOnline ? style.statusGreen : style.statusRed}>{isOnline}</span>
         <img className={style.avatar} src={avatar} alt={name} width="48" />
         <p className={style.name}>{name}</p>
      </>
   );
};

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired,
      }).isRequired
   ).isRequired,
};



export default FriendList;