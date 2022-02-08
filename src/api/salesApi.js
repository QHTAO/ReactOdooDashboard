import faker from "@faker-js/faker";
const moment = window.moment;
export const getSalesOrderChartDataOfMonth = async (unit) => {
  return Array.from({ length: 28 }).map((d, index) => {
    let date = new Date();
    date.setDate(index + 1);
    date.setHours(0, 0, 0, 0);
    return {
      date: moment().startOf("day").toDate(),
      [unit]: faker.random.number({ min: 100, max: 50000 }),
    };
  });
};


