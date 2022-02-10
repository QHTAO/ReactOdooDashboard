const moment = window.moment;

export const getMonthStart = (date) => {
  return date ? moment(date).startOf("month") : moment().startOf("month");
};
export const getMonthEnd = (date) => {
  return date ? moment(date).endOf("month") : moment().endOf("month");
};
export const getYearStart = (date) => {
  return date ? moment(date).startOf("year") : moment().startOf("year");
};
export const getYearEnd = (date) => {
  return date ? moment(date).endOf("year") : moment().endOf("year");
};


// 格式化时间
export const getYearAndMonth= (date) => {
  return date ? moment(date).format("YYYY-MM") : moment().format("YYYY-MM");
};
export const getYear= (date) => {
  return date ? moment(date).format("YYYY") : moment().format("YYYY");
};

// 计算两个时间之前的时间类型
export const getTimeScope = ({ startTime, endTime }) => {
  if (moment(startTime).add(6, "months") > moment(endTime)) {
    return "month";
  } else {
    return "year";
  }
};

//  切换月份
export const getLastMonth = (date) => {
  return moment(date).subtract(1, "months");
};
export const getNextMonth = (date) => {
  return moment(date).add(1, "months");
};

//切换年份
export const getLastYear = (date) => {
  return moment(date).subtract(1, "years");
};
export const getNextYear = (date) => {
  return moment(date).add(1, "years");
};

