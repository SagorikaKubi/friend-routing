import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId])

    return (
        <div>
            <h3>friend details {friendId}</h3>
            <h3>Name: {friend.name}</h3>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;