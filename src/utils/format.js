const d3 = window.d3;
export const money = (data) => {
  return d3.format(",.0f")(data);
};
