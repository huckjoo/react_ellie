import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialState);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((previous) => ({
      ...previous,
      mentors: previous.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const newName = prompt(`추가할 멘토의 이름을 알려주세요.`);
    const newTitle = prompt(`추가할 멘토의 직책을 알려주세요.`);
    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name: newName, title: newTitle }],
    }));
  };
  const handleDelete = () => {
    const targetMentor = prompt(`삭제할 멘토의 이름을 알려주세요.`);
    setPerson((prev) => ({
      ...prev,
      mentors: person.mentors.filter((mentor) => mentor.name !== targetMentor),
    }));
  };

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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialState = {
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
};
