import {  useEffect } from "react"



const Navbar = ({ cityName, setCityName, onSearch }) => {

    


    useEffect(() => {
        localStorage.setItem("cityName", cityName);
    }, [cityName])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName.trim() !== "") {
            onSearch(cityName); 
        }
    }


    return (

        <nav className="Navbar-wraper">
            <p>Weather app</p>

            <form className="search-form" onSubmit={handleSubmit} >

                <input type="text" value={cityName} placeholder="Enter city name e.g. Delhi" className="form-input" onChange={(e) => setCityName(e.target.value)} />
                <button type="submit">Submit</button>

            </form>

        </nav>
    )
}

export default Navbar