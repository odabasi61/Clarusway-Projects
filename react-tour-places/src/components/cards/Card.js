import CardStyle from "./Card.module.css";

const Card = ({ id, title, desc, image }) => {
  return (
    <div className={CardStyle.card}>
      <h2>{title}</h2>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className={CardStyle.description}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
