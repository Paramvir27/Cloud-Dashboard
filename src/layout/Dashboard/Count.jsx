import React from 'react'
import { useSelector } from 'react-redux'
import Count from '../../components/Counters'
import { getSizeClass } from './helper'

const CountCards = React.memo(() => {
  const counts = useSelector((state) => state.dashboard.counts)

  return (
    <>
      {counts.map((countItem, index) => (
        <div key={`count-${index}`} className={getSizeClass(countItem.size)}>
          <Count
            count={countItem.count}
            heading={countItem.heading}
            description={countItem.description}
          />
        </div>
      ))}
    </>
  )
})

CountCards.displayName = 'CountCards'

export default CountCards
