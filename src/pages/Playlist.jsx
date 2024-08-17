import Cookies from 'js-cookie';
const youtubeAccessToken = Cookies.get('youtube_access_token');

function Playlist() {
    return (
        <div>{console.log(youtubeAccessToken)}</div>
    )
}

export default Playlist