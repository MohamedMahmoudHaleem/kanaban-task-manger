function Card({ item }) {
  return (
    <div className="card m-2">
      <h2 className="font-bold">Number : {item.id}</h2>
      <p className="text-neutral-light-darkGrayishBlue ">{item.todo}</p>
    </div>
  );
}

export default Card;
