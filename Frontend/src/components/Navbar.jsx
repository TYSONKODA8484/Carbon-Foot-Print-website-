import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import list from '../../data/list.json'; // Adjust the path to your JSON file

function Navbar() {
  const navItems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/villages'>Villages</Link></li>
      <li><Link to='/carbon'>Carbon Footprint</Link></li>
      <li><Link to='/data'>Data</Link></li>
      <li><Link to='/signup'>SignUp</Link></li>
    </>
  );

  const [sticky, setSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = list.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(results);
    } else {
      setFilteredLocations([]);
    }
  }, [searchTerm]);

  const handleSearchSelect = (location) => {
    navigate(`/location/${location.id}`, { state: { location } });
    setSearchTerm('');
  };

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" : ""
        }`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-700 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <Link to='/' className="text-2xl font-bold cursor-pointer whitespace-nowrap">SOS Village </Link>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="relative hidden md:block">
              <input
                type="text"
                className="px-3 py-1 input input-bordered flex items-center gap-2 grow outline-none rounded-md dark:text-white dark:bg-slate-700"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filteredLocations.length > 0 && (
                <ul className="absolute z-10 w-full bg-white dark:bg-slate-700 dark:text-white shadow-md rounded-md mt-1">
                  {filteredLocations.map((location) => (
                    <li
                      key={location.id}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600"
                      onClick={() => handleSearchSelect(location)}
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="">
            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
