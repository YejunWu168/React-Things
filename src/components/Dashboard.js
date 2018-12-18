import React from 'react';
import Header from '../components/Header';
import TodoListContainer from '../containers/TodoListContainer';
import ActionBar from '../components/ActionBar';

const Dashboard = props => (
    <main>
        <Header />
        <TodoListContainer />
        <ActionBar />
    </main>
);

export default Dashboard;