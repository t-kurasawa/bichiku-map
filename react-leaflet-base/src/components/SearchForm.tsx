import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { stockpileSearchAsync } from "../stores/stockpile-slice";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState("東京都八王子市元本郷町３丁目２４−１");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("handleClickOpen");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="東京都八王子市元本郷町３丁目２４−１"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(event) => setAddress(event.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => dispatch(stockpileSearchAsync({ address: address }))}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="subscribe"
        onClick={handleClickOpen}
      >
        <AddLocationAltIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>備蓄品の登録をお願いします。</DialogTitle>
        <DialogContent>
          <DialogContentText>
            災害時に備蓄を分け合うことは可能ですか？
          </DialogContentText>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup row aria-label="share" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="はい" />
              <FormControlLabel value="no" control={<Radio />} label="いいえ" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄品目"
            type="stockpile"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄数"
            type="stockpile-quantity"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="賞味期限"
            type="stockpile-quantity"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄場所"
            type="address"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>登録</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default SearchForm;
