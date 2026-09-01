import CharacterStats from "./CharacterStats"

function CharacterCard(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Description: {props.desc}</p>
        <CharacterStats exp={props.exp}/>
      </div>
    );
}

export default CharacterCard;