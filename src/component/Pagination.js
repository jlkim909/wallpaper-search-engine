import styled from 'styled-components';
import { ReactComponent as PrevIcon } from '../asset/prev.svg';
import { ReactComponent as NextIcon } from '../asset/next.svg';
import { useContext } from 'react';
import { paramContext } from '../App';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px;
    color: var(--text); ;
`;

const PageSelect = styled.select`
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    font-size: 16px;
    color: var(--highlight);
    font-weight: bold;
    font-family: inherit;
    &:focus {
        outline: none;
    }
`;

const Pagination = ({ numberOfPage }) => {
    const { params, setParams } = useContext(paramContext);

    const onClickPrev = () => {
        setParams((prev) => ({ ...prev, page: params.page - 1 }));
    };

    const onClickNext = () => {
        setParams((prev) => ({ ...prev, page: params.page + 1 }));
    };

    const onChangePage = (e) => {
        setParams((prev) => ({ ...prev, page: parseInt(e.target.value) }));
    };
    return (
        <Nav>
            {params?.page > 1 ? (
                <PrevIcon
                    width="24"
                    cursor="pointer"
                    fill="var(--text)"
                    onClick={onClickPrev}
                />
            ) : null}
            {`총 ${numberOfPage} 중 `}
            <PageSelect
                name="currentPage"
                onChange={onChangePage}
                value={params?.page}
            >
                {Array(numberOfPage)
                    .fill()
                    .map((_, idx) => (
                        <option value={idx + 1} key={idx + 1}>
                            {idx + 1}
                        </option>
                    ))}
            </PageSelect>
            페이지
            {numberOfPage > params?.page ? (
                <NextIcon
                    width="24"
                    cursor="pointer"
                    fill="var(--text)"
                    onClick={onClickNext}
                />
            ) : null}
        </Nav>
    );
};

export default Pagination;
