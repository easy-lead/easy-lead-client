import {createBrowserRouter} from 'react-router-dom'
import Header from 'app/layouts/Header.tsx'
import SimplificationText from 'pages/SimplificationText.tsx'
import SimplificationFile from 'pages/SimplificationFile.tsx'
import Simplification from 'pages/Simplification.tsx'
import Home from 'pages/Home.tsx'
import BookViewer from 'pages/BookViewer.tsx'
import NotFound from 'pages/NotFound.tsx'
import RequestBook from 'pages/RequestBook.tsx'
import Library from 'pages/Library.tsx'
import RequestSuccess from 'pages/RequestSuccess.tsx'
import MyInfo from 'pages/MyInfo.tsx'

const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
    },
    {
        path: '/',
        element: <Header logoSrc="/images/logo_image.svg" />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
    },
    {
        path: '/simplification',

        element: <Header logoSrc="/images/dadog_tr.png" title="글 맞추기" subtitle="어려운 글을 읽기 쉽게 바꿔요" />,
        children: [
            {
                path: '',
                element: <Simplification />,
            },
            {
                path: 'text',
                element: <SimplificationText />,
            },
            {
                path: 'file',
                element: <SimplificationFile />,
            },
        ],
    },
    {
        path: '/library',
        element: (
            <Header logoSrc="/images/dadog_tr.png" title="글맞춤 도서관" subtitle="쉽게 읽을 수 있는 책을 찾아봐요" />
        ),
        children: [
            {
                path: '',
                element: <Library />,
            },
        ],
    },
    {
        path: '/request-book',
        element: (
            <Header logoSrc="/images/pl.svg" title="글맞춤 부탁하기" subtitle="글맞춤 도서관에 없는 책을 알려주세요." />
        ),
        children: [
            {
                path: '',
                element: <RequestBook />,
            },
            {
                path: 'success',
                element: <RequestSuccess />,
            },
        ],
    },
    {
        path: '/',
        element: (
            <Header logoSrc="/images/pl.svg" title="글맞춤 부탁하기" subtitle="글맞춤 도서관에 없는 책을 알려주세요." />
        ),
        children: [
            {
                path: 'view',
                element: <BookViewer />,
            },
        ],
    },
    {
        path: '/my',
        element: (
            <Header
                logoSrc="/images/pl.svg"
                title="나의 글맞춤 부탁하기"
                subtitle="내가 부탁한 책, 글맞춤이 어디까지 되었는지 보세요."
            />
        ),
        children: [
            {
                path: '',
                element: <MyInfo />,
            },
            {
                path: 'view',
                element: <BookViewer />,
            },
        ],
    },
])

export default router
