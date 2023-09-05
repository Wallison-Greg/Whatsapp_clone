import './App.css';

//icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <header>

          <img className='header--avatar' src='https://pps.whatsapp.net/v/t61.24694-24/361328749_2611165299191006_5229913777978113971_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQeLZ7dgTo06AVpNXXv0cfNVwxa_mznnusAMfbainY5ZA&oe=6504358C&_nc_cat=104'/>

          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon/>
            </div>
            <div className='header--btn'>
              <ChatIcon/>
            </div>
            <div className='header--btn'>
              <MoreVertIcon/>
            </div>
          </div>

        </header>

        <div className='search'>
          <div className='search--input'>
              <SearchIcon/>
              <input type='search' placeholder='procurar ou começar uma nova conversa'/>
          </div>
        </div>
        <div className='chatlist'>...</div>
      </div>
      <div className='contentarea'>...</div>
    </div>
  );
}

export default App;
