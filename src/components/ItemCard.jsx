import Card from "./Card"

function ItemCard(props) {
    return (
      <Card>
        <h2>{props.title}</h2>
        <p>Item type: {props.type}</p>
        <p>Damage: {props.damage}</p>
      </Card>
    );
}

export default ItemCard;