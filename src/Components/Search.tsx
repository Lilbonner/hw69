import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from './TvShowSlice.tsx';
import { Link } from 'react-router-dom';

function Search() {
    const [query, setQuery] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const dispatch = useDispatch();
    const shows = useSelector((state) => state.tvShow.shows);

    useEffect(() => {
        if (query !== '') {
            dispatch(fetchShows(query));
            setShowAutocomplete(true);
        } else {
            setShowAutocomplete(false);
        }
    }, [query, dispatch]);

    return (
        <div>
            <h3 className='title'>TV shows</h3>
            <div>
                <p className='search-title'>Search for tv shows:
                <input className='input' value={query} onChange={(e) => setQuery(e.target.value)} />
                </p>
                {showAutocomplete && (
                    <div className='autocomplete' style={{ position: 'absolute' }}>
                        {shows.map((show) => (
                            <div key={show.show.id}>
                                <Link className='link' to={`/shows/${show.show.id}`}>{show.show.name}</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
