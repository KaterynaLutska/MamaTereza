import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";

interface DonateModalProps {
  open: boolean;
  onClose: () => void;
  onConfirmDonation: (amount: number) => void;
  updateProject: any;
}

const DonateModal: React.FC<DonateModalProps> = ({ open, onClose, onConfirmDonation, updateProject }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleConfirmDonation = () => {
    onConfirmDonation(donationAmount);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 4, margin: "auto", mt: 5, bgcolor: "background.paper", boxShadow: 24 }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Enter Donation Amount</Typography>
        <TextField
          fullWidth
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
          label="Amount"
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleConfirmDonation}>
          Confirm
        </Button>
      </Box>
    </Modal>
  );
};

export default DonateModal;
