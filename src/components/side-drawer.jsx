import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';


import './css/side-drawer.css'




const SwipeableSideNav = (props)=>{
  
  const useStyles = makeStyles({
    paper:{
      background:'white',
      paddingTop:'30px',
      width:'350px'
      
     
    }
  })
    
  const styles = useStyles()


    const [state, setState] = React.useState({
        right: false,
        left:false
      });



    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const classes = useStyles();

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
              [classes.fullList]: anchor === 'top' || anchor === 'bottom' ,
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

          <div className="menu-list-ite" style={{marginRight:'50px', marginBottom:'30px'}}>
                    <span className="close-icon pull-right" style={{marginBottom:'30px'}}>
                        <AiOutlineClose size={23} />
                    </span>
                </div>
            <div className="menu-lists">
              
                {props.navOptions.map((item, i)=>
                    item.href ?
                    <a href={item.link} key={i}>
                        <div className="menu-list-item"> {item.label} </div>
                    </a>
                    :<Link to={item.link} key={i}>
                         <div className="menu-list-item"> {item.label} </div>
                    </Link>
                )}
            </div>
           
          </List>
     
        </div> 
      );

    return(
        <div>
        
          <React.Fragment>
            <Button onClick={toggleDrawer(props.position, true)}> <AiOutlineMenu size={25} /> </Button>
            <SwipeableDrawer
              anchor={props.position}
              open={state[props.position]}
              onClose={toggleDrawer(props.position, false)}
              onOpen={toggleDrawer(props.position, true)}
              classes={{paper:styles.paper}}
              transitionDuration={900}
            >
              {list(props.position)}
            </SwipeableDrawer>
          </React.Fragment>
       
      </div>
    )
}

export default SwipeableSideNav;