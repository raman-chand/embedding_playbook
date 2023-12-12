import axios from "axios"
import config from "./config";

const public_url = process.env.NEXT_PUBLIC_API_BASE_URL;
const { domain, api, site, pat_name, pat_secret } = config.pulse;

export const getSubscriptions = async (apiKey, userId, pageSize) => {
  try {
    // console.log(`AUTH ATTEMPT: ${key}`, value);
    const res = await axios.get(`${public_url}/api/-/subscriptionservice/subscriptions`, {
      params: {
        user_id: userId,
        page_size: pageSize ? pageSize : 50,
      },
      headers: {
        "X-Tableau-Auth": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });

    if (res.status === 200){
      console.log('getSubscriptions:', res);
      const data = res.data;
      return data.subscriptions;
    } else {
      throw new Error('ERROR: Cannot obtain subscriptions!');
    }
  } catch (err) {
    console.debug(err);
    return null;
  }
}

export const getMetricDefinitions = async (apiKey) => {
  // TODO: scopes and core metrics
}

export const getInsights = async (apiKey) => {
  try {
    // console.log(`AUTH ATTEMPT: ${key}`, value);
    const res = await axios.get(`${domain}/api/-/subscriptionservice/subscriptions`, {
      params: {
        user_id: userId,
        page_size: pageSize ? pageSize : 50,
      },
      headers: {
        "X-Tableau-Auth": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });

    if (res.status === 200){
      console.log('getSubscriptions:', res);
      const data = res.data;
      return data.subscriptions;
    } else {
      throw new Error('ERROR: Cannot obtain subscriptions!');
    }
  } catch (err) {
    console.debug(err);
    return null;
  }
}

