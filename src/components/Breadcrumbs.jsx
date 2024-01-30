/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const breadcrumbNameMap = {
  "/": "Главная",
  "/tshirts": "Футболки",
  "/designer-clothing": "Дизайнерская одежда",
};

const generateBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const breadcrumbName = breadcrumbNameMap[routeTo];

    if (index === pathnames.length - 1) {
      // Проверяем, является ли последний сегмент числом
      const id = parseInt(name, 10);
      const isNumber = !isNaN(id);

      return (
        <Typography key={index} color="textPrimary">
          {breadcrumbName} {isNumber ? id : ""}
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

export const BreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography component={Link} to="/" color="inherit">
        Главная
      </Typography>
      {generateBreadcrumbs()}
    </Breadcrumbs>
  );
};
