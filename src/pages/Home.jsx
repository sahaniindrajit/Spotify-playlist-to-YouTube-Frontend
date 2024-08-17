import Button from "../component/Button";

function Home() {


    return (
        <>
            <div>Home</div>
            <Button onClick={() => {
                window.location.href = 'http://localhost:3000/user/google/auth'; // Backend URL
            }} />
        </>
    )
}

export default Home