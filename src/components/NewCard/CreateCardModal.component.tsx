import {useState} from "react";
import {Box, Button, Modal, TextField} from "@mui/material";

import styles from "./CreateCardModal.module.css";
import {ButtonComponent} from "../Button/Button.component.tsx";

export function CreateCardModalComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} data-testid={"create-new-card-button"}>
        Create new card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid={"create-new-word-modal"}
      >
        <Box className={styles.modal_box}>
          <TextField
            className={styles.card_name_input}
            variant={"standard"}
            label={"Original"}
            data-testid={"original-word-input"}
          ></TextField>
          <TextField
            className={styles.card_name_input}
            variant={"standard"}
            label={"Translation"}
            data-testid={"translation-word-input"}
          ></TextField>
          <ButtonComponent className={"asd"}>Create</ButtonComponent>
        </Box>
      </Modal>
    </div>
  );
}
