import { useEffect, useState } from "react";
import "./FetchUsers.css";

function FetchUsers() {
  let [usersOriginal, setUsersOriginal] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  let [sort, setSort] = useState("original");
  let [delayedSearch, setDelayedSearch] = useState("");
  let [searchedSorted, setSearchedSorted] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error(`an error occured: ${response.status}`);
      }

      let data = await response.json();
      let flattedData = data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        company: user.company.name,
        phone: user.phone,
      }));
      setUsersOriginal(flattedData);
    }

    getUsers().catch((error) => error.msg);
  }, []);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDelayedSearch(searchInput);
    }, 800);
    return () => clearTimeout(timerId);
  }, [searchInput]);

  useEffect(() => {
    let filtered = usersOriginal;
    if (delayedSearch) {
      filtered = [...usersOriginal].filter((user) => {
        return Object.values(user).some((val) => {
          if (typeof val === "object" && val !== null) {
            return Object.values(val)
              .join("")
              .toLowerCase()
              .includes(delayedSearch.toLowerCase());
          } else
            return String(val)
              .toLowerCase()
              .includes(delayedSearch.toLowerCase());
        });
      });
    }
    let sorted = filtered;
    if (sort !== "original") {
      sorted = [...filtered].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    setSearchedSorted(sorted);
  }, [delayedSearch, sort, usersOriginal]);

  if (usersOriginal.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
        <option value="original">sort By...</option>
        <option value="name">name</option>
        <option value="city">city</option>
      </select>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {Object.keys(usersOriginal[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {searchedSorted?.map((user, index) => {
              return (
                <tr key={index}>
                  {Object.values(user).map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FetchUsers;
