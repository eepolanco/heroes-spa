import React, { useMemo } from 'react'
import { getHeroesByPublishier } from '../helpers/getHeroesByPublishier'
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublishier(publisher), [ publisher ]) ;

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        { heroes.map( hero => 
            <HeroCard key={ hero.id } {...hero} />
        )}
    </div>
  )
}
