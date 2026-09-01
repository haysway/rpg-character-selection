function CharacterStats(props) {

    const exp = props.exp;
    const level = exp / 100;

    return(
        <div>
            <p>Experience: {exp}</p>
            <p>Level: {level}</p>
        </div>
    );
}

export default CharacterStats;