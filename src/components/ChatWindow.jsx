// // import React from "react";
// // import { Box, Typography } from "@mui/material";
// // import ReactMarkdown from "react-markdown";

// // // Utility function to check if the text is Arabic
// // const isArabic = (text) => {
// //   const arabicRegex =
// //     /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
// //   return arabicRegex.test(text);
// // };

// // const ChatWindow = ({ messages }) => {
// //   return (
// //     <Box
// //       className="chat-window"
// //       sx={{
// //         p: 2,
// //         width: "100%",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "flex-start",
// //       }}
// //     >
// //       {messages.map((msg, index) => (
// //         <Box
// //           key={index}
// //           className="message"
// //           sx={{
// //             mb: 1,
// //             alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
// //             direction: isArabic(msg.text) ? "rtl" : "ltr",
// //           }}
// //         >
// //           <Typography
// //             variant="body1"
// //             sx={{
// //               fontWeight: "bold",
// //               mb: 1,
// //               //   backgroundColor: "#f0f0f0",
// //               p: 1,
// //               borderRadius: 1,
// //               alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
// //             }}
// //           >
// //             {msg.sender}:
// //           </Typography>
// //           <Box
// //             sx={{
// //               typography: "body2",
// //               "& p": { margin: 0 },
// //               "& ul": { margin: 0, paddingLeft: 2 },
// //               "& ol": { margin: 0, paddingLeft: 2 },
// //               alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
// //               p: 1,
// //               borderRadius: 1,
// //               transition: "all 0.3s ease",
// //               //   backgroundColor: msg.sender === "user" ? "#f0f0f0" : "#e0e0e0",
// //             }}
// //           >
// //             <ReactMarkdown>{msg.text}</ReactMarkdown>
// //           </Box>
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default ChatWindow;

// import { useEffect, useRef } from "react";
// import { Box, Typography } from "@mui/material";
// import ReactMarkdown from "react-markdown";

// // Utility function to check if the text is Arabic
// const isArabic = (text) => {
//   const arabicRegex =
//     /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
//   return arabicRegex.test(text);
// };

// const ChatWindow = ({ messages }) => {
//   const endOfMessagesRef = useRef(null);

//   // Scroll to the latest message whenever messages change
//   useEffect(() => {
//     if (endOfMessagesRef.current) {
//       endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <Box
//       className="chat-window"
//       sx={{
//         p: 2,
//         width: "100%",
//         height: "400px", // Set a height for the chat window to enable scrolling
//         overflowY: "auto", // Enable vertical scrolling
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {messages.map((msg, index) => (
//         <Box
//           key={index}
//           className="message"
//           sx={{
//             mb: 1,
//             alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
//             direction: isArabic(msg.text) ? "rtl" : "ltr",
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               fontWeight: "bold",
//               mb: 1,
//               p: 1,
//               borderRadius: 1,
//               alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
//             }}
//           >
//             {msg.sender}:
//           </Typography>
//           <Box
//             sx={{
//               typography: "body2",
//               "& p": { margin: 0 },
//               "& ul": { margin: 0, paddingLeft: 2 },
//               "& ol": { margin: 0, paddingLeft: 2 },
//               alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
//               p: 1,
//               borderRadius: 1,
//               transition: "all 0.3s ease",
//             }}
//           >
//             <ReactMarkdown>{msg.text}</ReactMarkdown>
//           </Box>
//         </Box>
//       ))}
//       <div ref={endOfMessagesRef} />
//     </Box>
//   );
// };

// export default ChatWindow;

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

// Utility function to check if the text is Arabic
const isArabic = (text) => {
  const arabicRegex =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
};

const ChatWindow = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  // Scroll to the latest message whenever messages change
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box
      className="chat-window"
      sx={{
        p: 2,
        width: "100%",
        height: "400px", // Set a height for the chat window to enable scrolling
        overflowY: "auto", // Enable vertical scrolling
        display: "flex",
        flexDirection: "column",
        // Custom scrollbar hiding styles
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari, and Edge
      }}
    >
      {messages.map((msg, index) => (
        <Box
          key={index}
          className="message"
          sx={{
            mb: 1,
            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            direction: isArabic(msg.text) ? "rtl" : "ltr",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              mb: 1,
              p: 1,
              borderRadius: 1,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.sender}:
          </Typography>
          <Box
            sx={{
              typography: "body2",
              "& p": { margin: 0 },
              "& ul": { margin: 0, paddingLeft: 2 },
              "& ol": { margin: 0, paddingLeft: 2 },
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              p: 1,
              borderRadius: 1,
              transition: "all 0.3s ease",
            }}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </Box>
        </Box>
      ))}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default ChatWindow;
