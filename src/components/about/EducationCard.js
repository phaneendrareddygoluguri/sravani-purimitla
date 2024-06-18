import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function EducationCard({
  image,
  institute,
  city,
  course,
  duration,
}) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 100 }} image={image} alt="Logo" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {institute}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {city}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {`${course},${duration}`}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
