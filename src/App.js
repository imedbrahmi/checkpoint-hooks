import  { React,useState } from 'react';
import MovieList from './Components/MovieList';
import {MovieData} from './Components/MovieData';
import './App.css'
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import Star from './Components/Star';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MovieTrailer from './Components/MovieTrailer';

const App=()=>{
  // the state should be in the js app to allow us make chages// 
  const[movie,setMovie]=useState(MovieData);
  //   step 1 we have to create an addmovie function //
  const[search,setSearch]=useState("")
  const Add =(newMovie)=>{setMovie([...movie,newMovie]);
  };
  
  return (
    
    <Router>
      <h1  className="watch"> WATCH NOW   </h1>
    <div>
      <div className="navbar">
        <h3> <Link to="/"> HOME </Link></h3>
      <Filter setSearch={setSearch}  />
      <AddMovie Add= {Add} />
      </div>
      <Switch>
<Route exact path="/">

     <MovieList movie={movie} search={search}   />
     </Route>
{movie.map(el=><Route path={`/details/${el.id}`}><MovieTrailer
name={el.name}
trailer={el.trailer}
description={el.description}
rating={el.rating}
/>
</Route>)}
</Switch>
<footer>
<h5> Best Movies @2021</h5>
</footer>

    </div>
    </Router>
  );
};
    
 
export default App