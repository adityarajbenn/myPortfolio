import "../Styles/Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <a href="#home"><h3><span><i class="fa-solid fa-house-user"></i></span> Home</h3></a>
            <a href="#about"><h3><span><i class="fa-solid fa-address-card"></i></span> About</h3></a>
            <a href="#skills"><h3><span><i class="fa-solid fa-kitchen-set"></i></span> Skills</h3></a>
            <a href="#projects"><h3><span><i class="fa-solid fa-person-digging"></i></span> Projects</h3></a>
            <a href="#contactDiv"><h3><span><i class="fa-solid fa-mobile"></i></span> Contact</h3></a>
        </div>
    )
}

export default Navbar;