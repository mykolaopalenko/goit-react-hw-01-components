import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({ title, stats }) {
   return (
     <section className={style.statistics}>
       {title && <h2 className={style.title}>{title}</h2>}
 
       <ul className={style.statList}>
         {stats.map(({ id, label, percentage }) => (
           <li
             key={id}
             className={style.item}
             style={{ backgroundColor: `${getRandomHexColor()}` }}
           >
             <StatisticsItem label={label} percentage={percentage} />
           </li>
         ))}
       </ul>
     </section>
   );
 }
 
 function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }


 function StatisticsItem({ label, percentage }) {
   return (
     <>
       <span className={style.label}>{label}</span>
       <span className={style.percentage}>{percentage}%</span>
     </>
   );
 }
 
 StatisticsItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
 };

 Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
     PropTypes.exact({
       id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
     })
   ),
 };


 export default Statistics;