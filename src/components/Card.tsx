type CardType = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardType) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl w-60 h-44 flex flex-col items-center ">
      <h2 className="pt-20 text-center" style={{ padding: 25}}>{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}
