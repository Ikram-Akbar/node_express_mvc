module.exports.allTools = (req, res, next) => {
  const {baseUrl,ip,route} = req;
  console.log(baseUrl,ip,route);
  res.send("tools found from controller");
};
module.exports.sendTools = (req, res) => {
  res.send("send a tool");
};

/**
 * req.app
req.baseUrl
req.body
req.cookies
req.fresh
req.host
req.hostname
req.ip
req.ips
req.method
req.originalUrl
req.params
req.path
req.protocol
req.query
req.route
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr
 */
