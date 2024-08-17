
function PageNotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-4">
            <div className="max-w-md">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-lg mb-8">
                    Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage.
                </p>
                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
                    Go to Homepage
                </a>
            </div>
        </div>
    )
}

export default PageNotFound

