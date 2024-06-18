import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

export default function ReUsableCard({ profile, course, experience }) {
  return (
    <Card sx={{ margin: "10px" }}>
      <CardHeader
        avatar={<Avatar alt="Travis Howard" src={profile} />}
        title={course}
        subheader={experience}
      />
    </Card>
  );
}
