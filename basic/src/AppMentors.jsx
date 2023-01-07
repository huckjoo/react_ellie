import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Dcron',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          const findIndex = person.mentors.findIndex(
            (element) => element.name === prev
          );
          let copyedArray = [...person.mentors];
          if (findIndex !== -1) {
            copyedArray[findIndex] = {
              ...copyedArray[findIndex],
              name: current,
            };
          }
          setPerson((previous) => ({
            ...previous,
            mentors: copyedArray,
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
