import CardImage from "./CardImage";
import deleteIcon from "../../assets/delete.svg";
import IconButton from "../Buttons/IconButton/IconButton";
import { CreditCard } from "../../types";
import "./Card.css";
interface Props {
  card: CreditCard;
}

const Card: React.FC<Props> = ({
  card: { cardIdentifier, lastFour, accountHolder, expiryDate, cardBrand },
}) => {
  return (
    <div className="card-container" key={cardIdentifier}>
      <div className="flex-container">
        <CardImage cardBrand={cardBrand} />
        <IconButton>
          <img className="delete-icon" src={deleteIcon} />
        </IconButton>
      </div>
      <span>{accountHolder}</span>
      <div className="flex-container">
        <span>
          <span className="masked-number">
            &#183;&#183;&#183;&#183; &#183;&#183;&#183;&#183;
            &#183;&#183;&#183;&#183;
          </span>
          &nbsp;
          {lastFour}
        </span>
      </div>
      <span>{expiryDate}</span>
    </div>
  );
};
export default Card;
