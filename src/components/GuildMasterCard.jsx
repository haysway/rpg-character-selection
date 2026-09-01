import Card from "./Card"

function GuildMasterCard(props) {
    return (
      <Card>
        <h2>{props.title}</h2>
        <p>Specialty: {props.specialty}</p>
      </Card>
    );
}

export default GuildMasterCard;