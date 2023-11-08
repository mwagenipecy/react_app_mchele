import react, {useState} from "react";
import Logo from "../Assets/Logo.svg"
import {BsCart, BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {Box,Drawer,ListItem, ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from  "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {List} from "@mui/icons-material";



const Navbar=()=>{
    const [openMenu,setOpenMenu]=useState(false);
    const menuOption=[
        {
            text:"Home",
            icon: <HomeIcon />,
        },
        {
            text:"About",
            icon: <InfoIcon />,
        },  {
            text:"Testimonials",
            icon: <CommentRoundedIcon />,
        },  {
            text:"Contact",
            icon: <PhoneRoundedIcon />,
        },  {
            text:"Home",
            icon: <HomeIcon />,
        },  {
            text:"Cart",
            icon: <ShoppingCartRoundedIcon />,
        },
    ]
     return <nav>
         <div className="nav-logo-container">
             <img src={Logo} />
         </div>
         <div className="navbar-links-container">
         <a href=""> Home </a>
         <a href=""> About </a>
         <a href=""> Testimonials </a>
         <a href=""> Contacts </a>
         <a href="">
         <BsCart2 className="navbar-cart-icon">

         </BsCart2>
         </a>
             <button className="primary-button">
                 Booking Now
             </button>

         </div>
         <div className="navbar-menu-container" >
            <HiOutlineBars3   onclick={ ()=> setOpenMenu(true)}/>

         </div>
         <Drawer open={openMenu}  onClose={ ()=>setOpenMenu(false)} anchor="right" >
             <Box  $x={{
                 width:250
             }
             } role="pres" onClick={ ()=>setOpenMenu(false)}
               onKeyDown={()=>setOpenMenu(false)}
             >
                 <List>
                     { menuOption.map((item)=>{
                         <ListItem key={item.text} disablePadding>
                             <ListItemButton>
                                 <ListItemIcon>
                                     {item.icon}
                                 </ListItemIcon>
                                 <ListItemText primary={item.text}>  </ListItemText>
                             </ListItemButton>
                         </ListItem>
                     })}
                 </List>
             </Box>

         </Drawer>
     </nav>;
 };

 export  default Navbar;