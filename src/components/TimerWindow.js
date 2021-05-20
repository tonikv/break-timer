import React from 'react'
import Card from 'react-bootstrap/Card';

const TimerWindow = ( {time, working} ) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{working ? 'Working' : 'Take a Break'}</Card.Title>
                    <Card.Text>
                        {time.minutes}:{time.seconds}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TimerWindow
