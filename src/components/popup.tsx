import React from "react";
import { Typography, Stack, Button, Dialog } from "@mui/material";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import "../assets/landingPage.css"
import ClearIcon from '@mui/icons-material/Clear';

interface DynamicDialogProps {
  selectedValue: string; // title of product + store it's from
  description: string; // Added by ${name} (Sean) at ${time }(11AM) on ${date} (2/1/2025) OR if N/A, then render 3 buttons insetad
  

  // add here things like `userID`, `productID`, `store`

    

  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DynamicDialog: React.FC<DynamicDialogProps> = ({ selectedValue, description, open, onOpen, onClose }) => {
    console.log(`
        Selected Value: ${selectedValue},
        Description: ${description},
        open: ${open},
        onOpen: ${onOpen},
        onClose: ${onClose}    
    `);

    const handleBoughtFinished = async () => {
        try {
            // activates another component of another pop up pretty much, "confirmaton.jsx"
        } catch (err) {

        }
    }

    const handleChangeStore = async () => {
        try {
            // activates another component of another pop up pretty much, "transferStore.jsx"
        } catch (err) {
            
        }
    }

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <div className="toprightCorner">
            <ClearIcon className="madeInvisible" />
            <ClearIcon onClick={() => onClose()} />
        </div>
        <div className="mainContainer">
        <Typography variant="h3" sx={{ padding: 2 }}>
         {selectedValue}
        </Typography>
        </div>

        
  

<div className="mainContainer">
  {description === "N/A" ? (
    <>
        <div className="mainContainer">
        <Stack direction="column" spacing={2} sx={{ marginBottom: "20px" }}>
            <Button onClick={() => handleBoughtFinished()} variant="contained">Bought/Finished</Button>
            <Button onClick={() => handleChangeStore()} variant="contained">Change Store</Button>
            <Button onClick={() => onClose()} variant="outlined" >Cancel</Button>
        </Stack>
        </div>
    </>
  ) : (
    <>
    <div className="mainContainerTwo">
     <Typography variant="h6" sx={{ padding: 2 }}> {description} </Typography>


    <Button 
                variant="outlined"
                //color="secondary"
                onClick={() => onClose()}
                sx={{ marginTop: 1, marginBottom: 2 }}
            >
                Cancel
            </Button>
    </div>
    </>
  )}
</div>
      </Dialog>
    </div>
  );
};

export default DynamicDialog;
