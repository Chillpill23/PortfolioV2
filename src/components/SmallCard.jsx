import CountUp from 'react-countup';

function SmallCard({section,stats = 1, icon, desc}) {
  return (
    <div className={`${section}__sCard`}>
      <div className="sCard__visual">
        {stats !== 0 && 
          <span>
            <CountUp 
             start={0} 
             end={stats}
             duration={2.5}
             enableScrollSpy = {true}
             scrollSpyOnce = {true}
            />+
          </span>
        }
        {(stats === 0 && icon) ? <span>{icon}</span> : null}
      </div>
      <p className="sCard__content">{desc}</p>
    </div>
  )
}

SmallCard.defaultProps = {
  stats: 0,
  icon: null,
  desc: 'No description available' 
}

export default SmallCard