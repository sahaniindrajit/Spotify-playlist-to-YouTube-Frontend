import Cookies from 'js-cookie';
import Input from '../component/Input.jsx';
import Heading from '../component/Heading.jsx';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Playlist() {
    const [link, SetLink] = useState("");
    const [youtubeAccessToken, setYoutubeAccessToken] = useState(null);
    const [responseMessage, setResponseMessage] = useState(''); //to show response
    const [apiCall, setApiCall] = useState(false) //when to show loading
    const [isLoading, setIsLoading] = useState(false); //When request is under process
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    //for geeting token from cookies
    useEffect(() => {
        const token = Cookies.get('youtube_access_token');
        setYoutubeAccessToken(token);
    }, []);


    const handleChange = (e) => {
        SetLink(e.target.value);
    };


    //api call to get playlist 
    const handelClick = async () => {
        try {
            setApiCall(true)
            setIsLoading(true);


            if (!youtubeAccessToken) {
                setResponseMessage("No YouTube access token found!");
                setIsLoading(false);
                setApiCall(false);
                return;
            }

            const res = await axios.post(`${API_BASE_URL}/user/playlist`, { data: link }, {
                headers: {
                    'youtube_access_token': youtubeAccessToken
                }
            });


            if (res.data && (res.data.link || res.data.msg)) {
                if (res.data.link) {
                    setResponseMessage(res.data.link);
                }
                else {
                    setResponseMessage(res.data.msg);
                }

            }
            else {
                setResponseMessage("Request successful but no message returned.");
            }

            console.log(res);
        }
        catch (err) {
            if (err.response && err.response.data && err.response.data.msg) {
                setResponseMessage(err.response.data.msg);
            }
            else {
                setResponseMessage("An error occurred. Please try again.");
            }
            console.error(err);
        }
        finally {
            setApiCall(true)
            setIsLoading(false);
        }
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch {
            return false;
        }
    };

    return (
        <div className='bg-slate-300 w-full h-screen flex flex-col items-center justify-center'>

            <div className='flex flex-col justify-center w-2/3 pb-5'>
                <Heading label={"Enter Spotify Playlist"} />
                <div className='flex flex-row space-x-2'>
                    <Input onChange={handleChange} onClick={handelClick} />

                </div>
            </div>

            {/*for show loading when request is under way */}
            {apiCall && (
                isLoading ? (
                    <Heading label={"Loading... Might take 10 seconds..."} />
                ) : (
                    <div>
                        <Heading label={"Link to YouTube Playlist"} />

                        {responseMessage && (
                            isValidUrl(responseMessage) ? (
                                <a className='custom-link' href={responseMessage} target="_blank" rel="noopener noreferrer">
                                    {responseMessage}
                                </a>
                            ) : (
                                <Heading label={responseMessage}></Heading>
                            )
                        )}
                    </div>
                )
            )}



        </div>
    )
}


export default Playlist