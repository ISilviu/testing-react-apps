export default function sum(...values) {
  return values
    .filter(Boolean)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
