import PropTypes from 'prop-types';
import style from './Profile.module.css';


function Profile({ username, tag, location, avatar, stats }) {
   return (
      <div key={username} className={style.profile}>
         <div className={style.description}>
            <img src={avatar} alt={username} className={style.avatar} width="100" />
            <p className={style.name}>{username}</p>
            <p className={style.tag}> @{tag}</p>
            <p className={style.location}>{location}</p>
         </div>   
         <ul className={style.stats}>
        <ProfileList
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </ul>
      </div>

   );
}

 function ProfileList({ followers, views, likes }) {
   return (
      <>
         <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{followers}</span>
         </li>
         <li className={style.item}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{views}</span>
         </li>
         <li className={style.item}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{likes}</span>
         </li>
      </>
   );
}





Profile.propTypes = {
   avatar: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
   }).isRequired,
};


ProfileList.propTypes = {
   followers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
};



export default Profile;
