export default function asyncWrapper(callback) {
  return async function (...params) {
    try {
      const res = await callback(...params);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
}