import React from "react";

export default function Home() {
  const classes = [
    {
      name: "Geography",
      period: 1,
      studentCount: 28,
    },
    {
      name: "Algebra",
      period: 2,
      studentCount: 17,
    },
    {
      name: "AP Physics",
      period: 3,
      studentCount: 30,
    },
  ];

  const renderClasses = classes.map((classObject) => {
    return (
      <li>
        <h1>classObject.name</h1>
        <h6>classObject.period</h6>
        <h6>classObject.studentCount</h6>
      </li>
    );
  });

  return (
    <>
      <div>hi</div>
      <ul>
        {renderClasses}
      </ul>
    </>
  );
}
