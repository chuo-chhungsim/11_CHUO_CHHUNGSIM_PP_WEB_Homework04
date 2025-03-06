import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
const CardComponent = ({ cardProps }) => {
  const [dateCount, setDateCount] = useState();
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(cardProps.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    // setDateCount(today.toDateString - dueDate.toDateString);
    const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    setDateCount(diffDays);
  }, []);
  //format date mar,1,2000
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-sm max-h-72 p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex justify-between mb-5">
        {/* date */}
        <p
          className={
            cardProps.progress == 100
              ? `text-custom-sky-blue font-bold`
              : cardProps.progress == 75
              ? `text-custom-yellow-500  font-bold`
              : cardProps.progress == 50
              ? `text-custom-carrot font-bold`
              : cardProps.progress == 25
              ? `text-custom-pink font-bold`
              : ""
          }
        >
          {formatDate(cardProps.dueDate)}
        </p>
        <EllipsisVertical size={20} color="#374957" />
      </div>

      <h5 className="line-clamp-1 capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {cardProps.name}
      </h5>
      <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
        {cardProps.description
          ? cardProps.description
          : `lorem ipsum dolor sit amet, consectetur adip non pro`}
      </p>

      {/* progress bar */}
      <div className="w-full flex justify-between font-medium mb-1">
        <p>Progress</p>
        <p>{cardProps.progress}%</p>
      </div>
      <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={
            cardProps.progress == 100
              ? `bg-custom-sky-blue h-2.5 rounded-full`
              : cardProps.progress == 75
              ? `bg-custom-yellow-500 h-2.5 rounded-full w-[75%]`
              : cardProps.progress == 50
              ? `bg-custom-carrot h-2.5 rounded-full w-[50%]`
              : cardProps.progress == 25
              ? `bg-custom-pink h-2.5 rounded-full w-[25%]`
              : ""
          }
        ></div>

        {/* <div
            className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
            title="25%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
            title="50%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
            title="75%"
          ></div> */}
      </div>

      {/* deadline */}
      <div className="flex justify-end">
        <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-sm text-center">
          {dateCount} days left.
        </p>
      </div>
    </div>
  );
};
export default CardComponent;
