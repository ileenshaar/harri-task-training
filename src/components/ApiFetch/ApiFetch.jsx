import { useEffect, useState, useRef } from "react";
import "./ApiFetch";

function ApiFetch() {
  let [users, setUsers] = useState([]); //original
  let [search, setSearch] = useState("");
  let [usersCopy, setUsersCopy] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [sortBy, setSortBy] = useState("original");
  //let [visibleCount, setVisibleCount] = useState(0);
  let loadMoreRef = useRef(null);

  /* useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (visibleCount >= users.length) return;
          
          const newCount = visibleCount + 2; // load 2 at a time
          setVisibleCount(newCount);
          console.log(newCount);

          setUsersCopy(users.slice(0, newCount));
        }
        },
        { root: null, rootMargin: "200px", threshold: 0 }
        );
        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
        }, [users, visibleCount]);*/

  useEffect(() => {
    // Set a timeout to update the 'searchFilter' state after 300ms
    const handler = setTimeout(() => {
      setUsersCopy(filtered);
      console.log("filtered", filtered);
    }, 800); // Use 300ms, not 3000ms (3 seconds is too long)

    // Cleanup function: This is crucial! It cancels the previous timeout
    // every time the user types a new character.
    return () => {
      clearTimeout(handler);
    };
  }, [filtered]);

  useEffect(() => {
    let filteredUsers = [...users];
    if (search)
      filteredUsers = users.filter((user) => {
        return Object.values(user).some((val) => {
          if (typeof val === "object" && val !== null) {
            // If it's a nested object (like address), we can join its values into one string:
            return Object.values(val)
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase());
          }

          return String(val).toLowerCase().includes(search.toLowerCase());
        });
      });
    let sorted = filteredUsers;

    if (sortBy !== "original") {
      console.log("sorted");
      sorted = filteredUsers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }
    setFiltered(sorted);
  }, [search, sortBy, users]);

  useEffect(() => {
    async function grapData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        const msg = `an error has occured ${response.status}`;
        throw new Error(msg);
      }

      const users = await response.json();
      const flattenedUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        companyName: user.company.name,
        phone: user.phone,
        website: user.website,
      }));

      setUsers(flattenedUsers);
      //   setUsersCopy(flattenedUsers);
      // setFiltered(flattenedUsers);
      console.log(users);
    }

    grapData().catch((error) => error.msg);
  }, []);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search users"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <label for="sort"> sort by:</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="original">select...</option>
            <option value="name">name</option>
            <option value="city">city</option>
          </select>
        </div>
      </div>
      <h2>USERS</h2>
      {usersCopy.length > 0 && (
        <table>
          <thead>
            {Object.keys(usersCopy[0]).map((key, index) => {
              return <th key={index}>{key}</th>;
            })}
          </thead>
          <tbody>
            {usersCopy.map((user, index) => {
              return (
                <tr key={index}>
                  {Object.values(user).map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                </tr>
              );
            })}
            <tr ref={loadMoreRef}>
              <td colSpan={9999} style={{ height: "2px" }}></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiFetch;
