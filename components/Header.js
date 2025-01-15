const Header=()=>{
    return(
       
        <div className="flex items-center justify-between p-3">
            {/* the logo part */}
            <div className="flex item-center">
                <img src="null" alt=""></img>
            </div>

            {/* the menus */}
            <div>
                <ul className="flex space-x-8">
                    <li>Home</li>
                    <li>Explore more</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>

            </div>

            {/* the profile */}
            <div>
                <button className="px-4 py-2 text-black">

                </button>
            </div>
        </div>
    )
}

export default Header;