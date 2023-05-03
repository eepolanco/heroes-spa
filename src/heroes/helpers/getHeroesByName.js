import { heroes } from "../data/heroes";

export const getHeroByName = ( name = "" ) => {
    if(name.length === 0) return [];
    return heroes.filter(heroes => heroes.superhero.toLowerCase().includes(name.trim().toLowerCase()));
}