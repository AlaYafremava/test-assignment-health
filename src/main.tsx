import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Box, CircularProgress, CssBaseline, SxProps } from "@mui/material";
import { router } from "./router/router.tsx";
import { store } from "./redux/store.ts";

const boxSx: SxProps = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "28px",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* INFO: ResetCSS от mui */}
    <CssBaseline />

    <Provider store={store}>
      <Suspense
        fallback={
          <Box sx={boxSx}>
            <CircularProgress />
          </Box>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
