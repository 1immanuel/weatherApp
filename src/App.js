
import Weather from './components/Weather';
import './components/App.css'; 


function App() {

  const dateHeading = (d) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`
  }

  return (
    <div className="App">
      <>
        {/* navbar */}
        <div className='navbar'>
            <div className='navItems'>
              <div className='home'>
                <a href="#home">ClearSkies</a>
              </div>
              {/* user auth if time */}
              <div className='authenticate'>
                <a href="signin">Sign In</a>
                <a href="signup">Sign Up</a>
              </div>
            </div>
          </div>
        <main className="site">
         {/* Header with date/time */}
          <div className='header'>
            {dateHeading(new Date())}
          </div>

          {/* weather card */}
          <div className='weather'>

            <Weather />

          </div>
          
        </main>
      </>
    </div>
  );
}

export default App;
