import { useState, useMemo, useEffect } from "react";

import Card from "../UI/Card/Card";
import DishListItem from "./DishListItem/DishListItem";
import styles from "./DishList.module.css";

import useHttp from "../../hooks/use-http";

const DishList = () => {
  const [dishes, setDishes] = useState([]);
  const apiUrl = useMemo(() => {
    return "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/menu.json";
  }, []);
  const { isLoading, error, applyRequest: fetchDishes } = useHttp(apiUrl);

  useEffect(() => {
    fetchDishes({ method: "GET" }).then((data) => setDishes(data));
  }, [fetchDishes]);

  const dishListElements = dishes.map((dish) => {
    return <DishListItem key={dish.id} dish={dish} />;
  });
  return (
    <Card className={styles["dish-list-container"]}>
      {!error && !isLoading && (
        <ul className={styles["dish-list"]}>{dishListElements}</ul>
      )}
      {!error && isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
    </Card>
  );
};

export default DishList;
