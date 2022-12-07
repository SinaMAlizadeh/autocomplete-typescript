// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {filterCountry} from '../../helper/search';
import {getAllCountry} from '../../sevices/country';
import {getIpInformation} from '../../sevices/getIp';
import {ICountry} from '../../types/country';
const fsp = require('fs').promises;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ICountry>>,
) {
  const {
    query: {search},
  } = req;
  if (!search) res.status(200).json([]);
  let [country_data, ipInfo] = await Promise.all([
    getAllCountry(),
    getIpInformation(),
  ]);

  if (search)
    country_data = filterCountry(country_data, search.toString(), ipInfo);

  res.status(200).json(country_data);
}
