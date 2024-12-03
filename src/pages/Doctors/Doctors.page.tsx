import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDoctors } from "../../redux/slices";
import { CircularProgress, Grid, Typography } from "@mui/material";
import StaffCard from "../../components/StaffCard/StaffCard";
import { Doctor } from "../../api/types";

const DoctorsPage = () => {
  const dispatch = useAppDispatch();
  const doctors = useAppSelector((state) => state.doctors.list);
  const isLoading = useAppSelector((state) => state.doctors.isProcessing);

  useEffect(() => {
    // Получение пользователей при монтировании компонента
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      margin="10px"
      sx={{ display: "flex", alignItems: "center" }}
    >
      {isLoading ? (
        <Grid
          container
          margin="10px"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Grid>
      ) : doctors?.length ? (
        <>
          <Grid item>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {doctors?.map((doctor) => (
                <Grid item key={doctor.id}>
                  <StaffCard staff={doctor as Doctor} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          No users found.
        </Typography>
      )}
    </Grid>
  );
};

export default DoctorsPage;

