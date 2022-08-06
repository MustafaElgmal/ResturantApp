export const getOrderNo = (orderNo: string) => {
  return {
    type: "GETOREDERNO",
    payload: orderNo,
  };
};
