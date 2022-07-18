import "./styles.css";

export function CompanyItem(props) {
  const colorWords = props.backgroundColor.split("-");
  const backgroundColor = colorWords.pop();

  console.log(backgroundColor);
  const color = backgroundColor === "white" ? "black" : "white";
  return (
    <div className="company-container">
      <div
        className="company-logo"
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
        }}
      >
        {props.companyName.charAt(0)}
      </div>
      <div className="company-info-container">
        {/* <h2 className="company-name">Harrow Inc.</h2> */}
        <h2 className="company-name">{props.companyName}</h2>
        {/* <p className="company-url">www.harrow.com</p> */}
        <p className="company-url">{props.companyUrl}</p>
      </div>
      <div className="track-container">Track</div>
    </div>
  );
}
