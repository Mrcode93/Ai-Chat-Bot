// ChatInput.jsx
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // onSend("message");
    if (message.trim()) {
      onSend(message);

      setMessage("");
    }
  };

  return (
    <Box
      className="chat-input"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        position: "fixed",
        bottom: 10,
        width: "100%",
        zIndex: 999,
        backgroundColor: "background.default",
      }}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
    >
      <TextField
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        variant="outlined"
        sx={{ mr: 1 }}
      />{" "}
      <Button onClick={handleSend} variant="contained" color="primary">
        Send{" "}
      </Button>{" "}
    </Box>
  );
};

export default ChatInput;
