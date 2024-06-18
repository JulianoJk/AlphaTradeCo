import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import useModeTheme from "../../../../hooks/useModeTheme";

interface PaperItem {
  id: number;
  content: React.ReactNode;
}

export default function SimpleCollapse() {
  const [hoveredPaper, setHoveredPaper] = React.useState<number | null>(null);
  const hintColor = useModeTheme("white", "black");
  const papers: PaperItem[] = [
    {
      id: 1,
      content: (
        <Paper
          sx={{
            m: 1,
            width: 300,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={4}
        >
          Book a meeting
        </Paper>
      ),
    },
    {
      id: 2,
      content: (
        <Paper
          sx={{
            m: 1,
            width: 300,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={4}
        >
          Get a quote
        </Paper>
      ),
    },
  ];

  const handleMouseEnter = (id: number) => {
    setHoveredPaper(id);
  };

  const handleMouseLeave = () => {
    setHoveredPaper(null);
  };

  return (
    <Box
      sx={{
        height: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          color: hintColor,
        }}
      >
        Best experienced on desktop (PC, Laptop). Hover over the elements to
        expand.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {papers.map((item, index) => (
          <React.Fragment key={item.id}>
            {index > 0 && <Box sx={{ width: 20 }} />}
            <div
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Fade in={hoveredPaper === null || hoveredPaper === item.id}>
                <Box
                  sx={{
                    overflow: "hidden",
                    boxShadow:
                      hoveredPaper !== item.id
                        ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                        : "none",
                    borderRadius: 1,
                  }}
                >
                  <Collapse
                    in={hoveredPaper === item.id}
                    collapsedSize={160}
                    orientation="horizontal"
                    sx={{
                      transformOrigin: index === 0 ? "left" : "right",
                      display: "flex",
                      justifyContent: index === 0 ? "flex-start" : "flex-end",
                    }}
                  >
                    {item.content}
                  </Collapse>
                </Box>
              </Fade>
            </div>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
