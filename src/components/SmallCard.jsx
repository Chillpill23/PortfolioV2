function SmallCard({section,stats, icon, desc}) {
  return (
    <div className={`${section}__sCard`}>
      <div className="sCard__visual">
        {stats !== 0 && <span>{stats}+</span>}
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