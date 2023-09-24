// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";
import { query } from "firebase/firestore";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new Client({});
  const q = req.query;
  let response = await client
    .directions({
      params: {
        origin: q.origin,
        destination: q.destination,
        travel_mode: "transit",
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
      console.log("Data", JSON.stringify(r.data, null, 2));
      return r.data;
    })
    .catch((e) => {
      console.log("Catch", e);
    });
  res.status(200).json(response);
}
