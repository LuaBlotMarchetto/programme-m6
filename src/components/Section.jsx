import data from "../assets/data.json";

const Section = () => {
  return data.map((elem) => {
    return (
      <section>
        <h4>{elem.time}</h4>
        <img src={elem.image} alt="" />
        <div>
          <h2>{elem.title}</h2>
          <p>{elem.type}</p>
          <div>
            <h4>{elem.duration}</h4>
            {elem.isUnseen ? <li>Inédit </li> : null}
            {elem.direct ? <li>Direct </li> : null}
          </div>
        </div>
      </section>
    );
  });
};
export default Section;
