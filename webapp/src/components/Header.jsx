import * as React from "react";
import logo from "../assets/logo-catapiri-sem-texto.png";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuIcon,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// lista as páginas e referências a serem exibidas no menu
const pages = [
  {
    page: "O projeto",
    href: "/projeto",
  },
  {
    page: "O problema do lixo",
    href: "/artigo",
  },
  {
    page: "Como separar",
    href: "/instrucoes",
  },
  {
    page: "Coleta em Pirenópolis",
    href: "/coleta",
  },
  {
    page: "Notícias",
    href: "/noticias",
  },
  {
    page: "Eventos",
    href: "/eventos",
  },
];

// função que retorna o menu
function Header() {
  // estado para controlar o menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // função para abrir o menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // função para fechar o menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // retorna os elementos gráficos do menu
  return (
    <AppBar
      component="nav"
      position="sticky"
      color="transparent"
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ page, href }) => (
                <MenuItem
                  key={page}
                  to={href}
                  component={RouterLink}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <a href="/">
            <img src={logo} alt="logo" height="100" />
          </a>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map(({ page, href }) => (
              <Button
                key={page}
                color="primary"
                to={href}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                sx={{
                  margin: "5px ",
                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { Header };
