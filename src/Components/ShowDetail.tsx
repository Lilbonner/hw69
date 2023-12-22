import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchShowDetail } from './TvShowSlice';

function ShowDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const showDetail = useSelector((state) => state.tvShow.showDetail);

    useEffect(() => {
        dispatch(fetchShowDetail(id));
    }, [dispatch, id]);

    if (!showDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className='show-details'>
            <img alt='img' src={showDetail.image.medium}/>
            <div>
                <h2 className='show-title'>{showDetail.name}</h2>
                <p className='summary'>{showDetail.summary}</p>
            </div>
        </div>
    );
}

export default ShowDetail;
