import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import { EPages } from "./router";
import { NavigationButton } from "./components/Navigation/NavigationButton";

const NAV_WIDTH = 250;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === EPages.Home) navigate(EPages.Doctors);
  }, [location.pathname, navigate]);

  const navigationButtons = useMemo<NavigationButton[]>(
    () => [
      {
        text: "Doctors",
        path: EPages.Doctors,
        active: location.pathname.includes(EPages.Doctors),
        onClick: () => navigate(EPages.Doctors),
      },
      {
        text: "Nurses",
        path: EPages.Nurses,
        active: location.pathname.includes(EPages.Nurses),
        onClick: () => navigate(EPages.Nurses),
      },
    ],
    [location.pathname, navigate]
  );

  return (
    <>
      <Navigation navigationButtons={navigationButtons} width={NAV_WIDTH} />
      <Box width={`calc(100% - ${NAV_WIDTH}px)`} sx={{display: 'flex', alignItems: 'center'}}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
