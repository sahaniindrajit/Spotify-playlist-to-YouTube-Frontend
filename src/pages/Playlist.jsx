import Cookies from 'js-cookie';
import Input from '../component/Input.jsx';
import Heading from '../component/Heading.jsx';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Playlist() {
    const [link, SetLink] = useState("k");
    const [youtubeAccessToken, setYoutubeAccessToken] = useState(null);

    useEffect(() => {
        const token = Cookies.get('youtube_access_token');
        setYoutubeAccessToken(token);
    }, []);

    const handleChange = (e) => {
        SetLink(e.target.value);
    };



    const handelClick = async () => {
        try {
            console.log(link)
            if (!youtubeAccessToken) {
                console.error("No YouTube access token found!");
                return;
            }

            const res = await axios.post("http://localhost:3000/user/playlist", { data: link }, {
                headers: {
                    'youtube_access_token': youtubeAccessToken
                }
            })

            console.log(res);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-slate-300 w-full h-screen flex flex-col items-center justify-center'>

            <div className='flex flex-col justify-center w-2/3 pb-5'>
                <Heading label={"Enter Spotify Playlist"} />
                <div className='flex flex-row space-x-2'>
                    <Input onChange={handleChange} onClick={handelClick} />

                </div>
            </div>

            <div>
                <Heading label={"Link to YouTube Playlist"} />
            </div>
        </div>
    )
}


export default Playlist