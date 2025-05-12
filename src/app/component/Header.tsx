
function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-14 flex justify-between items-center h-20">
        <div className="flex items-center space-x-4 cursor-pointer">
          
          <img src="Images/menu.svg" alt="menu" />
          <img src="Images/CashKaro.svg" alt="logo" className="w-auto" />
        </div>

        <div className="hidden md:flex flex-grow justify-center left-10 mx-10">
          <input
            type="text"  
            className="w-xl h-12 rounded-xl outline-none px-4 bg-gray-100"
            placeholder="Search for any brand or products"
          />
        </div>
       
        <div className="hidden md:flex items-center">                    
          <p className="font-medium mr-3 cursor-pointer">Help</p>
 
                <div className="h-6 w-px bg-gray-300 mr-3" />
          <img src="Images/login.png" alt="login" height={31} width={32} className="cursor-pointer font-medium" />
          <p className="font-medium ml-1 cursor-pointer">Login / Sign up</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
