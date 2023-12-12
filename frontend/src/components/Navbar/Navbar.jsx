import '../Navbar/Navbar.css'



const Navbar = ()=>{

    return(
       <div>
        <div className="leftBox">
            <img src="" alt="logo" />
            <h4>AndroJet</h4>
        </div>
        <div className="rightBox">
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/services">services</a></li>
                <li><a href="/Blog"></a></li>
            </ul>

        </div>
       </div>
    )






}

export default Navbar;