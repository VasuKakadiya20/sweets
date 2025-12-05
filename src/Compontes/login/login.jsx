import * as React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  TextField,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AuthDialog({ open, setOpen }) {
  const [tab, setTab] = React.useState(0);

  const handleClose = () => setOpen(false); 

  return (
  <>
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: {
          borderRadius: "16px",
          paddingX: "10px",
          paddingTop: "10px",
          backgroundColor: "#faf7f2",
          position: "relative",
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "#c19b5a",
          "&:hover": { color: "#a88747" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <div className="px-4 py-4 w-[450px]">
        <Tabs
          value={tab}
          onChange={(e, newVal) => setTab(newVal)}
          centered
          sx={{
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
            "& .Mui-selected": { color: "#c19b5a !important" },
            "& .MuiTabs-indicator": { backgroundColor: "#c19b5a" },
          }}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <DialogContent>
          {tab === 0 && (
            <div className="flex flex-col gap-4 mt-4">
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#c19b5a",
                  borderRadius: "10px",
                  py: 1.2,
                  fontSize: "16px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#a88747" },
                }}
                onClick={()=>Login()}
              >
                Login
              </Button>
            </div>
          )}

          {tab === 1 && (
            <div className="flex flex-col gap-4 mt-4">
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <TextField
                label="Phone Number"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#c19b5a",
                  borderRadius: "10px",
                  py: 1.2,
                  fontSize: "16px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#a88747" },
                }}
              >
                Register
              </Button>
            </div>
          )}
        </DialogContent>
      </div>
    </Dialog>
  </>
  );
}
