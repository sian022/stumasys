import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
 } from 'cdbreact'
 import { LinkContainer } from 'react-router-bootstrap'
 import '../App.css'
 
function Header() {
    return(
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" id='my-nav'>
                <LinkContainer to ='/'>
                    <Navbar.Brand className='app-logo'>
                        <i className="fa-solid fa-graduation-cap"></i>Student Management System
                    </Navbar.Brand>
                </LinkContainer>
            </Navbar>
            
            <div className='sidebar'>
                <CDBSidebar bg='light' variant='light' expand='lg'> 
                    <CDBSidebarHeader prefix={<i className="fa fa-bars"/>}>
                        Navigation
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <LinkContainer to='/'>
                                <NavLink>
                                    <CDBSidebarMenuItem icon='home'>Home</CDBSidebarMenuItem>
                                </NavLink>
                            </LinkContainer>

                            <LinkContainer to='/students'>
                                <NavLink>
                                    <CDBSidebarMenuItem icon='list'>Students List</CDBSidebarMenuItem>
                                </NavLink>
                            </LinkContainer>

                            <LinkContainer to='/manage'>
                                <NavLink>
                                    <CDBSidebarMenuItem icon='user'>Manage Students</CDBSidebarMenuItem>
                                </NavLink>
                            </LinkContainer>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </div>
    )
}

export default Header;