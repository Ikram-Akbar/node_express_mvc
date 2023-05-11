

let totalApiCall = 0;
const viewCount = (req, res, next) => {
    totalApiCall++;
    console.log(totalApiCall);
    next();
};

module.exports = viewCount;