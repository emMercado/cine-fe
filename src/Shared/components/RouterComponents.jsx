import { lazy } from 'react';

const HomePage = lazy(() => import('../../Home/pages/HomePage.jsx'));
const UserManagerPage = lazy(() => import('../../Users/pages/UserManagerPage.jsx'));
const MoviesManagerPage = lazy(() => import('../../Movies/pages/MoviesManagerPage.jsx'));
const RoomManagerPage = lazy(() => import('../../Rooms/pages/RoomManagerPage.jsx'));
const ScheduleManagerPage = lazy(() => import('../../Schedule/pages/ScheduleManagerPage.jsx'));
const TicketManagerPage = lazy(() => import('../../Ticket/pages/TicketManagerPage.jsx'));
const AuthPage = lazy(() => import('../../Auth/pages/AuthPage.jsx'));

const RouterComponents = (path) => {
    switch (path) {
        case '/':
            return HomePage;
        case '/user/manager':
            return UserManagerPage;
        case '/movie/manager':
            return MoviesManagerPage;
        case '/room/manager':
            return RoomManagerPage;
        case '/schedule/manager':
            return ScheduleManagerPage;
        case '/ticket/manager':
            return TicketManagerPage;
        case '/auth/':
            return AuthPage;
        
        default:
            return <><h1>holamundo{console.log('not bad')}</h1></>
        // Ver si hace falta tirar a un 404, si navegan a una url que no existe
    }
};

export default RouterComponents;
