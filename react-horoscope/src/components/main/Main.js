import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {/* birden fazla satır yazacağımız için hem süslü içine aldık hem return ettik. tek satır olsaydı normal paranteze alır ve return yazmazdık.
        // spread operatörü ile tüm bilgileri yollarız */}
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
