import React, {useState} from 'react';
import { Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {AiOutlineUser, AiOutlineMenu} from 'react-icons/ai'

import './css/header.css'

const AppHeader = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
    
    <div className="header-wraper">
        <div className="header header-transparent dark-text">
        <div className="container">
            <nav id="navigation" className="navigation navigation-landscape">
                <div className="nav-header">
                    <AiOutlineMenu size={25}/>
                    <span className="nav-brand"><img src="../assets/logo.png" className="logo" alt="" /></span>
                    <span className="mobile_nav pull-right" id="mobile_nav">
                        <ul className='pull-right'>
                            <li onClick={()=>handleOpen()}>
                               <AiOutlineUser/> 
                            </li>
                            <li className='pull-right'>
                                <a href="https://forms.gle/oqw5rUs92AfenhbM8"  target="_blank" className="crs_yuo12 w-auto text-white theme-bg">
                                    <span className="embos_45"><i className="fa fa-plus-circle mr-1 mr-1"></i>Post Task</span>
                                </a>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                    <ul className="nav-menu" id="nav-menu">

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li><a href="https://forms.gle/vBFKtxMf7fJC5fZZ9" target="_blank">Find Task (Join Waitlist)</a>
                        </li>
                       

                        <li><Link to="/about">About Us</Link>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>

                    <ul className="nav-menu nav-menu-social align-to-right">
                        <li>
                            <a href="#" data-toggle="modal" data-target="#login" className="ft-medium">
                                    <i className="fa fa-user mr-2"></i>Sign In
                                </a>
                        </li>
                        <li className="add-listing theme-bg">
                            <a href="https://forms.gle/oqw5rUs92AfenhbM8">
                                    <i className="fa fa-circle-plus mr-1"></i> Post a Task
                                </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          
          <div className="modal-body p-5" style={{backgroundColor:'white', maxWidth:'400px', margin:'0 auto'}}>
                        <div className="text-center mb-4">
                            <h2 className="m-0 ft-regular">Login</h2>
                        </div>

                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="Username*"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password*"/>
                            </div>

                            <div className="form-group">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="flex-1">
                                        <input id="dd" className="checkbox-custom" name="dd" type="checkbox"/>
                                        <label htmlFor='dd' className="checkbox-custom-label">Remember Me</label>
                                    </div>
                                    <div className="eltio_k2">
                                        <a href="#" className="theme-cl">Lost Your Password?</a>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-md full-width theme-bg text-light fs-md ft-medium">Login</button>
                            </div>

                            <div className="form-group text-center mb-0">
                                <p className="extra">Not a member?<a href="#et-register-wrap" className="text-dark"> Register</a></p>
                            </div>
                        </form>
                    </div>
      </Modal>
    </div>
     );
}
 
export default AppHeader;