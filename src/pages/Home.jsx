
function Home() {
    const handleAuth = () => {
        window.location.href = 'http://localhost:3000/user/google/auth'; // Backend URL
    };

    return (
        <>
            <div>Home</div>
            <button onClick={handleAuth}>Login with Google</button>
        </>
    )
}

export default Home