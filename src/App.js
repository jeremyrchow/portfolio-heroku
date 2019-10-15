import React from 'react';
import './App.css';
import HeaderBanner from './components/HeaderBanner'
import Navbar from 'react-bootstrap/Navbar'
import ProjectContainer from './components/ProjectContainer'
import ProfilePic from './assets/Jeremy_Chow_White_Background.jpg'
import ContactForm from './components/ContactForm'
import SocialMediaLinks from './components/SocialMediaLinks'
function App() {
  // style={{fontSize: 'calc(2em + 3vw'}}
    return (
        <div className="App">

        <HeaderBanner />

        <div className = "profile-pic">
            <img
            style={{borderRadius: "50%", height: "35vw", transition: "opacity 0.5s", opacity: 1}} 
            src = {ProfilePic}
            alt = "JeremyChowPicture"
            />
        </div>
        <div className = "intro-text">
            <h1> {"Hi, my name is "} </h1>
            <h1> {"Jeremy Chow"} </h1>
            <SocialMediaLinks />
            <p> I'm a Data Scientist passionate about using machine learning models to impact business
             decisions and gather meaningful insights.</p>
            <p> I am comfortable in the following technologies: </p>
            <div style={{display: "flex",textAlign: "left"}}>

                <ul style = {{margin: "auto"}}> 
                <h4> <strong>Languages</strong> </h4>
                    <li> Python </li>
                    <li> SQL </li>
                    <li> JavaScript, HTML </li>
                    <li> C++, C </li>
                    <li> Java </li>
                </ul>
                <ul style = {{margin: "auto"}}> 
                <h4> <strong>Frameworks </strong></h4>
                    <li> Pandas </li>
                    <li> TensorFlow </li>
                    <li> Keras </li>
                    <li> Flask </li>
                </ul>
                <ul style = {{margin: "auto"}}> 
                <h4> <strong> Other </strong></h4>
                    <li> Tableau</li>
                    <li> AWS EC2, RDS </li>
                    <li> REST APIs </li>
                    <li> Jupyter Notebooks </li>
                </ul>
            </div>
        </div>


        <div className = "project-wrapper">
            <hr /> 
            <h1 style={{fontSize: "calc(2em + 2vw)", textAlign: "left"}}> Data Science Projects </h1>

            <ProjectContainer 
                title="Game Recommender for Twitch Streamers"
                description = {"Suggested games for content creators to stream with the goal of increasing \
                viewership based on previous \
                streaming activity and time series analysis on streamer/viewer balance data on Twitch. \
                Built complete data pipeline that automated Twitch API calls on an Amazon EC2 instance \
                and stored data in SQL database on an Amazon RDS instance."}

                github="https://github.com/"
            /> 

            <ProjectContainer 
                title="Chatroom Toxicity Classifier Chatbot"

                description = {"Built a chatbot that predicted the probability that an online comment \
                is toxic. Deployed model \
                on website and through Twitch chatbot programmed in JavaScript to classify live chat \
                in real time. Model used \
                TF-IDF vectorization and logistic regression to process and classify comments on a 0-1 scale for six \
                different categories that were present in the labeled training set. Models and pipeline built using \
                Scikit-learn library. Basic API for chatbot to interface with website built using Flask. \
                Website is deployed \
                on Heroku and is available to try below."}

                github="https://github.com/jeremyrchow/harassment-classifier"

                medium = "https://towardsdatascience.com/quantifying-chatroom-toxicity-e755dd2f9ccf"

                link = "https://chat-toxicity-classifier.herokuapp.com/"
            />

            <ProjectContainer 
                title="Generating text in the style of Edgar Allen Poe"

                description = 
                {["Generated text in the style of Edgar Allen Poe, specifically emulating his writing style \
                in ", <a key="p3_link" href = "https://www.kaggle.com/c/spooky-author-identification">
                select short horror stories.</a>, "Uses an embedding layer followed by 2 stacked LSTM layers. \
                Model built on Tensorflow framework with Keras library. \
                "]}

                github="https://github.com/jeremyrchow/text-generation-kaggle"
            />
            
            <ProjectContainer 
                title="Classifying Defaulting Loans Issued by LendingClub"
                
                description = 
                {["Predicted whether a Lending Club loan would default using random forest and gradient boosting \
                classifiers"]}

                github="https://github.com/jeremyrchow/lending_club_default_model"
            />

        </div>

    <ContactForm />

    <footer> Built by Jeremy Chow </footer>

    </div>
    );
}

export default App;



// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <p>
//     Jeremy Chow
//   </p>
// </header>