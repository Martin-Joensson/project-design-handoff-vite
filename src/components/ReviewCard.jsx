export const ReviewCard = ({ review }) => {
  return (
    <div className="border-2 border-dashed border-black m-4 px-2 py-6 my-8">
      <p className="italic text-center text-sm">{review.review}</p>
    </div>
  );
};
