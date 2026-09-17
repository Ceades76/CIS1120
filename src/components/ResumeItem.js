export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  children,
}) {
  return (
    // Paste the resume item <section> HTML here over lines 10 and 11
    <section>
      <h3>
        {name} | {dept}
      </h3>
      <section>
        <h4>
          {position} <time dateTime="{startDate}">{startDate}</time> -
          <time dateTime="{endDate}">{endDate}</time>
        </h4>
        <ul>{children}</ul>
      </section>
    </section>
  );
}
