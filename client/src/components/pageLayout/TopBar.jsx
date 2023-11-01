import { Typography, Link, Toolbar, AppBar, Button } from "@mui/material";

export const Topbar = () => {
  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
          </nav>
          <Button href="/auth/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
