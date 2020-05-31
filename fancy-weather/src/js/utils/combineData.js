export default (data, vars) => {
  const newData = data;
  newData.lang = vars.lang;
  newData.units = vars.units;
  return newData;
};
