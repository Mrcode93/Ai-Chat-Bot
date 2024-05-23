import { Button, Typography, Box } from "@mui/material";

const WelcomePage = () => {
  const handleContinue = () => {
    localStorage.setItem("visited", "true");
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Our Ai Chat Application!
      </Typography>
      <Typography variant="h6" gutterBottom>
        We're glad to have you here.
        <br />
        Click the button below to get started.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleContinue}>
        Let's get started
      </Button>
    </Box>
  );
};

export default WelcomePage;
