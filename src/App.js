import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import TimerWindow from './components/TimerWindow';
import TimerControls from './components/TimerControls';
import TimerAdjust from './components/TimerAdjust';
import React, { useState, useEffect } from 'react'
import timeParser from './functions/timeParser';

function App() {
  const [timer, setTimer] = useState ({
    minutes: 25,
    seconds: 0,
    work: 25,
    break: 5,
    working: true,
    paused: true
  });

  useEffect(() => {
    if(timer.paused) {
      return;
    }
    const interval = setInterval(() => {
      let seconds = timer.seconds;
      let minutes = timer.minutes;
      let changeSession = false;
      let newState = {};

      if (seconds - 1 === -1) {
        seconds = 59;
        minutes = minutes - 1;
      } else {
        seconds = seconds - 1;
      }

      if(minutes === 0 && seconds === 0) {
        window.navigator.vibrate(1000);
        if(timer.working) {
          minutes = timer.break
        } else {
          minutes = timer.work;
        }
        changeSession = true;
      }

      if(changeSession) {
        newState = {
          ...timer,
          minutes: minutes,
          seconds: seconds,
          working: !timer.working
        }
      } else {
        newState = {
          ...timer,
          minutes: minutes,
          seconds: seconds
        }
      }

      setTimer(newState);
    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);


  const handleClickWork = (type) => () => {
    if(type === "up") {
      setTimer({...timer, work: timer.work + 1});
    } else if (type === "down") {
      setTimer(
        {...timer,
          work: timer.work - 1 === 0 ? 1 : timer.work - 1});
    }
  }

  const handleClickBreak = (type) => () => {
    if(type === "up") {
      setTimer({...timer, break: timer.break + 1});
    } else if (type === "down") {
      setTimer(
        {...timer,
          break: timer.break- 1 === 0 ? 1 : timer.break - 1});
    }
  }

  const setPaused = (value) => () => {
    setTimer({...timer, paused: value})
  }

  const restart = () => () => {
    setTimer({
      ...timer,
      minutes: timer.work,
      seconds: 0,
      working: true,
    })
  }

  return (
    <Container fluid style={{marginTop: '40px', paddingTop: '20px', width: '20rem', minHeight: '20rem', border: '3px solid black', borderRadius: '10px'}}>
      <h1 style={{textAlign: 'center', padding: '10px'}}>BREAK TIMER</h1>
      <Row style={{padding: '0px 0 20px 0'}}>
        <Col xs={{ span: 5, offset: 1}}>
          <TimerAdjust changeValue={handleClickWork} time={timer} type='work'/>
        </Col>
        <Col>
        <TimerAdjust changeValue={handleClickBreak} time={timer} type='break'/>
        </Col>
      </Row>
        <TimerWindow time={timeParser(timer)} working={timer.working}/>
      <Row>
        <Col style={{textAlign: 'center', fontSize: '3rem'}}>
          <TimerControls setPaused={setPaused} restart={restart}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
