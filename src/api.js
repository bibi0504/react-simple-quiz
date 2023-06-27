import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/quiz').reply(
    200,
    [
        {
            question: 'What is React?',
            answers: [
                'A JavaScript framework for building user interfaces',
                'A server-side scripting language',
                'A database management system',
            ],
            correctAnswer: 'A JavaScript framework for building user interfaces',
            level: 1,
        },
        {
            question: 'What is JSX in React?',
            answers: [
                'A syntax extension to JavaScript',
                'A server-side rendering engine',
                'A relational database management system',
            ],
            correctAnswer: 'A syntax extension to JavaScript',
            level: 1,
        },
        {
            question: 'What is the Virtual DOM in React?',
            answers: [
                'A lightweight representation of the actual DOM',
                'A JavaScript function that generates HTML',
                'A tool used for testing React components',
            ],
            correctAnswer: 'A lightweight representation of the actual DOM',
            level: 1,
        },
        {
            question: 'What is Redux?',
            answers: [
                'A state management library for React',
                'A testing framework for React',
                'A CSS-in-JS library for React',
            ],
            correctAnswer: 'A state management library for React',
            level: 2,
        },
        {
            question: 'What are React Hooks?',
            answers: [
                'Functions that let you use React features without classes',
                'Methods used for API calls in React',
                'A way to handle errors in React applications',
            ],
            correctAnswer: 'Functions that let you use React features without classes',
            level: 2,
        },
        {
            question: 'What is the difference between state and props in React?',
            answers: [
                'State is mutable, while props are immutable',
                'Props are passed down from a parent component, while state is local to a component',
                'State and props are interchangeable terms',
            ],
            correctAnswer: 'Props are passed down from a parent component, while state is local to a component',
            level: 2,
        },
        {
            question: 'What is the purpose of React Router?',
            answers: [
                'To handle client-side routing in React applications',
                'To manage state in React applications',
                'To create animations in React applications',
            ],
            correctAnswer: 'To handle client-side routing in React applications',
            level: 3,
        },
        {
            question: 'What is server-side rendering in React?',
            answers: [
                'Rendering React components on the server side before sending HTML to the client',
                'Rendering React components on the client side using JavaScript',
                'Rendering React components on the server side after sending HTML to the client',
            ],
            correctAnswer: 'Rendering React components on the server side before sending HTML to the client',
            level: 3,
        },
        {
            question: 'What is the difference between controlled and uncontrolled components in React?',
            answers: [
                'Controlled components have their state managed by React, while uncontrolled components have their state managed by the DOM',
                'Uncontrolled components receive their state from the Redux store, while controlled components receive their state from a parent component',
                'There is no difference between controlled and uncontrolled components in React',
            ],
            correctAnswer:
                'Controlled components have their state managed by React, while uncontrolled components have their state managed by the DOM',
            level: 3,
        },
        {
            question: 'What is React Native?',
            answers: [
                'A framework for building mobile apps using React',
                'A library for server-side rendering in React',
                'A tool for testing React components',
            ],
            correctAnswer: 'A framework for building mobile apps using React',
            level: 4,
        },
    ].sort(() => Math.random() - 0.5)
);
