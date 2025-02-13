// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// another way -> promise way to handle asyncHandler function

const asyncHandler = (requestHandler) => {
  return function (req, res, next) {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export default asyncHandler;
