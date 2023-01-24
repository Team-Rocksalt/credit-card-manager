import { forwardRef, useImperativeHandle, useState } from "react";
import { getMockedCreditCardData } from "../../mockCreditCardData";
import { CreditCard } from "../../types";
import Card from "./Card";

export type SaveCreditCardFormHandle = {
  saveNewCard: (card: CreditCard) => void;
};

interface Props {}

const ListCards = forwardRef<SaveCreditCardFormHandle, Props>(
  (_, forwardedRef) => {
    const [saveCards, setSavedCards] = useState<CreditCard[]>(getMockedCreditCardData());

    const saveNewCard = (card: CreditCard) => {
      setSavedCards([card, ...saveCards]);
    };

    // TODO: implementation of actual deletion of card
    const deleteCard=()=>{

    }

    useImperativeHandle(forwardedRef, () => ({
      saveNewCard,
    }));

    if (saveCards.length < 1) {
      return <div>You have no saved card , please add one</div>;
    }

    return (
      <div className={"list"}>
        {saveCards.map((card) => {
          return (
            <Card
              key={card.cardIdentifier}
              card={card}
            />
          );
        })}
      </div>
    );
  }
);
export default ListCards;
