import { useState ,MouseEvent} from 'react';
import {Box,Button,Fade,List,ListItemText,Popper,ListItemButton} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListItemTextStyled } from './ListItemTextStyled';

export const Filter = ()=>{
    const [open,setOpen] = useState(false)
    const [anchorEl,setAnchorEl] = useState<null|HTMLElement>(null);

    const handleClick = (e:MouseEvent<HTMLElement>) =>{
        setAnchorEl(e.currentTarget);
        setOpen((previosState)=>!previosState);
    }

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'spring-popper' : undefined;

    return <Box>
        <button aria-describedby={id} type="button" onClick={handleClick}>
            Organizar por <KeyboardArrowDown className="transition ease-in-out delay-150 {{open?transform:rotate(180deg):transform:rotate(0deg)}}"/>
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl} transition nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
                <Box className='min-w-fit rounded  bg-white shadow-[#50d71e]'>
                
                <List>
                    <ListItemButton>
                        <ListItemTextStyled   primary="Novidades"/>
                    </ListItemButton> 
                     <ListItemButton>
                    <ListItemTextStyled  primary="Preço: Maior - menor"/>
                        
                     </ListItemButton>                   
                    <ListItemButton>

                     <ListItemTextStyled  primary="Preço: Menor - maior"/>
                    </ListItemButton>
                    
                     <ListItemButton>
                        <ListItemTextStyled  primary="Mais vendidos"/>
                     </ListItemButton>
                </List>
                </Box>
            </Fade>
            )}
        </Popper>
            
    </Box>
}