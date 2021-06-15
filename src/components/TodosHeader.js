function TodosHeader() {
  const date = new Date();
  const day = date.getDate();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

// Ordinal rules
  const Rules = new Intl.PluralRules("en", { type: "ordinal" });
  const RulesMap = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  const enOrdinalSuffix = RulesMap[Rules.select(day)];

 

  return (
    <header
      className={`${(date.getHours())} `}
    >
      <h1 style={{color:'#fff'}}>
        {`${weekDay}, ${day} ${enOrdinalSuffix}`}
      </h1>
      <h2 style={{color:'#fff'}}>
        {month}
      </h2>
    </header>
  );
}

export default TodosHeader;
