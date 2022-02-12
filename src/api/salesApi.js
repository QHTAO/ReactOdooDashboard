import faker from "@faker-js/faker";
import { getTimeScope } from "../utils/time";
const moment = window.moment;
// 获取本日销售金额
export const getSalesAmountEpitomeDataOfToday = async () => {
  return {
    amount: faker.random.number({ min: 1000, max: 5000 }),
    profit: faker.random.number({ min: 100, max: 500 }),
  };
};
// 获取本月销售金额
export const getSalesAmountEpitomeDataOfMonth = async () => {
  return {
    amount: faker.random.number({ min: 10000, max: 50000 }),
    profit: faker.random.number({ min: 1000, max: 5000 }),
  };
};
// 获取当前未发货订单
export const getUnshippedOrderQuantityData = async () => {
  return {
    notShipped: faker.random.number({ min: 10, max: 500 }),
    notInvoiced: faker.random.number({ min: 10, max: 50 }),
  };
};
// 获取当前应收账款
export const getAccountsReceivableData = async () => {
  return faker.random.number({ min: 1000, max: 50000 });
};
// 获取本月退货单数
export const getReturnOrderQuantityDataOfThisMonth = async () => {
  return faker.random.number({ min: 10, max: 50 });
};

// 获取销售订单数据
export const getSalesOrderChartData = async ({ endTime, startTime, unit }) => {
  const scope = getTimeScope({ endTime, startTime });
  if (scope === "month") {
    return Array.from({ length: moment().endOf("month").date() }).map(
      (d, index) => {
        return {
          x: moment()
            .date(index + 1)
            .startOf("date")
            .toDate(),
          y: faker.random.number({ min: 100, max: 5000 }),
        };
      }
    );
  }
  if (scope === "year") {
    return Array.from({ length: 12 }).map((d, index) => {
      return {
        x: moment().month(index).startOf("month").toDate(),
        y: faker.random.number({ min: 1000, max: 50000 }),
      };
    });
  }
};
// 获取销售产品数据
export const getSalesProductsChartData = async ({
  endTime,
  startTime,
  unit,
}) => {
  const scope = getTimeScope({ endTime, startTime });
  if (scope === "month") {
    return Array.from({ length: 10 }).map((d, index) => {
      index += 1;
      return {
        x: "产品" + index,
        y: faker.random.number({ min: 100, max: 5000 }),
      };
    });
  }
  if (scope === "year") {
    return Array.from({ length: 10 }).map((d, index) => {
      return {
        x: "产品" + index,
        y: faker.random.number({ min: 1000, max: 50000 }),
      };
    });
  }
};
// 获取销售分类数据
export const getSalesClassificationChartData = async ({
  endTime,
  startTime,
  unit,
}) => {
  const scope = getTimeScope({ endTime, startTime });
  if (scope === "month") {
    return Array.from({ length: 10 }).map((d, index) => {
      index += 1;
      return {
        x: "分类" + index,
        y: faker.random.number({ min: 100, max: 5000 }),
      };
    });
  }
  if (scope === "year") {
    return Array.from({ length: 10 }).map((d, index) => {
      return {
        x: "分类" + index,
        y: faker.random.number({ min: 1000, max: 50000 }),
      };
    });
  }
};
// 获取销售团队数据
export const getSalesTeamChartData = async ({ endTime, startTime }) => {
  const scope = getTimeScope({ endTime, startTime });
  if (scope === "month") {
    return Array.from({ length: 10 }).map((d, index) => {
      index += 1;
      return {
        x: "团队" + index,
        y: faker.random.number({ min: 100, max: 5000 }),
      };
    });
  }
  if (scope === "year") {
    return Array.from({ length: 10 }).map((d, index) => {
      return {
        x: "团队" + index,
        y: faker.random.number({ min: 1000, max: 50000 }),
      };
    });
  }
};
