import { Minus, Plus } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import { getEventsById } from "../lib/events";
import { Button } from "./button";

const SingleEvent = () => {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();

  const params = id.split("-");

  const result = getEventsById(params[0], params[1]);

  return (
    <div className="bg-[#1a1b2e] min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img
            src="/images/_DSC7782.jpg"
            className="h-[500px] w-[500px] object-cover mx-auto "
          />
          <div className="text-white space-y-6 mt-10">
            <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
              {result.eventName}
            </h1>
            <h1 className="text-4xl">${result.basePrice}.00</h1>
            <div className="border-b-2 border-white/20 pb-2">
              <Description data={result} />
            </div>

            <div>
              <div className="flex items-center gap-2 bg-pink-400/20 rounded-lg p-2 w-fit">
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-400/30"
                  onClick={() => setQuantity((prev) => prev - 1)}
                  disabled={quantity === 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-400/30"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  disabled={quantity === 20}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Button>Pay With Paypal</Button>
              <Button variant="outline">Pay With Stripe</Button>
            </div>
          </div>
        </div>

        <div className="text-white mt-20">
          <Description data={result} />
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;

const Description = ({ data }) => {
  return (
    <ul className="pl-3">
      <li className="list-disc">
        {data.date} - {data.time}
      </li>
      <li className="list-disc">{data.venue}</li>
      <li className="list-disc">{data.eventDescription}</li>
    </ul>
  );
};
