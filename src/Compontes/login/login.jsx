// import * as React from "react";
// import {
//   Dialog,
//   DialogContent,
//   Slide,
//   TextField,
//   Button,
//   Tabs,
//   Tab,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AuthDialog({ open, setOpen }) {
//   const [tab, setTab] = React.useState(0);

//   const handleClose = () => setOpen(false); 

//   return (
//   <>
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       TransitionComponent={Transition}
//       keepMounted
//       PaperProps={{
//         sx: {
//           borderRadius: "16px",
//           paddingX: "10px",
//           paddingTop: "10px",
//           backgroundColor: "#faf7f2",
//           position: "relative",
//         },
//       }}
//     >
//       <IconButton
//         onClick={handleClose}
//         sx={{
//           position: "absolute",
//           right: 10,
//           top: 10,
//           color: "#c19b5a",
//           "&:hover": { color: "#a88747" },
//         }}
//       >
//         <CloseIcon />
//       </IconButton>

//       <div className="px-4 py-4 md:w-[450px]">
//         <Tabs
//           value={tab}
//           onChange={(e, newVal) => setTab(newVal)}
//           centered
//           sx={{
//             "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
//             "& .Mui-selected": { color: "#c19b5a !important" },
//             "& .MuiTabs-indicator": { backgroundColor: "#c19b5a" },
//           }}
//         >
//           <Tab label="Login" />
//           <Tab label="Register" />
//         </Tabs>

//         <DialogContent>
//           {tab === 0 && (
//             <div className="flex flex-col gap-4 mt-4">
//               <TextField
//                 label="Email"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   backgroundColor: "#c19b5a",
//                   borderRadius: "10px",
//                   py: 1.2,
//                   fontSize: "16px",
//                   textTransform: "none",
//                   "&:hover": { backgroundColor: "#a88747" },
//                 }}
//                 onClick={()=>setOpen(false)}
//               >
//                 Login
//               </Button>
//             </div>
//           )}

//           {tab === 1 && (
//             <div className="flex flex-col gap-4 mt-4">
//               <TextField
//                 label="First Name"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <TextField
//                 label="Last Name"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <TextField
//                 label="Phone Number"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <TextField
//                 label="Email"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
//               />

//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   backgroundColor: "#c19b5a",
//                   borderRadius: "10px",
//                   py: 1.2,
//                   fontSize: "16px",
//                   textTransform: "none",
//                   "&:hover": { backgroundColor: "#a88747" },

//                 }}
//               >
//                 Register
//               </Button>
//             </div>
//           )}
//         </DialogContent>
//       </div>
//     </Dialog>
//   </>
//   );
// }
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
import { postData } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { mycontext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AuthDialog({ open, setOpen }) {
  const [tab, setTab] = useState(0);
  const [error, setError] = useState("");
  const context = useContext(mycontext)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    phonenumber: "",
    Email: "",
    password: "",
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await postData("/client/create", formData);
      toast.success("singup successfully")
      setFormData({ Firstname: "", Lastname: "", phonenumber: "", Email: "", password: "" })
      setOpen(false);
    } catch (err) {
      setError(err.response?.data?.msg);
      console.log(err.response?.data?.msg)
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await postData("/client/loginuser", {
        Email: formData.Email,
        password: formData.password,
      });
      toast.success("Login successfully!")
      // console.log(res)
      context.setislogin(true)
      localStorage.setItem("islogin", true)
      localStorage.setItem("username", res.user.id);
      setOpen(false);
      setFormData({ Firstname: "", Lastname: "", phonenumber: "", Email: "", password: "", })
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed!");
      console.log(err)
    }
    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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

        <div className="px-4 py-4 md:w-[450px]">
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
            {error && <p className="text-red-500">{error}</p>}

            {tab === 0 && (
              <div className="flex flex-col gap-4 mt-4">
                <TextField
                  label="Email"
                  name="Email"
                  fullWidth
                  variant="outlined"
                  value={formData.Email}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
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
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            )}

            {tab === 1 && (
              <div className="flex flex-col gap-4 mt-4">
                <TextField
                  label="First Name"
                  name="Firstname"
                  fullWidth
                  variant="outlined"
                  value={formData.Firstname}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Last Name"
                  name="Lastname"
                  fullWidth
                  variant="outlined"
                  value={formData.Lastname}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Phone Number"
                  name="phonenumber"
                  fullWidth
                  variant="outlined"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Email"
                  name="Email"
                  fullWidth
                  variant="outlined"
                  value={formData.Email}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
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
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
              </div>
            )}
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
