module.exports = function(event) {
  return (
    event &&
    event.Records &&
    event.Records[0] &&
    event.Records[0].eventSource === "aws:sqs" &&
    event.Records[0].messageId &&
    event.Records[0].receiptHandle &&
    event.Records[0].body &&
    event.Records[0].attributes &&
    event.Records[0].messageAttributes &&
    event.Records[0].md5OfBody &&
    event.Records[0].eventSourceARN &&
    event.Records[0].awsRegion &&
    event.Records[0].attributes.ApproximateReceiveCount &&
    event.Records[0].attributes.SentTimestamp &&
    event.Records[0].attributes.SenderId &&
    event.Records[0].attributes.ApproximateFirstReceiveTimestamp
  );
};
