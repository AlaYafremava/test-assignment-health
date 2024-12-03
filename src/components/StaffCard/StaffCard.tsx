import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MedicalStaff, Doctor } from "../../api/types";
import { Avatar, CardHeader } from "@mui/material";
import { stringAvatar } from "../../utils/utils";

interface StaffCardProps {
  staff: MedicalStaff | Doctor;
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar {...stringAvatar(staff?.name)} />
        }
        title={staff?.name}
        subheader={staff?.email}
      />
      <CardContent>
      
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            WebkitLineClamp: "1",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {/* {staff?.company.name} */} 11111
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            WebkitLineClamp: "2",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {staff?.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
