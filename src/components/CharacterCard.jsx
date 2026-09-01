function CharacterCard(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Description: {props.desc}</p>
        <p>Experience: {props.exp}</p>
        <p>Level: {props.exp / 100}</p>
      </div>
    );
}

export default CharacterCard;