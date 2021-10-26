import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'

function RowPost(props) {

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const [movies,setMovies]=useState([]);
    const [urlid,setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results);
        }).catch((err)=>{
        //  alert("Network Error");   
        })
    }, [])

const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
       if(response.data.results.length !== 0){
           setUrlId(response.data.results[0])
       }else{
           console.log('Trailer not Available');
       } 
    })
}

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movies.map((obj)=>{
               return <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt="Poster" src={`${imageUrl+obj.backdrop_path }`} alt="" />
            })}
            </div>
           {urlid && <YouTube videoId={urlid.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
