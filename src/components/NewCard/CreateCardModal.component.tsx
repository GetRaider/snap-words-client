import {useState} from "react";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

import styles from "./CreateCardModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#1a1a1a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function CreateCardModalComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Create new card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            className={styles.card_name_input}
            variant={"outlined"}
            label={"Original"}
          ></TextField>
          <TextField
            className={styles.card_name_input}
            variant={"outlined"}
            label={"Translation"}
          ></TextField>
          <Button>Create</Button>
        </Box>
      </Modal>
    </div>
  );
}
