import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        alt="Nothing Found"
        height={210}
        width={210}
      />

      <h2 className="text-2xl font-semibold mt-6">No Favorites🫠! </h2>
    </div>
  );
};
