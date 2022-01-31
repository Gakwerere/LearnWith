import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  handleCustomers,
  handleDashBoard,
  handleTopChart
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll  lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
          <svg class="mr-3 h-9" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#2A7BE4"></path><path d="M0.000409561 32.1646L0.000409561 46.4111C12.8618 66.4111 23.2881 5.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 -592.1646Z" fill="#ffffff"></path></svg>
            
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8 ">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-gray-900'}`}>
                <NavLink exact to="" className={`block text-gray-100 hover:text-white truncate transition duration-150 ${pathname === '/' && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-400 ${pathname === '/' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-gray-600 ${pathname === '/' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-gray-400 ${pathname === '/' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.64" width="30px"><title>book-shop</title><path d="M115.31,52.51v58.81a6.37,6.37,0,0,1-6.32,6.32H13.89a6.35,6.35,0,0,1-6.32-6.32V52.55a23.18,23.18,0,0,0,5.53.52v58.25a.82.82,0,0,0,.79.79H109a.79.79,0,0,0,.79-.79V52.85a21.89,21.89,0,0,0,5.11-.26l.42-.08ZM40.2,93.87,40.33,70h-2.7v30.42a45.57,45.57,0,0,1,11.18-1.59,31.62,31.62,0,0,1,10.39,1.63,22.06,22.06,0,0,0-7.12-3.86,26,26,0,0,0-10.3-1.1,1.45,1.45,0,0,1-1.58-1.34,1,1,0,0,1,0-.25ZM79.8,68.72a1.8,1.8,0,0,1,0-.22,1.5,1.5,0,0,1,0-.22V63.43a22.45,22.45,0,0,0-10,1.21,13.73,13.73,0,0,0-6.92,5.42V97.62a35.5,35.5,0,0,1,7.65-4,22.09,22.09,0,0,1,9.22-1.31V68.72ZM82.73,67h4a1.47,1.47,0,0,1,1.47,1.47v33.8a1.47,1.47,0,0,1-1.47,1.47,1.5,1.5,0,0,1-.47-.08,45.83,45.83,0,0,0-12.18-2,28.18,28.18,0,0,0-11.79,2.41,1.49,1.49,0,0,1-.83.24,1.55,1.55,0,0,1-.84-.24,28.13,28.13,0,0,0-11.78-2.41,45.7,45.7,0,0,0-12.18,2,1.51,1.51,0,0,1-.48.08,1.46,1.46,0,0,1-1.46-1.47V68.5A1.46,1.46,0,0,1,36.16,67h4.19l0-4.9a1.46,1.46,0,0,1,1.16-1.43h0a23.3,23.3,0,0,1,12.67,1A16.29,16.29,0,0,1,61.51,67a17.26,17.26,0,0,1,7.31-5.1,25.81,25.81,0,0,1,12.66-1.22,1.47,1.47,0,0,1,1.25,1.45h0V67ZM64.35,100.2a31.73,31.73,0,0,1,9.72-1.41,45.5,45.5,0,0,1,11.17,1.59V70H82.73V94a1.46,1.46,0,0,1-1.46,1.47,1.86,1.86,0,0,1-.34,0,18.63,18.63,0,0,0-9.36,1,32.43,32.43,0,0,0-7.22,3.77ZM60,97.34V70a12.94,12.94,0,0,0-6.83-5.6,20.39,20.39,0,0,0-9.87-1l-.16,29.08A28.46,28.46,0,0,1,53,93.77a25.37,25.37,0,0,1,7,3.57Zm46.1-50.94c-1.25-.58-4.33-1.39-5.3-2.35a12.25,12.25,0,0,1-2.12-2.88,12.25,12.25,0,0,1-2.12,2.88c-2.14,2.13-7,3.46-10.29,3.46S78.11,46.18,76,44.05a12.25,12.25,0,0,1-2.12-2.88,12.25,12.25,0,0,1-2.12,2.88c-2.14,2.13-7,3.46-10.29,3.46s-8.15-1.33-10.29-3.46A12.25,12.25,0,0,1,49,41.17a12.25,12.25,0,0,1-2.12,2.88c-2.14,2.13-7,3.46-10.29,3.46s-8.15-1.33-10.29-3.46a12.25,12.25,0,0,1-2.12-2.88,12.25,12.25,0,0,1-2.12,2.88c-1.41,1.4-5.12,2.46-7.08,3-3.95.48-8.61-.09-11.54-3A11.77,11.77,0,0,1,0,35.71V31.07H0a1.44,1.44,0,0,1,.17-.66L8.49,3.76C9.17,1.57,10.84.16,14.07,0h94.09c2.9.31,4.79,1.53,5.57,3.74l9,26.62a1.35,1.35,0,0,1,.19.63h0a.71.71,0,0,1,0,.14v4.58a11.77,11.77,0,0,1-3.47,8.34c-3.48,3.48-8.78,3.39-13.32,2.35Z" fill="#2A7BE4"/></svg>
                    <span onClick={handleDashBoard} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                </NavLink>
              </li>
              {/* Analytics */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('analytics') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('analytics') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('analytics') && 'text-indigo-500'}`} d="M0 20h24v2H0z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('analytics') && 'text-indigo-300'}`} d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z"/>
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                  </div>
                </NavLink>
              </li>
              {/* E-Commerce */}
              <SidebarLinkGroup activecondition={pathname.includes('ecommerce')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('ecommerce') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path className={`fill-current text-gray-400 ${pathname.includes('ecommerce') && 'text-indigo-300'}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                              <path className={`fill-current text-gray-700 ${pathname.includes('ecommerce') && '!text-indigo-600'}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                              <path className={`fill-current text-gray-600 ${pathname.includes('ecommerce') && 'text-indigo-500'}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">E-Learn</span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Courses</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span onClick={handleTopChart} className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders of Course</span>
                            </NavLink>
                          </li>
                          {/* <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Invoices</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop 2</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Single Product</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart 2</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pay</span>
                            </NavLink>
                          </li> */}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Campaigns */}
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('campaigns') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('campaigns') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('campaigns') && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('campaigns') && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Campaigns</span>
                  </div>
                </NavLink>
              </li> */}
              {/* Team */}
              <SidebarLinkGroup activecondition={pathname.includes('team')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('team') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path className={`fill-current text-gray-600 ${pathname.includes('team') && 'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                              <path className={`fill-current text-gray-400 ${pathname.includes('team') && 'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Grades</span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Latest - Courses </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">All - Courses</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Messages */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('messages') && 'bg-gray-900'}`}>
                <NavLink exact to="" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('messages') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('messages') && 'text-indigo-500'}`} d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('messages') && 'text-indigo-300'}`} d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                    </svg>
                    <span onClick={handleCustomers} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Chats</span>
                  </div>
                </NavLink>
              </li>
              {/* Tasks */}
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('tasks') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('tasks') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24" >
                      <path className={`fill-current text-gray-600 ${pathname.includes('tasks') && 'text-indigo-500'}`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" fill="#2A7BE4"/>
                      <path className={`fill-current text-gray-600 ${pathname.includes('tasks') && 'text-indigo-500'}`} d="M1 1h22v23H1z" fill="#2A7BE4" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('tasks') && 'text-indigo-300'}`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tasks</span>
                  </div>
                </NavLink>
              </li> */}
              {/* Inbox */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('inbox') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('inbox') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('inbox') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My file</span>
                  </div>
                </NavLink>
              </li>
              {/* Calendar */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('calendar') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('calendar') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('calendar') && 'text-indigo-500'}`} d="M1 3h22v20H1z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('calendar') && 'text-indigo-300'}`} d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                  </div>
                </NavLink>
              </li>
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes('settings')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('settings') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path className={`fill-current text-gray-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                              <path className={`fill-current text-gray-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                              <path className={`fill-current text-gray-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                              <path className={`fill-current text-gray-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                            </svg> */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4"></path>
                </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Settings</span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Account</span>
                            </NavLink>
                          </li>
                          {/* <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Notifications</span>
                            </NavLink>
                          </li> */}
                          {/* <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Connected Apps</span>
                            </NavLink>
                          </li> */}
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Plan cours</span>
                            </NavLink>
                          </li>
                          {/* <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Billing & Invoices</span>
                            </NavLink>
                          </li> */}
                          {/* <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Give Feedback</span>
                            </NavLink>
                          </li> */}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Utility */}
              <SidebarLinkGroup activecondition={pathname.includes('utility')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('utility') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <div className="flex items-center justify-between">
                          {/* <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <circle className={`fill-current text-gray-400 ${pathname.includes('utility') && 'text-indigo-300'}`} cx="18.5" cy="5.5" r="4.5" />
                              <circle className={`fill-current text-gray-600 ${pathname.includes('utility') && 'text-indigo-500'}`} cx="5.5" cy="5.5" r="4.5" />
                              <circle className={`fill-current text-gray-600 ${pathname.includes('utility') && 'text-indigo-500'}`} cx="18.5" cy="18.5" r="4.5" />
                              <circle className={`fill-current text-gray-400 ${pathname.includes('utility') && 'text-indigo-300'}`} cx="5.5" cy="18.5" r="4.5" />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Utility</span>
                          </div> */}
                          {/* Icon */}
                          {/* <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div> */}
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Changelog</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Roadmap</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">FAQs</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Empty State</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">404</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-gray-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;