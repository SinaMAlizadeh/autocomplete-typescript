import axios from 'axios';
import Api from '../route';
export const getIpInformation = async () => {
  const {data}: {data: IIpInformation} = await axios.get(Api.IP_BASE_URL);
  return data;
};
