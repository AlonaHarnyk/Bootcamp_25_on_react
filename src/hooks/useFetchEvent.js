import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'servises/events-api';

export const useFetchEvent = () => {
    const {eventId} = useParams()
    const [event, setEvent] = useState(null)

    useEffect(() => {
        fetchEventById(eventId).then(setEvent)
    }, [eventId])
    return event
}