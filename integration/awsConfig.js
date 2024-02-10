// the following vars are needed to POST to the SQS service in AWS.
export const headers = {
  "content-type": "application/x-www-form-urlencoded",
};

export default headers;

export const apiEndpoint = () => {
  if (
    window.location.href.indexOf("revhealthstaging") > -1 ||
    window.location.hostname === "localhost"
  ) {
    // staging or local
    return "https://sqs.us-east-1.amazonaws.com/758437162848/SterileVialSolutions";
  }

  // prod
  // This endpont is hosted by Expentor
  return "https://sqs.us-east-1.amazonaws.com/058165220580/SterileVialSolutions";
};
