import GoogleButton from "./GoogleButton";
const HeroSection = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-[#42f742] text-black text-center px-4">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-bold mb-4">
                    Transfer Your Spotify Playlist to YouTube
                </h1>
                <p className="text-lg mb-8">
                    Easily transfer your Spotify playlists to your YouTube account by simply providing the Spotify playlist URL. Enjoy your favorite music across platforms!
                </p>

                <GoogleButton onClick={() => {
                    window.location.href = 'http://localhost:3000/user/google/auth'; // Backend URL
                }} />
            </div>
        </section>
    );
};

export default HeroSection;
