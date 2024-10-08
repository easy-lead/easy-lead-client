import styled from 'styled-components'
import {useEffect, useState} from 'react'
import customAxios from 'shared/customAxios.ts'
import {useNavigate} from 'react-router-dom'
import {Book} from 'features/search/useBookSearch.ts'

export default function MyInfo() {
    const [IngBook, setIngBook] = useState<Book[]>([])
    const navigation = useNavigate()

    console.log(IngBook)

    useEffect(() => {
        const fetchRequested = async () => {
            const {data} = await customAxios.get('/user/request', {
                params: {
                    userId: 1,
                },
            })
            setIngBook(data)
        }
        fetchRequested()
    }, [])

    const getProgressText = (progress) => {
        switch (progress) {
            case 'P0':
                return '부탁하기 완료'
            case 'P1':
                return '담당자 확인'
            case 'P2':
                return '글맞춤'
            case 'P3':
                return '검수'
            case 'P4':
                return '글맞춤을 완료했어요'
            default:
                return ''
        }
    }

    const getProgressColor = (progress) => {
        switch (progress) {
            case 'P0':
                return '#FF7949'
            case 'P1':
                return '#FF7949'
            case 'P2':
                return '#FF7949'
            case 'P3':
                return '#FF7949'
            case 'P4':
                return '#219C90'
            default:
                return 'black'
        }
    }

    const handleView = (title, isbn) => {
        navigation(`/my/view?isbn=${isbn}&title=${title}`)
    }

    return (
        <Container>
            <Title>아직 글맞춤 하고있는 책</Title>
            <BookWrapper>
                {IngBook.map((book) => (
                    <BookDiv onClick={() => handleView(book.title, book.requestId.isbn)} key={book?.isbn}>
                        <BookImg src={book?.cover} alt={book?.title} />
                        <BookContent>
                            <BookTitle>{book?.title}</BookTitle>
                            <BookAuthor>{book?.author}</BookAuthor>
                            <ProgressText color={getProgressColor(book?.progress)}>
                                {getProgressText(book?.progress)}
                            </ProgressText>
                        </BookContent>
                    </BookDiv>
                ))}
            </BookWrapper>

            <Title>글 맞춤이 끝난책</Title>
            <BookWrapper>
                {IngBook.map((book: Book) => (
                    <BookDiv key={book?.isbn}>
                        <BookImg src={book?.cover} alt={book?.title} />
                        <BookContent>
                            <BookTitle>{book?.title}</BookTitle>
                            <BookAuthor>{book?.author}</BookAuthor>
                            <ProgressText color={getProgressColor(book?.progress)}>
                                {getProgressText(book?.progress)}
                            </ProgressText>
                        </BookContent>
                    </BookDiv>
                ))}
            </BookWrapper>
        </Container>
    )
}

const Container = styled.main`
    border: 5px solid #f3f3f3;
    max-height: 406px;
    padding: 6% 6%;

    display: flex;
    flex-direction: column;
    gap: 5%;

    overflow-y: auto;
    scrollbar-width: none;
`

const BookImg = styled.img`
    height: 150px;
`

const BookWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5%;
    row-gap: 20px;
`

const BookDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    gap: 2%;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

const BookContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Title = styled.h1`
    font-weight: 700;
    border-bottom: solid black 1px;
    line-height: 40px;
    height: 40px;
    margin-bottom: 20px;
`

const BookTitle = styled.h2`
    font-weight: bold;
`

const BookAuthor = styled.p`
    color: gray;
    font-size: 13px;
`

const ProgressText = styled.p`
    color: ${(props) => props.color};
    font-size: 13px;
`
