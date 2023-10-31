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
            <li>{elem.isUnseen ? "Inédit" : null} </li>
            <li>{elem.direct ? "Direct" : null}</li>
          </div>
        </div>
      </section>
    );
  });
};
export default Section;
