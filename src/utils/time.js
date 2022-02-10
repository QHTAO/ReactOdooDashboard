const moment = window.moment;

export const getThisMonthStart = (date) => {
  return date ? moment(date).startOf("month") : moment().startOf("month");
};
export const getThisMonthEnd = (date) => {
  return date ? moment(date).endOf("month") : moment().endOf("month");
};
export const getThisYearStart = (date) => {
  return date ? moment(date).startOf("year") : moment().startOf("year");
};
export const getThisYearEnd = (date) => {
  return date ? moment(date).endOf("year") : moment().endOf("year");
};

// 计算两个时间之前的时间类型
export const getTimeScope = ({ startTime, endTime }) => {
  if (moment(startTime).add(6, "months") > moment(endTime)) {
    return "month";
  } else {
    return "year";
  }
};




// 上一月
export const  getLastMonth = (date) => async (dispatch, getState) => {
  return  moment(date).subtract(1, "months");
};



// // 下一月
// export const nextMonth = (date) => async (dispatch, getState) => {
//   let newStartTime, newEndTime;
//   newStartTime = moment(date).add(1, "months");
//   newEndTime = moment(newStartTime).endOf("month");
//   dispatch({
//     type: actionTypes.NEXTMONTH,
//     payload: { startTime: newStartTime, endTime: newEndTime },
//   });
// };

// // 上一年
// export const lastYear = (date) => async (dispatch, getState) => {
//   let newStartTime, newEndTime;
//   newStartTime = moment(date).subtract(1, "years");
//   newEndTime = moment(newStartTime).endOf("year");
//   dispatch({
//     type: actionTypes.LASTYEAR,
//     payload: { startTime: newStartTime, endTime: newEndTime },
//   });
// };
// // 下一年
// export const nextYear = (date) => async (dispatch, getState) => {
//   let newStartTime, newEndTime;
//   newStartTime = moment(date).add(1, "years");
//   newEndTime = moment(newStartTime).endOf("year");
//   dispatch({
//     type: actionTypes.NEXTYEAR,
//     payload: { startTime: newStartTime, endTime: newEndTime },
//   });
// };





