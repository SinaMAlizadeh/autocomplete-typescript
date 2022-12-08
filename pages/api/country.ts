// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {filterCountry} from '../../helper/search';
import {getAllCountry} from '../../sevices/country';
import {ICountry} from '../../types/country';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ICountry>>,
) {
  const {
    query: {search, lat, lng},
  } = req;
  if (!search) res.status(200).json([]);
  let country_data = await getAllCountry();

  if (search)
    country_data = filterCountry(
      country_data,
      search.toString(),
      Number(lat?.toString()),
      Number(lng?.toString()),
    );

  res.status(200).json(country_data);
}
