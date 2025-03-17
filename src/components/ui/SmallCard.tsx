import { memo, ReactNode } from 'react';
import CountUp from 'react-countup';

interface SmallCardProps {
  section:string;
  stats:number;
  icon?:ReactNode;
  desc:string;
}

const SmallCard = memo(({section,stats, icon, desc}:SmallCardProps) => {
  return (
    <div className={`${section}__sCard`}>
      <div className="sCard__visual">
        {stats > 0 && 
          <span>
            <CountUp 
            key={stats}
             start={0} 
             end={stats ?? 0}
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
})

export default SmallCard