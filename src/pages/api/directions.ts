// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new Client({});

  client
    .directions({
      params: {
        origin: "Minneapolis, MN",
        destination: "Saint Paul, MN",

        key: "AIzaSyCywYfP-J0XSJ2yY0geEuhPgr7dpWbWRgs",
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      console.log(e);
    });
  res.status(200).json({ name: "John Doe" });
}
