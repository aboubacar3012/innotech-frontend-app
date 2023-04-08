import React, { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import uniqid from "uniqid";

// icons
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

const actions = [
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    link: "https://www.facebook.com/innotechacademy",
  },
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    link: "https://wa.me/+33758441773",
  },
  { icon: <CallIcon />, name: "Appeler", link: "https://wa.me/+33758441773" },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClick = (link?: string) => {
    setOpen(false);
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Box>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 20, right: 16 }}
        icon={<CallIcon />}
        onClose={() => handleClick()}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={uniqid()}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
