function Card({ title, description }) {
  return (
    <div className="card">
      <h2 className="font-bold">{title}</h2>
      <p className="text-neutral-light-darkGrayishBlue ">{description}</p>
    </div>
  );
}

export default Card;
