import faker from "@faker-js/faker";
const moment = window.moment;
export const getSalesOrderChartDataOfMonth = async (unit) => {
  return Array.from({ length: moment().endOf("month").date() }).map(
    (d, index) => {
      return {
        date: moment().startOf("day").toDate(),
        [unit]: faker.random.number({ min: 1000, max: 50000 }),
      };
    }
  );
};
