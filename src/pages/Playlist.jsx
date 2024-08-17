import Cookies from 'js-cookie';
import Input from '../component/Input.jsx';
const youtubeAccessToken = Cookies.get('youtube_access_token');

function Playlist() {
    return (
        <div>
            <Input />
        </div>
    )
}

export default Playlist