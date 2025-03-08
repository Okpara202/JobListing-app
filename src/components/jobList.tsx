import { useState } from "react";
import jobData from "../database/data.json";
import JobCards from "./jobCards";

function JobList() {
  const [search, setSearch] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const filteredJobs = jobData.jobs.filter((jobs) => {
    // searches for specific job by title
    const matchSearch =
      !search || jobs.title.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  // Create cards for each job listing
  const jobs = filteredJobs.map((jobListings) => (
    <JobCards key={jobListings.id} job={jobListings} />
  ));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    // Handles email subscription to news letter
    e.preventDefault();
    alert(`${email} successfully subscribed`);
  };

  return (
    <>
      <header id="header">
        <aside>
          <h1 className="logo">🚀 </h1>
          <h1>
            Dream <br /> Jobs
          </h1>
        </aside>
        <nav>
          <ul>
            <li>
              <a href="#main">About</a>
            </li>
            <li>
              <a href="#job">Jobs</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section>
          <div className="container">
            <h1>Find Your Dream Job in Tech</h1>
            <p>
              We help you find exciting opportunities all around the world. Have
              the best openings at your fingertips in your home
            </p>

            <div>
              <form onSubmit={submit}>
                {/* Newsletter email */}
                <input
                  required
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <section id="job">
          <div className="container">
            <aside className="job-title">
              <h2>Newest Openings</h2>
              <div>
                {/*for searching by role title */}
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by job role"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </aside>

            {filteredJobs.length > 0 ? (
              <aside>{jobs}</aside>
            ) : (
              <div className="zero-job">
                <h1>
                  Sorry!!! <br />
                  No {search} jobs available at the moment
                </h1>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <h3>Favour Okpara</h3>
          <p>&copy; 2025. All Rights Reserved</p>{" "}
        </div>
      </footer>
    </>
  );
}

export default JobList;
