import devTechs from "../../../../../mockList/devTechs.json";

const ModalTechs = ({register}) => {
  return (
    <>
      {devTechs.map((el) => {
        return (
          <div key={el.tech}>
            <label htmlFor={el.tech} className="container">
              <input
                type="checkbox"
                id={el.tech}
                {...register(`tech.${el.tech}`)}
              />
              <span className={`checkmark tech-${el.tech}`}></span>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default ModalTechs;
