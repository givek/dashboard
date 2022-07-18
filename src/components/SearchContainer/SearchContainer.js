import "./styles.css";
import React from "react";
import { CompanyItem } from "../CompanyItem";

export function SearchContainer(props) {
  const [companies, setCompanies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      const data = await fetch(
        `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${props.search}`
      ).then((res) => res.json());

      console.log("compines", data);
      setCompanies(data);

      setLoading(false);
    }

    fetchData();
  }, [props.search]);

  if (loading) {
    return <div className="search-section loading-container">Loading...</div>;
  }

  if (Array.isArray(companies) && companies.length === 0) {
    return (
      <div className="search-section loading-container">No Results Found.</div>
    );
  }

  return (
    <div className="search-section">
      <h1 className="search-section-header">Similar accounts</h1>
      <div className="search-result-container">
        {companies.map((company) => (
          // <div style={{ background: company.color }}>{company.company}</div>
          <CompanyItem
            key={company.website}
            backgroundColor={company.color}
            companyName={company.company}
            companyUrl={company.website}
          />
        ))}
      </div>
    </div>
  );
}
