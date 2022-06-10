import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import WineBarIcon from '@mui/icons-material/WineBar';
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link'

const withLink = (to, children) => <Link href={to}>{children}</Link>;

const actions = [
    { icon: withLink("/", <HomeIcon />), name: 'Home' },
  { icon: withLink("/drink", <WineBarIcon />), name: 'Drink' },
];

export default function NavDial() {

    return (
      <div className='fixed bottom-0 right-0'>
          <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<MenuIcon />}
            >
            {actions.map((action) => (
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                >
                </SpeedDialAction>
            ))}
            </SpeedDial>
        </Box>
      </div>
    );
  }
  