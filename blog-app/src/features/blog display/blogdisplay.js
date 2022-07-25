import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux';
import './BlogDisplay.css';

const BlogDisplay = ({ id, title, content, publication, author, published_on }) => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('blogs')
            .doc(id)
            .collection('comments')
            .onSnapshot((snapshot) =>
                setComments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            );
    }, []);

   

    return (
        <div className='blogDisplay'>
            <h2 className='blogDisplay__title'>{title}</h2>
            <span className='blogDisplay__author'>Author: {author}</span>
            <p className='blogDisplay__content'>{content}</p>
            <p className='blogDisplay__publication'>{publication}</p>
            <p className='blogDisplay__published_on'>{published_on}</p>

            <hr />

            <div className='blogDisplay__comments'>
                <h3>Comments</h3>

                <div className='blogDisplay__commentsContainer'>
                    {user ? (
                        <>
                            <form className='blogDisplay__addComment'>
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type='text'
                                    placeholder='Write a comment...'
                                />
                                <button onClick={sendComment} type='submit'>
                                    Add
                                </button>
                            </form>


                        </>
                    ) : (
                        <>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDisplay;