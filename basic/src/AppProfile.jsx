import Profile from './components/Profile';
import './App.css';

function AppProfile() {
  return (
    <>
      <Profile
        image='https://images.unsplash.com/photo-1548858806-e064cf9872c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGF0dHJhY3RpdmUlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        name='Olivia'
        title='프론트엔드 개발자'
        isNewbie={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob yu'
        title='백엔드 개발자'
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna Young'
        title='디자이너'
      />
    </>
  );
}

export default AppProfile;
