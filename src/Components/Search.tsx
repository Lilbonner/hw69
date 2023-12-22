import  {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchShows} from "./tvShowSlice.tsx";

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const shows = useSelector((state) => state.tvShow.shows);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchShows(query));
    };


    return (
        <div >
            <h3 className='title'>
                TV shows
            </h3>
            <div>
                <p className='search-title'>Search for tv shows:
                    <input className='input' placeholder='enter show name' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </p>
            </div>
            <div>
                {shows.map((show) => (
                    <div key={show.show.id}>{show.show.name}</div>
                ))}
            </div>
        </div>
    );
}

export default Search;

