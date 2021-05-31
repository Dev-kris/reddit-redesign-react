import React from 'react';
import SinglePostItem from './postItem';
import './posts.css';

export default function Posts() {
  const posts = [
    {
      upvote: 547,
      image:
        'data:image/jpeg;base64,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',
      title: 'This is one confused cat!!',
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 284,
    },
    {
      upvote: 33,
      image:
        'https://i.pinimg.com/originals/b2/d0/90/b2d0902823653031912e9e44be5e7433.jpg',
      user: 'userIDexample',
      title: 'How do i say this word in french?',
      subreddit: 'cats',
      comment_count: 22,
    },
    {
      upvote: 223,
      image: 'https://peakon.com/wp-content/uploads/2018/08/twiglet.jpg',
      title:
        "Look. I'm a cat, if I see a box, I will sit in that box. Every time.",
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 144,
    },
    {
      upvote: 1240,
      image:
        'https://i2.wp.com/suddenlycat.com/wp-content/uploads/2020/09/SC-Blog-Background.png?resize=980%2C626&ssl=1',
      title:
        'Grumpy cat breaks world records and the internet with his newest portolio.',
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 1744,
    },
    {
      upvote: 547,
      image:
        'data:image/jpeg;base64,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',
      title: 'This is one confused cat!!',
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 284,
    },
    {
      upvote: 33,
      image:
        'https://i.pinimg.com/originals/b2/d0/90/b2d0902823653031912e9e44be5e7433.jpg',
      user: 'userIDexample',
      title: 'How do i say this word in french?',
      subreddit: 'cats',
      comment_count: 22,
    },
    {
      upvote: 223,
      image: 'https://peakon.com/wp-content/uploads/2018/08/twiglet.jpg',
      title:
        "Look. I'm a cat, if I see a box, I will sit in that box. Every time.",
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 144,
    },
    {
      upvote: 1240,
      image:
        'https://i2.wp.com/suddenlycat.com/wp-content/uploads/2020/09/SC-Blog-Background.png?resize=980%2C626&ssl=1',
      title:
        'Grumpy cat breaks world records and the internet with his newest portolio.',
      user: 'userIDexample',
      subreddit: 'cats',
      comment_count: 1744,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <SinglePostItem post={post} />
      ))}
    </div>
  );
}