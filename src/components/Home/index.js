import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-L.png';
import AnimatedLetters from '../AnimatedLetters';
//import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'y', 'a', 'n']                  //['l', 'o', 'b', 'o', 'd', 'a', 'n']
    // const jobArray = ['w', 'e', 'b', ' ' , 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const jobArray = "A software developer.".split("");

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> {/* 12 is adding the delay from the animatedLetters class  12 = 1.2 seconds of delay; 12 is also the index*/}
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>    {/*using the animation to replace lobodan*/}
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={15}/>     {/*using the animation to replace web developer*/}
                </h1>
                <h2>Computer Scientist / Software Developer </h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link> 
            </div>
            {/* <Logo /> */}
            <img src={LogoTitle} alt="logo" className='logo' />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home