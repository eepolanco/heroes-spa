import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../hooks/useForms";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const { search } = useLocation();
  const { q = ""} = queryString.parse(search)
  const heroes = getHeroByName(q);
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr /> 

          <form onSubmit={ onsubmit }>
            <input type="text" value={ searchText } onChange={ onInputChange } placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off" />
            <button className="btn btn-outline-primary mt-1" type="submit"> Search </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          { (!q) ? <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero</div> : 
            heroes.length === 0 && <div className="alert alert-danger animate__animated animate__fadeIn"> No hero with <b> { q } </b> </div>
          }
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero}/>
            ))
          }
        </div>
      </div>
     
    </>
  )
}
