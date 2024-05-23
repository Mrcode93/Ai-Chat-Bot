// TopicSelector.jsx
import React from "react";
import { Box, Button } from "@mui/material";

const topics = ["General", "Technology", "Health", "Education"];

const TopicSelector = ({ onSelectTopic }) => {
  return (
    <Box className="topic-selector">
      {" "}
      {topics.map((topic) => (
        <Button
          key={topic}
          onClick={() => onSelectTopic(topic)}
          className="topic"
          variant="outlined"
          sx={{ mr: 1, mb: 1 }}
        >
          {topic}{" "}
        </Button>
      ))}{" "}
    </Box>
  );
};

export default TopicSelector;
