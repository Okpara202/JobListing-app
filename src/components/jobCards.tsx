import { useState } from "react";

type Props = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  notes: string[];
};

function JobCards({ job }: { job: Props }) {
  const [show, setShow] = useState<boolean>(false);

  function toggleShow() {
    setShow((prevState) => !prevState);
  }

  return (
    <div className="card">
      <div className={`card-header card-header${job.id}`}>
        <p className="company">{job.company}</p>
        <h1>{job.title}</h1>
        {job.notes.map((note) => (
          <button className="card-header-btn" key={note}>
            {note}
          </button>
        ))}
      </div>
      <section className="card-info">
        <aside>
          <div className="card-info-header">
            <h3>${job.salary}/hr</h3>
            <h5>{job.location}</h5>
          </div>
          <button
            onClick={toggleShow}
            className={`detailBtn card-header${job.id} btn`}
          >
            {show ? "Hide Details" : "Details"}
          </button>
        </aside>
        {show && (
          <article className="card-body-info">
            <p>{job.description}</p>
            <h4>Requirements:</h4>
            {job.requirements.map((job) => (
              <ul key={job}>
                <li className="card-body-info-list">{job}</li>
              </ul>
            ))}
          </article>
        )}
      </section>
    </div>
  );
}

export default JobCards;
