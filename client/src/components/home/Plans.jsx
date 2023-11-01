import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Typography,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";

export const Plans = () => {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {tier.unit && `/${tier.unit}`}
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} href={tier.href}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Plans;

const tiers = [
  {
    title: "Free",
    subheader: "Coming Soon",
    price: "0",
    description: [
      "only gmail support",
      "50 accounts for free",
      "bla bla bla",
      "bla bla bla",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    work: false,
  },
  {
    title: "Once",
    subheader: "Most popular",
    price: "2",
    description: ["50 accounts", "bla bla bla", "bla bla bla", "bla bla bla"],
    unit: "once",
    buttonText: "Get started",
    buttonVariant: "contained",
    href: "/checkout",
    work: true,
  },
  {
    title: "Monthly",
    subheader: "Coming Soon",
    price: "50",
    description: [
      "everyday 40 users",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
    ],
    unit: "month",
    buttonText: "Go to my page",
    buttonVariant: "outlined",
    work: false,
  },
];
