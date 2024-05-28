/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const breadcrumbNameMap = {
  "/": "Главная",
  "/tshirts": "Футболки",
  "/tshirts/create": "Создание футболки",
  "/designer-clothes": "Дизайнерская одежда",
  "/basket": "Корзина",
  "/profile": "Профиль",
};

const generateBreadcrumbs = ({ item }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const breadcrumbName = breadcrumbNameMap[routeTo];

    if (index === pathnames.length - 1) {
      let itemName = "";
      if (item) {
        itemName = item[0].name;
      }

      return (
        <Typography key={index} color="textPrimary">
          {breadcrumbName}
          {itemName}
        </Typography>
      );
    }

    return (
      <Typography key={index} component={Link} to={routeTo} color="inherit">
        {breadcrumbName}
      </Typography>
    );
  });
};

export const BreadCrumbs = ({ item }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography component={Link} to="/" color="inherit">
        Главная
      </Typography>
      {generateBreadcrumbs({ item })}
    </Breadcrumbs>
  );
};
