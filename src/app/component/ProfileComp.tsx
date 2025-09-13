import { Box, Chip, Avatar, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";

export function ProfileChip() {
  return (
    <>
      <Box className="flex items-center justify-center mt-2 gap-1">
        <Chip
          label={
            <Box>
              <FontAwesomeIcon icon={faMedium} />
              Medium
            </Box>
          }
          sx={{ color: "white" }}
          component="a"
          href="https://medium.com/@kun034"
          variant="outlined"
          clickable
        />

        <Chip
          label={
            <Box component={"span"} className="flex items-center gap-1">
              <img
                width={15}
                src="https://cdn-icons-png.flaticon.com/512/732/732223.png"
                alt=""
              />
              Outlook
            </Box>
          }
          sx={{ color: "white" }}
          component="a"
          href="mailto:chwork28@hotmail.com"
          variant="outlined"
          clickable
        />
        <Chip
          label={
            <Box component={"span"} className="flex items-center ">
              <img
                width={25}
                src="https://www.vikingcamps.com/wp-content/uploads/2024/01/linkedin-logo-linkedin-icon-transparent-free-png.webp"
                alt=""
              />
              LinkedIn
            </Box>
          }
          sx={{ color: "white" }}
          component="a"
          href="https://www.linkedin.com/in/chaiyut-thavon-kun/"
          variant="outlined"
          clickable
        />
      </Box>
    </>
  );
}

export function AvatarProfile() {
  return (
    <Avatar
      alt="Chaiyut github"
      src="https://avatars.githubusercontent.com/u/135094423?v=4"
      sx={{ width: 200, height: 200, mx: "auto", mt: 6 }}
    ></Avatar>
  );
}

export function GithubDescription() {
  return (
    <>
      <Box className="text-center mt-1">
        <Button component="a" href="https://github.com/chaiyut-kun">
          <Typography variant="h6" className="mt-2 text-gray-200 lowercase">
            <GitHubIcon fontSize="medium" className="me-1 mb-1" />
            Chaiyut-Kun
          </Typography>
        </Button>
      </Box>
      <Typography
        className="text-center mt-2 text-gray-400"
        sx={{ fontSize: 12 }}
      >
        Junior Developer at
        Khonkaen university
      </Typography>
    </>
  );
}
